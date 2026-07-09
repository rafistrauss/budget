import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * @typedef {{ type: 'text'; content: string }} TextBlock
 * @typedef {{ type: 'callout'; variant: 'info' | 'warning' | 'success' | 'tip'; content: string }} CalloutBlock
 * @typedef {{ type: 'card'; title: string; content: string; dismissible?: boolean }} CardBlock
 * @typedef {{ type: 'table'; headers: string[]; rows: string[][] }} TableBlock
 * @typedef {{ type: 'action'; label: string; description: string; command: Record<string, unknown> }} ActionBlock
 * @typedef {TextBlock | CalloutBlock | CardBlock | TableBlock | ActionBlock} AIBlock
 * @typedef {{ blocks: AIBlock[] }} AIResponse
 */

const GEMINI_MODEL = 'gemini-2.0-flash-lite';

const SYSTEM_PROMPT = `You are a helpful personal budget assistant. You have access to the user's current budget data (provided as JSON below).

You MUST always respond with a valid JSON object with this exact structure:
{ "blocks": [ ...array of block objects... ] }

Available block types — use whichever combination best answers the user:

1. Prose / explanations:
   { "type": "text", "content": "<markdown string>" }

2. Highlighted callouts:
   { "type": "callout", "variant": "info|warning|success|tip", "content": "<markdown string>" }
   - "warning" → overspending alerts, risky patterns
   - "tip" → actionable advice or suggestions
   - "success" → positive insight (e.g. you're under budget)
   - "info" → neutral FYI

3. Dismissible suggestion cards (use one per suggestion):
   { "type": "card", "title": "<heading>", "content": "<markdown string>", "dismissible": true }

4. Data tables (spending breakdowns, comparisons):
   { "type": "table", "headers": ["Category", "Budget", "Actual"], "rows": [["Housing", "$2,500", "$2,350"], ...] }

5. Actionable budget commands (let the user apply a change):
   { "type": "action", "label": "<short label>", "description": "<what this will do>", "command": { "type": "addCategory", "name": "...", "baseAmount": 0 } }
   { "type": "action", "label": "...", "description": "...", "command": { "type": "updateCategoryAmount", "id": "...", "amount": 0 } }
   { "type": "action", "label": "...", "description": "...", "command": { "type": "addBonus", "name": "...", "amount": 0, "month": 0 } }

Guidelines:
- Keep responses concise and budget-focused.
- Always use the user's actual numbers; don't make up figures.
- For lists of tips/suggestions, use one dismissible card per item.
- Format currency values as $X,XXX.XX.
- Use markdown within content fields (bold, bullets, etc.) for clarity.
- ONLY respond in the JSON format above — never plain text.

Budget context:
{BUDGET_CONTEXT}`;

/**
 * Builds the budget context string to inject into the system prompt.
 * @param {object} ctx
 * @param {string} ctx.monthName
 * @param {number} ctx.year
 * @param {Array<{name: string; baseAmount: number; activeAmount: number}>} ctx.categories
 * @param {Array<{name: string; effectiveAmount: number; frequency: string}>} ctx.incomeSources
 * @param {Array<{name: string; amount: number}>} ctx.bonuses
 * @param {number} ctx.totalMonthlyIncome
 * @param {number} ctx.totalMonthlyBudget
 * @param {number} ctx.monthlySavings
 */
export function buildBudgetContext(ctx) {
	return JSON.stringify(
		{
			period: `${ctx.monthName} ${ctx.year}`,
			income: {
				sources: ctx.incomeSources.map((s) => ({
					name: s.name,
					monthlyAmount: `$${s.effectiveAmount.toFixed(2)}`,
					frequency: s.frequency
				})),
				bonuses: ctx.bonuses.map((b) => ({ name: b.name, amount: `$${b.amount.toFixed(2)}` })),
				totalMonthlyIncome: `$${ctx.totalMonthlyIncome.toFixed(2)}`
			},
			expenses: {
				categories: ctx.categories.map((c) => ({
					name: c.name,
					budgeted: `$${c.activeAmount.toFixed(2)}`
				})),
				totalBudgeted: `$${ctx.totalMonthlyBudget.toFixed(2)}`
			},
			projectedMonthlySavings: `$${ctx.monthlySavings.toFixed(2)}`
		},
		null,
		2
	);
}

/**
 * Creates a Gemini chat session with budget context baked into the system prompt.
 * Returns a function to send messages and get back typed AIResponse objects.
 * @param {string} apiKey
 * @param {string} budgetContext JSON string from buildBudgetContext
 */
export function createBudgetChat(apiKey, budgetContext) {
	const genAI = new GoogleGenerativeAI(apiKey);
	const systemInstruction = SYSTEM_PROMPT.replace('{BUDGET_CONTEXT}', budgetContext);

	const model = genAI.getGenerativeModel({
		model: GEMINI_MODEL,
		systemInstruction,
		generationConfig: {
			responseMimeType: 'application/json'
		}
	});

	/** @type {import('@google/generative-ai').Content[]} */
	const history = [];

	/**
	 * @param {string} message
	 * @returns {Promise<AIResponse>}
	 */
	async function sendMessage(message) {
		const chat = model.startChat({ history });
		const result = await chat.sendMessage(message);
		const text = result.response.text();

		// Record the turn in history for multi-turn context
		history.push({ role: 'user', parts: [{ text: message }] });
		history.push({ role: 'model', parts: [{ text }] });

		return parseAIResponse(text);
	}

	return { sendMessage };
}

/**
 * Validates the API key by sending a minimal test message.
 * Throws if the key is invalid or the request fails.
 * @param {string} apiKey
 */
export async function testApiKey(apiKey) {
	const genAI = new GoogleGenerativeAI(apiKey);
	const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });
	await model.generateContent('Reply with the single word: ok');
}

/**
 * Converts a raw Gemini API error into a user-friendly message.
 * Detects the common "billing enabled → free-tier quota = 0" pattern.
 * @param {unknown} err
 * @returns {string}
 */
export function friendlyApiError(err) {
	const msg = err instanceof Error ? err.message : String(err);

	if (msg.includes('free_tier') && msg.includes('limit: 0')) {
		return (
			'Your API key belongs to a Google Cloud project with billing enabled, ' +
			'which removes the free-tier quota. To fix this:\n\n' +
			'1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey) and create a key ' +
			'in a **new project** (no billing attached).\n' +
			'2. Or, in [Google Cloud Console](https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas), ' +
			'increase the paid-tier quota for your model.'
		);
	}

	if (msg.includes('429') || msg.toLowerCase().includes('quota')) {
		return 'Rate limit hit. Please wait a moment and try again.';
	}

	if (msg.includes('403') || msg.toLowerCase().includes('permission')) {
		return 'API key is valid but lacks permission to call this model. Check your Google AI Studio project settings.';
	}

	if (msg.includes('404')) {
		return 'Model not found. Your API key may not have access to this model yet — try regenerating it in Google AI Studio.';
	}

	return msg;
}
function parseAIResponse(text) {
	try {
		const parsed = JSON.parse(text);
		if (Array.isArray(parsed?.blocks)) {
			return /** @type {AIResponse} */ (parsed);
		}
	} catch {
		// fall through to fallback
	}
	// Fallback: wrap raw text as a single text block
	return { blocks: [{ type: 'text', content: text }] };
}
