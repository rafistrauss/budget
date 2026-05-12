<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { darkMode } from './darkModeStore.js';

	/** @param {string} path */
	function isActive(path) {
		// Normalise trailing slashes
		const current = ($page.url.pathname).replace(/\/$/, '') || '/';
		const target = (base + path).replace(/\/$/, '') || '/';
		return current === target;
	}
</script>

<aside class="sidebar" class:dark-mode={$darkMode}>
	<div class="sidebar-header">
		<span class="logo">💰</span>
		<span class="logo-text">Budget</span>
	</div>
	<nav class="sidebar-nav">
		<a class="nav-item" class:active={isActive('/')} href="{base}/">
			<span class="nav-icon">📊</span> Planner
		</a>
		<a class="nav-item" class:active={isActive('/take-home-pay')} href="{base}/take-home-pay">
			<span class="nav-icon">🧮</span> Take-Home Pay
		</a>
		<a class="nav-item" class:active={isActive('/checking')} href="{base}/checking">
			<span class="nav-icon">🏦</span> Checking
		</a>
	</nav>
	<button type="button" class="dark-mode-toggle" on:click={() => darkMode.toggle()} title="Toggle dark mode" aria-label="Toggle dark mode" aria-pressed={$darkMode}>
		{#if $darkMode}
			☀️
		{:else}
			🌙
		{/if}
	</button>
</aside>
<!-- Spacer keeps flex siblings correctly offset while sidebar is fixed -->
<div class="sidebar-spacer" aria-hidden="true"></div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(:root) {
		--color-bg: #f4f6fa;
		--color-surface: #fff;
		--color-text-primary: #1a1d23;
		--color-text-secondary: #7a8099;
		--color-text-tertiary: #9ba3b5;
		--color-text-muted: #888;
		--color-text-light: #444;
		--color-border: #d0d5e0;
		--color-border-light: #e5e8f0;
		--color-bg-light: #f9fafb;
		--color-bg-lighter: #eef0f6;
		--color-accent-blue: #4f86c6;
		--color-accent-orange: #e07b54;
		--color-accent-green: #2e8b57;
		--color-accent-red: #c0392b;
		--color-accent-purple: #8b6bbf;
		--color-accent-cyan: #4db8b0;
		--color-accent-blue-light: #eef4ff;
		--color-accent-blue-border: #c3d8f7;
		--color-auth-border: #ccc;
		--color-sidebar-bg: #1e2130;
		--color-sidebar-text: #c8cdd8;
		--color-sidebar-border: #2e3348;
		--color-sidebar-hover: #2b2f42;
		--color-sidebar-active: #2e3a5c;
	}

	:global(html.dark-mode),
	:global(.dark-mode) {
		--color-bg: #0f1117;
		--color-surface: #161b22;
		--color-text-primary: #e6edf3;
		--color-text-secondary: #8b949e;
		--color-text-tertiary: #6e7681;
		--color-text-muted: #6e7681;
		--color-text-light: #c9d1d9;
		--color-border: #30363d;
		--color-border-light: #21262d;
		--color-bg-light: #0d1117;
		--color-bg-lighter: #1c2128;
		--color-accent-blue: #58a6ff;
		--color-accent-orange: #fb8500;
		--color-accent-green: #3fb950;
		--color-accent-red: #f85149;
		--color-accent-purple: #d291ff;
		--color-accent-cyan: #39c5cf;
		--color-accent-blue-light: #1f3a5f;
		--color-accent-blue-border: #2d5fa8;
		--color-auth-border: #444;
		--color-sidebar-bg: #0d1117;
		--color-sidebar-text: #c9d1d9;
		--color-sidebar-border: #21262d;
		--color-sidebar-hover: #1c2128;
		--color-sidebar-active: #1f6feb;
	}

	.sidebar {
		width: 200px;
		flex-shrink: 0;
		background: var(--color-sidebar-bg);
		color: var(--color-sidebar-text);
		display: flex;
		flex-direction: column;
		padding: 1.25rem 0;
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		overflow-y: auto;
		z-index: 100;
		transition: background 0.2s, color 0.2s;
	}

	.sidebar-spacer {
		width: 200px;
		flex-shrink: 0;
	}

	.sidebar-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0 1.25rem 1.5rem;
		font-weight: 700;
		font-size: 1.1rem;
		color: #fff;
		border-bottom: 1px solid var(--color-sidebar-border);
		transition: border-color 0.2s;
	}

	.logo { font-size: 1.3rem; }

	.sidebar-nav {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		padding: 1rem 0.75rem 0;
		flex: 1;
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		padding: 0.6rem 0.75rem;
		border-radius: 8px;
		color: var(--color-text-tertiary);
		text-decoration: none;
		font-size: 0.9rem;
		transition: background 0.15s, color 0.15s;
	}

	.nav-item:hover { 
		background: var(--color-sidebar-hover);
		color: #fff;
		transition: background 0.15s, color 0.15s;
	}
	
	.nav-item.active { 
		background: var(--color-sidebar-active);
		color: #fff;
		font-weight: 600;
		transition: background 0.15s, color 0.15s;
	}
	
	.nav-icon { font-size: 1rem; }

	.dark-mode-toggle {
		align-self: center;
		margin-top: auto;
		margin-bottom: 1.25rem;
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid var(--color-sidebar-border);
		border-radius: 8px;
		background: var(--color-sidebar-hover);
		color: var(--color-sidebar-text);
		font-size: 1.2rem;
		cursor: pointer;
		transition: background 0.15s, border-color 0.15s;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}

	.dark-mode-toggle:hover {
		background: #3d444d;
		border-color: #444c56;
	}

	:global(.dark-mode) .dark-mode-toggle:hover {
		background: #262c36;
		border-color: #30363d;
	}

	@media (max-width: 900px) {
		:global(.app) { flex-direction: column; }
		.sidebar {
			position: sticky;
			top: 0;
			width: 100%;
			height: auto;
			flex-direction: row;
			align-items: center;
			padding: 0;
			overflow-y: visible;
			z-index: 100;
		}
		.sidebar-spacer { display: none; }
		.sidebar-header {
			border-bottom: none;
			border-right: 1px solid var(--color-sidebar-border);
			padding: 0.6rem 1rem;
			flex-shrink: 0;
		}
		.sidebar-nav {
			flex-direction: row;
			padding: 0.4rem 0.5rem;
			gap: 0.25rem;
			flex-wrap: wrap;
		}
		.nav-item { padding: 0.4rem 0.65rem; }
		.dark-mode-toggle {
			margin: 0;
			margin-left: auto;
			margin-right: 0.5rem;
			width: 2rem;
			height: 2rem;
			font-size: 1rem;
		}
	}

	@media (max-width: 767px) {
		.sidebar {
			position: sticky;
			padding: 0.5rem;
		}
		.sidebar-header {
			border-right: 1px solid #2e3348;
			padding: 0.5rem 0.75rem;
			font-size: 1rem;
			gap: 0.4rem;
			margin-right: 0.5rem;
			flex-shrink: 0;
		}
		.logo { font-size: 1.1rem; }
		.logo-text {
			display: none;
		}
		.sidebar-nav {
			flex: 1;
			padding: 0.3rem 0.3rem;
			gap: 0.2rem;
		}
		.nav-item {
			padding: 0.4rem 0.5rem;
			font-size: 0.85rem;
			min-height: 44px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.nav-icon { font-size: 1.1rem; }
	}

	@media (max-width: 480px) {
		.sidebar-header {
			display: none;
		}
		.sidebar-nav {
			width: 100%;
			padding: 0.4rem;
		}
		.nav-item {
			flex: 1;
			justify-content: center;
			font-size: 0.75rem;
			padding: 0.35rem 0.3rem;
			border-radius: 6px;
		}
	}
</style>
