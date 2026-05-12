import { writable } from 'svelte/store';
import { safelyGetLocalStorage, safelySetLocalStorage } from './index.js';

function applyDarkModeToDocument(value) {
	if (typeof document !== 'undefined') {
		document.documentElement.classList.toggle('dark-mode', value);
	}
}

function createDarkModeStore() {
	// Initialize from localStorage or system preference.
	// safelyGetLocalStorage returns undefined during SSR, so use == null to
	// guard against both null and undefined.
	const initialDarkMode = (() => {
		const stored = safelyGetLocalStorage('darkMode');
		if (stored != null) {
			return stored === 'true';
		}
		return typeof window !== 'undefined' && (window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false);
	})();

	const { subscribe, set, update } = writable(initialDarkMode);

	applyDarkModeToDocument(initialDarkMode);

	return {
		subscribe,
		toggle: () => {
			update(current => {
				const next = !current;
				safelySetLocalStorage('darkMode', String(next));
				applyDarkModeToDocument(next);
				return next;
			});
		},
		set: (value) => {
			set(value);
			safelySetLocalStorage('darkMode', String(value));
			applyDarkModeToDocument(value);
		}
	};
}

export const darkMode = createDarkModeStore();
