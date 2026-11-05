<script>
	import { marked } from 'marked';
	import { doc, setDoc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase.js';
	import { testApiKey, friendlyApiError } from '$lib/ai.js';
	import { darkMode } from '$lib/darkModeStore.js';

	/** @type {import('firebase/auth').User | null} */
	export let currentUser;

	/** Called when a key is saved/cleared so the parent can update. @type {(key: string) => void} */
	export let onKeySaved = (_key) => {};

	let keyInput = '';
	let testing = false;
	let saving = false;
	/** @type {'idle' | 'ok' | 'error'} */
	let testStatus = 'idle';
	let testError = '';

	async function handleTest() {
		if (!keyInput.trim()) return;
		testing = true;
		testStatus = 'idle';
		testError = '';
		try {
			await testApiKey(keyInput.trim());
			testStatus = 'ok';
		} catch (err) {
			testStatus = 'error';
			testError = friendlyApiError(err);
		} finally {
			testing = false;
		}
	}

	async function handleSave() {
		if (!currentUser || !keyInput.trim()) return;
		saving = true;
		try {
			await setDoc(
				doc(db, 'users', currentUser.uid),
				{ geminiApiKey: keyInput.trim() },
				{ merge: true }
			);
			onKeySaved(keyInput.trim());
		} catch (err) {
			console.error('Failed to save API key', err);
			alert('Failed to save API key. Please try again.');
		} finally {
			saving = false;
		}
	}

	async function handleClear() {
		if (!currentUser) return;
		if (!confirm('Remove your saved Gemini API key?')) return;
		try {
			await setDoc(doc(db, 'users', currentUser.uid), { geminiApiKey: '' }, { merge: true });
			keyInput = '';
			onKeySaved('');
		} catch (err) {
			console.error('Failed to clear API key', err);
		}
	}

	export async function loadSavedKey() {
		if (!currentUser) return '';
		try {
			const snap = await getDoc(doc(db, 'users', currentUser.uid));
			const key = snap.data()?.geminiApiKey ?? '';
			if (key) keyInput = key;
			return key;
		} catch {
			return '';
		}
	}
</script>

<div class="ai-settings" class:dark-mode={$darkMode}>
	<div class="setup-header">
		<span class="ai-icon">🤖</span>
		<div>
			<p class="setup-title">Connect Gemini AI</p>
			<p class="setup-sub">
				Bring your own free API key from
				<a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Google AI Studio</a>
				(no credit card required).
			</p>
		</div>
	</div>

	<div class="key-row">
		<input
			class="key-input"
			type="password"
			placeholder="AIza..."
			bind:value={keyInput}
			autocomplete="off"
			spellcheck="false"
		/>
		<button class="btn-test" on:click={handleTest} disabled={testing || !keyInput.trim()}>
			{testing ? 'Testing…' : 'Test'}
		</button>
	</div>

	{#if testStatus === 'ok'}
		<p class="status-ok">✅ Key is valid!</p>
	{:else if testStatus === 'error'}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<div class="status-error">{@html marked.parse(testError || 'Invalid key. Check and try again.', { async: false })}</div>
	{/if}

	{#if !currentUser}
		<p class="no-auth-note">Sign in to save your key across devices.</p>
	{:else}
		<div class="save-row">
			<button class="btn-save" on:click={handleSave} disabled={saving || !keyInput.trim()}>
				{saving ? 'Saving…' : '💾 Save key'}
			</button>
			<button class="btn-clear" on:click={handleClear}>Clear saved key</button>
		</div>
	{/if}
</div>

<style>
	.ai-settings {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1rem;
		background: var(--color-bg-light);
		border-radius: 10px;
		border: 1px solid var(--color-border);
	}

	.setup-header {
		display: flex;
		gap: 0.65rem;
		align-items: flex-start;
	}
	.ai-icon { font-size: 1.6rem; flex-shrink: 0; margin-top: 0.1rem; }

	.setup-title {
		font-weight: 600;
		font-size: 0.95rem;
		color: var(--color-text-primary);
		margin: 0 0 0.2rem;
	}
	.setup-sub {
		font-size: 0.8rem;
		color: var(--color-text-secondary);
		margin: 0;
		line-height: 1.45;
	}
	.setup-sub a {
		color: var(--color-accent-blue);
		text-decoration: none;
	}
	.setup-sub a:hover { text-decoration: underline; }

	.key-row {
		display: flex;
		gap: 0.5rem;
	}
	.key-input {
		flex: 1;
		min-width: 0;
		padding: 0.45rem 0.65rem;
		border: 1px solid var(--color-border);
		border-radius: 6px;
		font-size: 0.85rem;
		font-family: monospace;
		background: var(--color-surface);
		color: var(--color-text-primary);
	}
	.key-input:focus {
		outline: none;
		border-color: var(--color-accent-blue);
		box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-accent-blue) 20%, transparent);
	}

	.btn-test {
		padding: 0.45rem 0.9rem;
		background: var(--color-bg-lighter);
		border: 1px solid var(--color-border);
		border-radius: 6px;
		font-size: 0.83rem;
		font-weight: 500;
		color: var(--color-text-primary);
		cursor: pointer;
		white-space: nowrap;
		transition: background 0.15s;
	}
	.btn-test:hover:not(:disabled) { background: var(--color-border-light); }
	.btn-test:disabled { opacity: 0.6; cursor: default; }

	.status-ok { font-size: 0.82rem; color: var(--color-accent-green); margin: 0; }
	.status-error {
		font-size: 0.82rem;
		color: var(--color-accent-red);
		margin: 0;
		line-height: 1.5;
	}
	.status-error :global(p) { margin: 0 0 0.3em; }
	.status-error :global(p:last-child) { margin-bottom: 0; }
	.status-error :global(a) { color: var(--color-accent-red); }
	.status-error :global(ol), .status-error :global(ul) { margin: 0.2em 0 0.2em 1.2em; padding: 0; }

	.no-auth-note {
		font-size: 0.8rem;
		color: var(--color-text-secondary);
		margin: 0;
		font-style: italic;
	}

	.save-row {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		flex-wrap: wrap;
	}
	.btn-save {
		padding: 0.45rem 1rem;
		background: var(--color-accent-blue);
		color: #fff;
		border: none;
		border-radius: 6px;
		font-size: 0.85rem;
		font-weight: 600;
		cursor: pointer;
		transition: opacity 0.15s;
	}
	.btn-save:hover:not(:disabled) { opacity: 0.85; }
	.btn-save:disabled { opacity: 0.6; cursor: default; }

	.btn-clear {
		background: none;
		border: none;
		font-size: 0.8rem;
		color: var(--color-text-tertiary);
		cursor: pointer;
		text-decoration: underline;
		padding: 0;
	}
	.btn-clear:hover { color: var(--color-accent-red); }
</style>
