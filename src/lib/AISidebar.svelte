<script>
	import { onMount, tick } from 'svelte';
	import { darkMode } from '$lib/darkModeStore.js';
	import { createBudgetChat } from '$lib/ai.js';
	import AISettings from '$lib/AISettings.svelte';
	import MessageRenderer from '$lib/MessageRenderer.svelte';

	/** Whether the sidebar is visible */
	export let open = false;
	/** The user's Gemini API key (empty string = not configured) */
	export let apiKey = '';
	/** Current user for saving the key */
	export let currentUser = /** @type {import('firebase/auth').User | null} */ (null);
	/**
	 * Budget context string (pre-built with buildBudgetContext()) passed from the main page.
	 * @type {string}
	 */
	export let budgetContext = '';
	/** Called when the user applies an AI action command */
	export let onAction = (/** @type {Record<string, unknown>} */ _cmd) => {};
	/** Called when the API key is saved so the parent can persist and update */
	export let onKeySaved = (/** @type {string} */ _key) => {};

	/**
	 * @typedef {{ role: 'user' | 'assistant'; text?: string; blocks?: import('./ai.js').AIBlock[]; loading?: boolean }} ChatMessage
	 */

	/** @type {ChatMessage[]} */
	let messages = [];
	let inputText = '';
	let sending = false;
	/** @type {ReturnType<import('./ai.js').createBudgetChat> | null} */
	let chat = null;
	/** @type {HTMLElement | null} */
	let messagesEl = null;
	/** @type {HTMLTextAreaElement | null} */
	let inputEl = null;

	$: if (open && inputEl) {
		setTimeout(() => inputEl?.focus(), 50);
	}

	// Re-create the chat session when the api key or budget context changes
	$: if (apiKey && budgetContext) {
		try {
			chat = createBudgetChat(apiKey, budgetContext);
		} catch {
			chat = null;
		}
	}

	async function sendMessage() {
		const text = inputText.trim();
		if (!text || sending || !chat) return;

		inputText = '';
		sending = true;

		messages = [...messages, { role: 'user', text }];
		const loadingIdx = messages.length;
		messages = [...messages, { role: 'assistant', loading: true }];

		await tick();
		scrollToBottom();

		try {
			const response = await chat.sendMessage(text);
			messages = messages.map((m, i) =>
				i === loadingIdx ? { role: 'assistant', blocks: response.blocks } : m
			);
		} catch (err) {
			const errMsg = err instanceof Error ? err.message : String(err);
			messages = messages.map((m, i) =>
				i === loadingIdx
					? {
							role: 'assistant',
							blocks: [
								{
									type: 'callout',
									variant: 'warning',
									content: `**Error:** ${errMsg}`
								}
							]
					  }
					: m
			);
		} finally {
			sending = false;
			await tick();
			scrollToBottom();
		}
	}

	function scrollToBottom() {
		if (messagesEl) {
			messagesEl.scrollTop = messagesEl.scrollHeight;
		}
	}

	/** @param {KeyboardEvent} e */
	function handleKeydown(e) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	}

	function clearChat() {
		messages = [];
		// Reset chat session to avoid stale history
		if (apiKey && budgetContext) {
			try {
				chat = createBudgetChat(apiKey, budgetContext);
			} catch {
				chat = null;
			}
		}
	}

	/** @param {Record<string, unknown>} command */
	function handleAction(command) {
		onAction(command);
	}

	const SUGGESTED_PROMPTS = [
		'How much am I spending vs my income this month?',
		'Give me 3 tips to save more money',
		'Show me a spending breakdown by category',
		"What's my projected annual savings?"
	];
</script>

<!-- Backdrop -->
{#if open}
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div class="sidebar-backdrop" on:click={() => (open = false)}></div>
{/if}

<aside class="ai-sidebar" class:open class:dark-mode={$darkMode} aria-label="AI Budget Assistant">
	<!-- Header -->
	<div class="sidebar-header">
		<div class="sidebar-title">
			<span>🤖</span>
			<span>Budget AI</span>
		</div>
		<div class="header-actions">
			{#if messages.length > 0}
				<button class="icon-btn-sm" title="Clear chat" on:click={clearChat}>🗑</button>
			{/if}
			<button class="icon-btn-sm close-btn" title="Close" on:click={() => (open = false)}>✕</button>
		</div>
	</div>

	<div class="sidebar-body">
		{#if !apiKey}
			<!-- Setup state -->
			<div class="setup-wrap">
				<AISettings {currentUser} onKeySaved={(key) => { apiKey = key; onKeySaved(key); }} />
			</div>
		{:else}
			<!-- Chat state -->
			<div class="messages" bind:this={messagesEl}>
				{#if messages.length === 0}
					<div class="empty-state">
						<p class="empty-title">What can I help you with?</p>
						<div class="suggested-prompts">
							{#each SUGGESTED_PROMPTS as prompt}
								<button
									class="prompt-chip"
									on:click={() => { inputText = prompt; sendMessage(); }}
								>{prompt}</button>
							{/each}
						</div>
					</div>
				{/if}

				{#each messages as msg}
					{#if msg.role === 'user'}
						<div class="msg msg-user">
							<p class="msg-text">{msg.text}</p>
						</div>
					{:else if msg.loading}
						<div class="msg msg-assistant">
							<div class="thinking-dots">
								<span></span><span></span><span></span>
							</div>
						</div>
					{:else if msg.blocks}
						<div class="msg msg-assistant">
							<MessageRenderer blocks={msg.blocks} onAction={handleAction} />
						</div>
					{/if}
				{/each}
			</div>

			<!-- Input -->
			<div class="input-row">
				<textarea
					bind:this={inputEl}
					bind:value={inputText}
					placeholder="Ask about your budget…"
					rows="2"
					class="chat-input"
					on:keydown={handleKeydown}
					disabled={sending}
				></textarea>
				<button class="send-btn" on:click={sendMessage} disabled={sending || !inputText.trim()} aria-label="Send">
					{#if sending}⏳{:else}➤{/if}
				</button>
			</div>

			<p class="key-hint">
				<button class="link-btn" on:click={() => (apiKey = '')}>Change API key</button>
			</p>
		{/if}
	</div>
</aside>

<style>
	.sidebar-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.25);
		z-index: 199;
		backdrop-filter: blur(1px);
	}

	.ai-sidebar {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 380px;
		max-width: 100vw;
		background: var(--color-surface);
		border-left: 1px solid var(--color-border);
		box-shadow: -4px 0 24px rgba(0, 0, 0, 0.12);
		display: flex;
		flex-direction: column;
		z-index: 200;
		transform: translateX(100%);
		transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.ai-sidebar.open {
		transform: translateX(0);
	}

	.dark-mode.ai-sidebar {
		box-shadow: -4px 0 24px rgba(0, 0, 0, 0.45);
	}

	/* ── Header ── */
	.sidebar-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.85rem 1rem;
		border-bottom: 1px solid var(--color-border);
		background: var(--color-bg-lighter);
		flex-shrink: 0;
	}
	.sidebar-title {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		font-weight: 700;
		font-size: 0.95rem;
		color: var(--color-text-primary);
	}
	.header-actions { display: flex; gap: 0.3rem; align-items: center; }
	.icon-btn-sm {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 0.9rem;
		padding: 0.2rem 0.35rem;
		border-radius: 5px;
		color: var(--color-text-secondary);
		transition: background 0.15s, color 0.15s;
	}
	.icon-btn-sm:hover { background: var(--color-border-light); color: var(--color-text-primary); }
	.close-btn:hover { color: var(--color-accent-red); }

	/* ── Body ── */
	.sidebar-body {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.setup-wrap {
		flex: 1;
		overflow-y: auto;
		padding: 1rem;
	}

	/* ── Messages ── */
	.messages {
		flex: 1;
		overflow-y: auto;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.msg { max-width: 100%; }

	.msg-user {
		align-self: flex-end;
		max-width: 85%;
	}
	.msg-user .msg-text {
		background: var(--color-accent-blue);
		color: #fff;
		padding: 0.55rem 0.85rem;
		border-radius: 12px 12px 2px 12px;
		font-size: 0.87rem;
		margin: 0;
		line-height: 1.45;
		word-break: break-word;
	}

	.msg-assistant { align-self: flex-start; width: 100%; }

	/* Thinking animation */
	.thinking-dots {
		display: flex;
		gap: 5px;
		padding: 0.55rem 0.7rem;
		background: var(--color-bg-lighter);
		border-radius: 12px 12px 12px 2px;
		width: fit-content;
	}
	.thinking-dots span {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--color-text-tertiary);
		animation: bounce 1.2s infinite ease-in-out;
	}
	.thinking-dots span:nth-child(2) { animation-delay: 0.2s; }
	.thinking-dots span:nth-child(3) { animation-delay: 0.4s; }
	@keyframes bounce {
		0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
		40%            { transform: scale(1.15); opacity: 1; }
	}

	/* ── Empty state ── */
	.empty-state { text-align: center; margin-top: 1.5rem; }
	.empty-title { font-size: 0.9rem; font-weight: 600; color: var(--color-text-primary); margin: 0 0 1rem; }
	.suggested-prompts {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		align-items: stretch;
	}
	.prompt-chip {
		background: var(--color-bg-lighter);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		padding: 0.5rem 0.75rem;
		font-size: 0.82rem;
		color: var(--color-text-secondary);
		cursor: pointer;
		text-align: left;
		transition: background 0.15s, color 0.15s, border-color 0.15s;
	}
	.prompt-chip:hover {
		background: var(--color-accent-blue-light);
		border-color: var(--color-accent-blue-border);
		color: var(--color-text-primary);
	}

	/* ── Input ── */
	.input-row {
		display: flex;
		gap: 0.5rem;
		padding: 0.75rem 1rem;
		border-top: 1px solid var(--color-border);
		background: var(--color-bg-light);
		flex-shrink: 0;
		align-items: flex-end;
	}
	.chat-input {
		flex: 1;
		min-width: 0;
		resize: none;
		padding: 0.5rem 0.65rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		font-size: 0.87rem;
		font-family: inherit;
		background: var(--color-surface);
		color: var(--color-text-primary);
		line-height: 1.45;
		transition: border-color 0.15s;
	}
	.chat-input:focus {
		outline: none;
		border-color: var(--color-accent-blue);
		box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-accent-blue) 20%, transparent);
	}
	.chat-input:disabled { opacity: 0.7; }

	.send-btn {
		padding: 0.5rem 0.85rem;
		background: var(--color-accent-blue);
		color: #fff;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		cursor: pointer;
		transition: opacity 0.15s;
		flex-shrink: 0;
		align-self: flex-end;
		line-height: 1.45;
	}
	.send-btn:hover:not(:disabled) { opacity: 0.85; }
	.send-btn:disabled { opacity: 0.5; cursor: default; }

	.key-hint {
		text-align: center;
		font-size: 0.75rem;
		color: var(--color-text-tertiary);
		padding: 0.3rem 0 0.5rem;
		margin: 0;
		flex-shrink: 0;
	}
	.link-btn {
		background: none;
		border: none;
		color: var(--color-accent-blue);
		font-size: 0.75rem;
		cursor: pointer;
		text-decoration: underline;
		padding: 0;
	}

	@media (max-width: 480px) {
		.ai-sidebar { width: 100vw; }
	}
</style>
