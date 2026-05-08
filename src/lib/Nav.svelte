<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	/** @param {string} path */
	function isActive(path) {
		// Normalise trailing slashes
		const current = ($page.url.pathname).replace(/\/$/, '') || '/';
		const target = (base + path).replace(/\/$/, '') || '/';
		return current === target;
	}
</script>

<aside class="sidebar">
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
</aside>
<!-- Spacer keeps flex siblings correctly offset while sidebar is fixed -->
<div class="sidebar-spacer" aria-hidden="true"></div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.sidebar {
		width: 200px;
		flex-shrink: 0;
		background: #1e2130;
		color: #c8cdd8;
		display: flex;
		flex-direction: column;
		padding: 1.25rem 0;
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		overflow-y: auto;
		z-index: 100;
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
		border-bottom: 1px solid #2e3348;
	}

	.logo { font-size: 1.3rem; }

	.sidebar-nav {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		padding: 1rem 0.75rem 0;
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		padding: 0.6rem 0.75rem;
		border-radius: 8px;
		color: #9ba3b5;
		text-decoration: none;
		font-size: 0.9rem;
		transition: background 0.15s, color 0.15s;
	}

	.nav-item:hover { background: #2b2f42; color: #fff; }
	.nav-item.active { background: #2e3a5c; color: #fff; font-weight: 600; }
	.nav-icon { font-size: 1rem; }

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
			border-right: 1px solid #2e3348;
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
