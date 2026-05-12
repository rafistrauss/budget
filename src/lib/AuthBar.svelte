<script>
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '$lib/firebase.js';

	/** @type {import('firebase/auth').User | null} */
	export let currentUser;

	let email = '';
	let password = '';

	function signIn() {
		if (!email || !password) return alert('Email and password are required');
		signInWithEmailAndPassword(auth, email, password).catch((err) => {
			console.error(err);
			alert('Failed to sign in');
		});
	}

	function logOut() {
		auth.signOut().catch((err) => console.error('Error signing out:', err));
	}
</script>

{#if !currentUser}
	<div class="auth-bar">
		<form class="auth-form" on:submit|preventDefault={signIn}>
			<input type="email" bind:value={email} placeholder="Email" required autocomplete="email" />
			<input
				type="password"
				bind:value={password}
				placeholder="Password"
				required
				autocomplete="current-password"
			/>
			<button type="submit" class="btn-secondary">Sign in to sync</button>
		</form>
	</div>
{:else}
	<div class="auth-bar auth-bar--signed-in">
		<span class="auth-email">{currentUser.email}</span>
		<button class="btn-secondary" on:click={logOut}>Sign out</button>
	</div>
{/if}

<style>
	/* ── Auth bar ── */
	.auth-bar {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 100;
		padding: 0.4rem 0.75rem;
		background: var(--color-surface);
		border-bottom-left-radius: 6px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		transition: background 0.2s;
	}

	:global(.dark-mode) .auth-bar {
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	}

	.auth-form {
		display: flex;
		gap: 0.4rem;
		align-items: center;
	}

	.auth-form input {
		padding: 0.3rem 0.5rem;
		border: 1px solid var(--color-border);
		border-radius: 4px;
		font-size: 0.85rem;
		width: 140px;
		background: var(--color-surface);
		color: var(--color-text-primary);
		transition: background 0.2s, color 0.2s, border-color 0.2s;
	}

	.auth-form input:focus {
		outline: none;
		border-color: var(--color-accent-blue);
		box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-accent-blue) 25%, transparent);
	}

	.auth-bar--signed-in {
		gap: 0.75rem;
	}

	.auth-email {
		font-size: 0.8rem;
		color: var(--color-text-secondary);
		transition: color 0.2s;
	}

	.btn-secondary {
		padding: 0.45rem 0.85rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		background: var(--color-surface);
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--color-text-primary);
		cursor: pointer;
		transition: background 0.15s, border-color 0.15s, color 0.15s;
		white-space: nowrap;
	}

	.btn-secondary:hover {
		background: var(--color-bg);
		border-color: var(--color-text-tertiary);
	}

	@media (max-width: 767px) {
		.auth-bar {
			position: static;
			border-bottom-left-radius: 0;
			flex-wrap: wrap;
			width: stretch;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
			padding: 0.75rem;
			justify-content: space-between;
			z-index: 10;
		}

		.auth-form {
			flex-direction: column;
			width: 100%;
			gap: 0.5rem;
		}

		.auth-form input {
			width: 100%;
			padding: 0.5rem;
			font-size: 1rem;
		}
	}
</style>
