import { writable } from 'svelte/store';
import { safelyGetLocalStorage, safelySetLocalStorage } from './index.js';

function createDarkModeStore() {
	// Initialize from localStorage or system preference
	const initialDarkMode = (() => {
		const stored = safelyGetLocalStorage('darkMode');
		if (stored !== null) {
			return stored === 'true';
		}
		return typeof window !== 'undefined' && (window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false);
	})();

	const { subscribe, set } = writable(initialDarkMode);

	return {
		subscribe,
		toggle: () => {
			let currentValue;
			subscribe(value => {
				currentValue = value;
			})();

			const newValue = !currentValue;
			set(newValue);
			safelySetLocalStorage('darkMode', String(newValue));
		},
		set: (value) => {
			set(value);
			safelySetLocalStorage('darkMode', String(value));
		}
	};
}

export const darkMode = createDarkModeStore();
