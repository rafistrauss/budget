<script>
	import { marked } from 'marked';
	import { darkMode } from './darkModeStore.js';

	/**
	 * @typedef {import('./ai.js').AIBlock} AIBlock
	 */

	/** @type {AIBlock[]} */
	export let blocks = [];

	/** @type {(command: Record<string, unknown>) => void} */
	export let onAction = () => {};

	/** @type {Set<number>} */
	let dismissed = new Set();

	/** @param {number} i */
	function dismiss(i) {
		dismissed = new Set([...dismissed, i]);
	}

	/** @param {string} md */
	function renderMd(md) {
		return marked.parse(md ?? '', { async: false });
	}

	const calloutConfig = {
		info:    { icon: 'ℹ️', className: 'callout-info' },
		warning: { icon: '⚠️', className: 'callout-warning' },
		success: { icon: '✅', className: 'callout-success' },
		tip:     { icon: '💡', className: 'callout-tip' }
	};
</script>

<div class="message-renderer" class:dark-mode={$darkMode}>
	{#each blocks as block, i}
		{#if !dismissed.has(i)}
			{#if block.type === 'text'}
				<div class="block-text prose">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html renderMd(block.content)}
				</div>

			{:else if block.type === 'callout'}
				{@const cfg = calloutConfig[block.variant] ?? calloutConfig.info}
				<div class="callout {cfg.className}">
					<span class="callout-icon">{cfg.icon}</span>
					<div class="callout-body prose">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html renderMd(block.content)}
					</div>
				</div>

			{:else if block.type === 'card'}
				<div class="card">
					<div class="card-header">
						<span class="card-title">{block.title}</span>
						{#if block.dismissible !== false}
							<button class="dismiss-btn" on:click={() => dismiss(i)} aria-label="Dismiss">✕</button>
						{/if}
					</div>
					<div class="card-body prose">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html renderMd(block.content)}
					</div>
				</div>

			{:else if block.type === 'table'}
				<div class="table-wrapper">
					<table>
						<thead>
							<tr>{#each block.headers as h}<th>{h}</th>{/each}</tr>
						</thead>
						<tbody>
							{#each block.rows as row}
								<tr>{#each row as cell}<td>{cell}</td>{/each}</tr>
							{/each}
						</tbody>
					</table>
				</div>

			{:else if block.type === 'action'}
				<div class="action-card">
					<div class="action-info">
						<span class="action-label">{block.label}</span>
						<span class="action-desc">{block.description}</span>
					</div>
					<button class="apply-btn" on:click={() => onAction(block.command)}>Apply</button>
				</div>
			{/if}
		{/if}
	{/each}
</div>

<style>
	.message-renderer {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		width: 100%;
	}

	/* ── Prose (shared markdown styles) ── */
	.prose :global(p) { margin: 0 0 0.4em; }
	.prose :global(p:last-child) { margin-bottom: 0; }
	.prose :global(ul), .prose :global(ol) { margin: 0.3em 0 0.3em 1.2em; padding: 0; }
	.prose :global(li) { margin-bottom: 0.2em; }
	.prose :global(strong) { font-weight: 600; }
	.prose :global(code) {
		font-family: 'SFMono-Regular', Consolas, monospace;
		font-size: 0.85em;
		background: rgba(0,0,0,0.07);
		padding: 0.1em 0.35em;
		border-radius: 3px;
	}
	.dark-mode .prose :global(code) { background: rgba(255,255,255,0.1); }
	.prose :global(table) { width: 100%; border-collapse: collapse; margin: 0.4em 0; }
	.prose :global(th), .prose :global(td) {
		padding: 0.3em 0.5em;
		border: 1px solid var(--color-border);
		font-size: 0.85em;
	}
	.prose :global(th) { background: var(--color-bg-lighter); font-weight: 600; }

	/* ── Text block ── */
	.block-text {
		font-size: 0.88rem;
		line-height: 1.55;
		color: var(--color-text-primary);
	}

	/* ── Callout ── */
	.callout {
		display: flex;
		gap: 0.55rem;
		padding: 0.65rem 0.85rem;
		border-radius: 8px;
		border-left: 3px solid;
		font-size: 0.85rem;
		line-height: 1.5;
	}
	.callout-icon { font-size: 1rem; flex-shrink: 0; margin-top: 0.05rem; }
	.callout-body { flex: 1; }

	.callout-info    { background: #eef4ff; border-color: var(--color-accent-blue); color: #1a3a6b; }
	.callout-warning { background: #fff8e1; border-color: #f59e0b; color: #7c4a0a; }
	.callout-success { background: #e8f5e9; border-color: var(--color-accent-green); color: #1b5e20; }
	.callout-tip     { background: #f3e8ff; border-color: var(--color-accent-purple); color: #4a1d7a; }

	.dark-mode .callout-info    { background: #1f3a5f; border-color: var(--color-accent-blue); color: #a8ccf7; }
	.dark-mode .callout-warning { background: #3d2a00; border-color: #f59e0b; color: #fcd680; }
	.dark-mode .callout-success { background: #0d2e1a; border-color: var(--color-accent-green); color: #6ee095; }
	.dark-mode .callout-tip     { background: #2a1a40; border-color: var(--color-accent-purple); color: #d291ff; }

	/* ── Card ── */
	.card {
		border: 1px solid var(--color-border);
		border-radius: 8px;
		background: var(--color-surface);
		overflow: hidden;
	}
	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 0.75rem;
		background: var(--color-bg-lighter);
		border-bottom: 1px solid var(--color-border-light);
	}
	.card-title { font-size: 0.85rem; font-weight: 600; color: var(--color-text-primary); }
	.dismiss-btn {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 0.75rem;
		color: var(--color-text-tertiary);
		padding: 0 0.2rem;
		line-height: 1;
	}
	.dismiss-btn:hover { color: var(--color-text-secondary); }
	.card-body {
		padding: 0.55rem 0.75rem;
		font-size: 0.85rem;
		color: var(--color-text-primary);
		line-height: 1.5;
	}

	/* ── Table ── */
	.table-wrapper { overflow-x: auto; border-radius: 8px; }
	table { width: 100%; border-collapse: collapse; font-size: 0.83rem; }
	th, td {
		padding: 0.4em 0.65em;
		border: 1px solid var(--color-border);
		text-align: left;
		color: var(--color-text-primary);
	}
	th {
		background: var(--color-bg-lighter);
		font-weight: 600;
		font-size: 0.8rem;
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}
	tr:nth-child(even) td { background: var(--color-bg-light); }

	/* ── Action card ── */
	.action-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.6rem 0.85rem;
		border: 1px solid var(--color-accent-blue-border);
		border-radius: 8px;
		background: var(--color-accent-blue-light);
	}
	.action-info { display: flex; flex-direction: column; gap: 0.2rem; flex: 1; min-width: 0; }
	.action-label { font-size: 0.85rem; font-weight: 600; color: var(--color-text-primary); }
	.action-desc  { font-size: 0.78rem; color: var(--color-text-secondary); }
	.apply-btn {
		padding: 0.4rem 0.85rem;
		background: var(--color-accent-blue);
		color: #fff;
		border: none;
		border-radius: 6px;
		font-size: 0.82rem;
		font-weight: 600;
		cursor: pointer;
		white-space: nowrap;
		transition: opacity 0.15s;
	}
	.apply-btn:hover { opacity: 0.85; }
</style>
