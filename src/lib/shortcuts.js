/**
 * @typedef {Object} Shortcut
 * @property {string} label Button text (may include an emoji)
 * @property {string} title Transaction title to prefill
 * @property {'credit' | 'debit' | 'transfer'} type
 * @property {string} amount Dollar amount, empty for none
 * @property {number} day Day of month for the upcoming date
 * @property {string} account 'checking' or 'savings' (the forced account for checking-only shortcuts is 'checking')
 * @property {string} transferTo Target account for transfers, otherwise empty
 * @property {string} logo Optional logo key: chase, target, amazon, pseg, verizon
 */

export const SHORTCUTS_STORAGE_KEY = 'shortcutButtons';

export const LOGO_KEYS = ['', 'chase', 'target', 'amazon', 'pseg', 'verizon'];

/** @type {Shortcut[]} */
export const DEFAULT_SHORTCUTS = [
	{ label: '💰 Deposit to Savings', title: 'Deposit to Savings', type: 'credit', amount: '', day: 1, account: 'savings', transferTo: '', logo: '' },
	{ label: '🔄 Transfer from Savings', title: 'Transfer from Savings', type: 'transfer', amount: '', day: 1, account: 'savings', transferTo: 'checking', logo: '' },
	{ label: 'Rent', title: 'Rent', type: 'debit', amount: '3445', day: 1, account: 'checking', transferTo: '', logo: '' },
	{ label: '🚗 Auto Loan', title: 'Auto Loan', type: 'debit', amount: '723.5', day: 8, account: 'checking', transferTo: '', logo: '' },
	{ label: 'Chase Credit Card', title: 'Chase Credit Card', type: 'debit', amount: '', day: 8, account: 'checking', transferTo: '', logo: 'chase' },
	{ label: 'Target Credit Card', title: 'Target Credit Card', type: 'debit', amount: '', day: 8, account: 'checking', transferTo: '', logo: 'target' },
	{ label: 'Amazon Store Card', title: 'Amazon Store Card', type: 'debit', amount: '', day: 8, account: 'checking', transferTo: '', logo: 'amazon' },
	{ label: 'PSEG', title: 'PSEG', type: 'debit', amount: '269', day: 8, account: 'checking', transferTo: '', logo: 'pseg' },
	{ label: 'Verizon', title: 'Verizon', type: 'debit', amount: '49.99', day: 18, account: 'checking', transferTo: '', logo: 'verizon' },
	{ label: '🎓 RYNJ Tuition', title: 'RYNJ Tuition', type: 'debit', amount: '355', day: 15, account: 'checking', transferTo: '', logo: '' }
];

/**
 * Validate and normalize unknown input into a list of shortcuts.
 * @param {unknown} raw
 * @returns {Shortcut[] | null} null when input is not an array
 */
export function sanitizeShortcuts(raw) {
	if (!Array.isArray(raw)) return null;
	return raw
		.filter((s) => s && typeof s === 'object')
		.map((s) => {
			const day = Math.round(Number(s.day));
			return {
				label: String(s.label ?? s.title ?? '').trim(),
				title: String(s.title ?? s.label ?? '').trim(),
				type: ['credit', 'debit', 'transfer'].includes(s.type) ? s.type : 'debit',
				amount: s.amount === undefined || s.amount === null ? '' : String(s.amount).trim(),
				day: Number.isFinite(day) ? Math.min(31, Math.max(1, day)) : 1,
				account: s.account === 'savings' ? 'savings' : 'checking',
				transferTo: s.transferTo === 'checking' || s.transferTo === 'savings' ? s.transferTo : '',
				logo: LOGO_KEYS.includes(s.logo) ? s.logo : ''
			};
		})
		.filter((s) => s.label || s.title);
}

/** @returns {Shortcut[]} */
export function loadShortcuts() {
	try {
		const stored = localStorage.getItem(SHORTCUTS_STORAGE_KEY);
		if (stored !== null) {
			const parsed = sanitizeShortcuts(JSON.parse(stored));
			if (parsed) return parsed;
		}
	} catch {
		// fall through to defaults
	}
	return structuredClone(DEFAULT_SHORTCUTS);
}

/** @param {Shortcut[]} shortcuts */
export function saveShortcuts(shortcuts) {
	localStorage.setItem(SHORTCUTS_STORAGE_KEY, JSON.stringify(shortcuts));
}
