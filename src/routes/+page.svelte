<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	import { formatAsCurrency, safelyGetLocalStorage, safelySetLocalStorage } from '$lib';

	const STORAGE_KEY = 'monthly-budget-v2';
	const CATEGORY_COLORS = [
		'#4f86c6', '#e07b54', '#5bb56a', '#c95f8a', '#8b6bbf',
		'#d4a843', '#4db8b0', '#e05454', '#7a9e4f', '#6b8fbf'
	];

	const monthNames = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];

	const now = new Date();

	/**
	 * @typedef {{ effectiveYear: number; effectiveMonth: number; amount: number }} BudgetChange
	 */

	/**
	 * @typedef {{ id: string; name: string; baseAmount: number; changes: BudgetChange[] }} BudgetCategory
	 */

	/** @type {BudgetCategory[]} */
	let categories = [
		{ id: 'housing', name: 'Housing', baseAmount: 2500, changes: [] },
		{ id: 'education', name: 'Education', baseAmount: 1000, changes: [] },
		{ id: 'groceries', name: 'Groceries', baseAmount: 700, changes: [] },
		{ id: 'transport', name: 'Transport', baseAmount: 400, changes: [] }
	];

	let selectedYear = now.getFullYear();
	let selectedMonth = now.getMonth();
	let monthlyIncome = 0;

	let hasLoadedFromStorage = false;

	let newCategoryName = '';
	let newCategoryAmount = 0;

	// Inline-add state
	let addingCategory = false;

	// Scheduled change panel state
	/** @type {string} */
	let expandedChangeCategoryId = '';
	let changeEffectiveYear = selectedYear;
	let changeEffectiveMonth = selectedMonth;
	let changeAmount = 0;

	/** @type {{ category: BudgetCategory; activeAmount: number; color: string }[]} */
	let monthlyRows = [];
	let totalMonthlyBudget = 0;
	let monthlySavings = 0;
	let annualSavings = 0;

	onMount(() => {
		const storedBudget = safelyGetLocalStorage(STORAGE_KEY);
		if (storedBudget) {
			try {
				const parsed = JSON.parse(storedBudget);
				if (Array.isArray(parsed?.categories)) {
					categories = normalizeCategories(parsed.categories);
				}
				if (typeof parsed?.monthlyIncome === 'number') {
					monthlyIncome = parsed.monthlyIncome;
				}
			} catch (error) {
				console.error('Could not parse saved budget', error);
			}
		}

		if (!categories.find((c) => c.id === expandedChangeCategoryId)) {
			expandedChangeCategoryId = '';
		}

		hasLoadedFromStorage = true;
	});

	$: if (hasLoadedFromStorage) {
		safelySetLocalStorage(STORAGE_KEY, JSON.stringify({ categories, monthlyIncome }));
	}

	$: monthlyRows = categories.map((category, i) => ({
		category,
		activeAmount: getAmountForMonth(category, selectedYear, selectedMonth),
		color: CATEGORY_COLORS[i % CATEGORY_COLORS.length]
	}));

	$: totalMonthlyBudget = monthlyRows.reduce((acc, row) => acc + row.activeAmount, 0);
	$: monthlySavings = monthlyIncome - totalMonthlyBudget;

	// Annual savings: sum savings for each month of selectedYear
	$: annualSavings = Array.from({ length: 12 }, (_, m) => {
		const spent = categories.reduce(
			(acc, cat) => acc + getAmountForMonth(cat, selectedYear, m),
			0
		);
		return monthlyIncome - spent;
	}).reduce((a, b) => a + b, 0);

	/** @param {number} val */
	function savingsClass(val) {
		return val >= 0 ? 'positive' : 'negative';
	}

	function addCategory() {
		const name = newCategoryName.trim();
		if (!name) return;

		const id = makeCategoryId(name);
		categories = [
			...categories,
			{ id, name, baseAmount: Number(newCategoryAmount) || 0, changes: [] }
		];

		newCategoryName = '';
		newCategoryAmount = 0;
		addingCategory = false;
	}

	/** @param {string} categoryId */
	function removeCategory(categoryId) {
		categories = categories.filter((c) => c.id !== categoryId);
		if (expandedChangeCategoryId === categoryId) expandedChangeCategoryId = '';
	}

	/** @param {string} id */
	function toggleChangePanel(id) {
		if (expandedChangeCategoryId === id) {
			expandedChangeCategoryId = '';
		} else {
			expandedChangeCategoryId = id;
			changeEffectiveYear = selectedYear;
			changeEffectiveMonth = selectedMonth;
			changeAmount = getAmountForMonth(
				categories.find((c) => c.id === id) ?? categories[0],
				selectedYear,
				selectedMonth
			);
		}
	}

	function addScheduledChange() {
		if (!expandedChangeCategoryId) return;

		categories = categories.map((category) => {
			if (category.id !== expandedChangeCategoryId) return category;

			const nextChanges = [
				...category.changes,
				{
					effectiveYear: Number(changeEffectiveYear),
					effectiveMonth: Number(changeEffectiveMonth),
					amount: Number(changeAmount) || 0
				}
			].sort((a, b) =>
				compareYearMonth(a.effectiveYear, a.effectiveMonth, b.effectiveYear, b.effectiveMonth)
			);

			return { ...category, changes: nextChanges };
		});
	}

	/**
	 * @param {string} categoryId
	 * @param {number} index
	 */
	function removeScheduledChange(categoryId, index) {
		categories = categories.map((category) => {
			if (category.id !== categoryId) return category;
			return {
				...category,
				changes: category.changes.filter((_, i) => i !== index)
			};
		});
	}

	/**
	 * @param {BudgetCategory} category
	 * @param {number} year
	 * @param {number} month
	 */
	function getAmountForMonth(category, year, month) {
		let amount = Number(category.baseAmount) || 0;
		for (const change of category.changes) {
			if (compareYearMonth(change.effectiveYear, change.effectiveMonth, year, month) <= 0) {
				amount = Number(change.amount) || 0;
			}
		}
		return amount;
	}

	/**
	 * @param {number} yearA @param {number} monthA
	 * @param {number} yearB @param {number} monthB
	 */
	function compareYearMonth(yearA, monthA, yearB, monthB) {
		return yearA !== yearB ? yearA - yearB : monthA - monthB;
	}

	/** @param {string} name */
	function makeCategoryId(name) {
		const slug = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
		const baseId = slug || 'category';
		let nextId = baseId;
		let suffix = 2;
		while (categories.some((c) => c.id === nextId)) {
			nextId = `${baseId}-${suffix}`;
			suffix += 1;
		}
		return nextId;
	}

	/**
	 * @param {unknown[]} unknownCategories
	 * @returns {BudgetCategory[]}
	 */
	function normalizeCategories(unknownCategories) {
		return unknownCategories
			.map((rawCategory, index) => {
				if (!rawCategory || typeof rawCategory !== 'object') return null;
				const candidate = /** @type {{ id?: unknown; name?: unknown; baseAmount?: unknown; changes?: unknown[] }} */ (rawCategory);
				const name =
					typeof candidate.name === 'string' && candidate.name.trim()
						? candidate.name
						: `Category ${index + 1}`;
				const id =
					typeof candidate.id === 'string' && candidate.id.trim() ? candidate.id : makeCategoryId(name);
				const changes = Array.isArray(candidate.changes)
					? candidate.changes
							.map((change) => {
								if (!change || typeof change !== 'object') return null;
								const p = /** @type {{ effectiveYear?: unknown; effectiveMonth?: unknown; amount?: unknown }} */ (change);
								return {
									effectiveYear: Number(p.effectiveYear) || now.getFullYear(),
									effectiveMonth: Number(p.effectiveMonth) || 0,
									amount: Number(p.amount) || 0
								};
							})
							.filter(Boolean)
							.sort((a, b) => compareYearMonth(a.effectiveYear, a.effectiveMonth, b.effectiveYear, b.effectiveMonth))
					: [];
				return { id, name, baseAmount: Number(candidate.baseAmount) || 0, changes };
			})
			.filter(Boolean);
	}
</script>

<div class="app">
	<!-- ── Sidebar ── -->
	<aside class="sidebar">
		<div class="sidebar-header">
			<span class="logo">💰</span>
			<span class="logo-text">Budget</span>
		</div>
		<nav class="sidebar-nav">
			<a class="nav-item active" href="{base}/">
				<span class="nav-icon">📊</span> Planner
			</a>
			<a class="nav-item" href="{base}/take-home-pay">
				<span class="nav-icon">🧮</span> Take-Home Pay
			</a>
			<a class="nav-item" href="{base}/checking">
				<span class="nav-icon">🏦</span> Checking
			</a>
			<a class="nav-item" href="{base}/savings">
				<span class="nav-icon">🐷</span> Savings
			</a>
		</nav>
	</aside>

	<!-- ── Main ── -->
	<main class="main">

		<!-- Period bar -->
		<header class="period-bar">
			<div class="period-nav">
				<button class="icon-btn" aria-label="Previous month" on:click={() => {
					if (selectedMonth === 0) { selectedMonth = 11; selectedYear -= 1; }
					else { selectedMonth -= 1; }
				}}>‹</button>
				<div class="period-selects">
					<select bind:value={selectedMonth} aria-label="Month">
						{#each monthNames as name, i}
							<option value={i}>{name}</option>
						{/each}
					</select>
					<input type="number" bind:value={selectedYear} min="2000" max="2100" aria-label="Year" class="year-input" />
				</div>
				<button class="icon-btn" aria-label="Next month" on:click={() => {
					if (selectedMonth === 11) { selectedMonth = 0; selectedYear += 1; }
					else { selectedMonth += 1; }
				}}>›</button>
			</div>
		</header>

		<!-- Summary cards -->
		<section class="summary-row">
			<div class="summary-card income-card">
				<div class="summary-label">Monthly Income</div>
				<input
					class="income-input"
					type="number"
					bind:value={monthlyIncome}
					placeholder="0"
					aria-label="Monthly income"
				/>
				<div class="summary-sub">
					<a href="{base}/take-home-pay" class="calc-link">Calculate →</a>
				</div>
			</div>

			<div class="summary-card spending-card">
				<div class="summary-label">Total Spending</div>
				<div class="summary-amount">{formatAsCurrency(totalMonthlyBudget)}</div>
				<div class="summary-sub">{formatAsCurrency(totalMonthlyBudget / 12 * 12)} / year</div>
			</div>

			<div class="summary-card savings-card {savingsClass(monthlySavings)}">
				<div class="summary-label">Monthly Savings</div>
				<div class="summary-amount">{formatAsCurrency(monthlySavings)}</div>
				<div class="summary-sub">
					{#if monthlyIncome > 0}
						{Math.round((monthlySavings / monthlyIncome) * 100)}% of income
					{:else}
						Set income above
					{/if}
				</div>
			</div>

			<div class="summary-card annual-card {savingsClass(annualSavings)}">
				<div class="summary-label">Annual Savings ({selectedYear})</div>
				<div class="summary-amount">{formatAsCurrency(annualSavings)}</div>
				<div class="summary-sub">
					{#if monthlyIncome > 0}
						Across all 12 months
					{:else}
						Set income above
					{/if}
				</div>
			</div>
		</section>

		<!-- Spending bar -->
		{#if monthlyIncome > 0 && totalMonthlyBudget > 0}
			<section class="spend-bar-section">
				<div class="spend-bar">
					{#each monthlyRows as row}
						<div
							class="spend-segment"
							style="width: {Math.min((row.activeAmount / Math.max(monthlyIncome, totalMonthlyBudget)) * 100, 100)}%; background: {row.color};"
							title="{row.category.name}: {formatAsCurrency(row.activeAmount)}"
						></div>
					{/each}
					{#if monthlySavings > 0}
						<div
							class="spend-segment savings-segment"
							style="width: {Math.min((monthlySavings / monthlyIncome) * 100, 100)}%;"
							title="Savings: {formatAsCurrency(monthlySavings)}"
						></div>
					{/if}
				</div>
				<div class="spend-bar-legend">
					{#each monthlyRows as row}
						<span class="legend-item">
							<span class="legend-dot" style="background:{row.color};"></span>
							{row.category.name}
						</span>
					{/each}
					{#if monthlySavings > 0}
						<span class="legend-item">
							<span class="legend-dot savings-dot"></span>
							Savings
						</span>
					{/if}
				</div>
			</section>
		{/if}

		<!-- Categories table -->
		<section class="categories-section">
			<div class="section-header">
				<h2>Spending Categories</h2>
				<button class="btn-add" on:click={() => (addingCategory = !addingCategory)}>
					{addingCategory ? '✕ Cancel' : '+ Add Category'}
				</button>
			</div>

			{#if addingCategory}
				<div class="add-category-row">
					<input
						type="text"
						bind:value={newCategoryName}
						placeholder="Category name"
						class="input"
						on:keydown={(e) => e.key === 'Enter' && addCategory()}
					/>
					<input
						type="number"
						bind:value={newCategoryAmount}
						placeholder="Monthly amount"
						class="input"
						on:keydown={(e) => e.key === 'Enter' && addCategory()}
					/>
					<button class="btn-primary" on:click={addCategory}>Add</button>
				</div>
			{/if}

			<div class="category-list">
				{#each monthlyRows as row (row.category.id)}
					{@const isExpanded = expandedChangeCategoryId === row.category.id}
					{@const pct = monthlyIncome > 0 ? Math.round((row.activeAmount / monthlyIncome) * 100) : null}

					<div class="category-item" class:expanded={isExpanded}>
						<div class="category-row">
							<div class="category-color-bar" style="background:{row.color};"></div>
							<div class="category-name">{row.category.name}</div>
							<div class="category-meta">
								{#if pct !== null}
									<span class="pct-badge">{pct}%</span>
								{/if}
							</div>
							<div class="category-amount-cell">
								<input
									class="amount-input"
									type="number"
									bind:value={row.category.baseAmount}
									on:change={() => (categories = [...categories])}
									aria-label="Base amount for {row.category.name}"
								/>
							</div>
							{#if row.activeAmount !== row.category.baseAmount}
								<div class="category-override">
									→ {formatAsCurrency(row.activeAmount)} this month
								</div>
							{:else}
								<div class="category-override placeholder"></div>
							{/if}
							<div class="category-actions">
								<button
									class="btn-icon"
									class:active={isExpanded}
									title="{isExpanded ? 'Hide' : 'Schedule'} changes"
									on:click={() => toggleChangePanel(row.category.id)}
								>
									{row.category.changes.length > 0 ? `⏱ ${row.category.changes.length}` : '⏱'}
								</button>
								<button
									class="btn-icon danger"
									title="Remove category"
									on:click={() => removeCategory(row.category.id)}
								>✕</button>
							</div>
						</div>

						{#if isExpanded}
							<div class="changes-panel">
								<div class="changes-header">Scheduled changes for {row.category.name}</div>

								{#if row.category.changes.length > 0}
									<table class="changes-table">
										<thead>
											<tr>
												<th>From</th>
												<th>Amount</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											{#each row.category.changes as change, index}
												<tr>
													<td>{monthNames[change.effectiveMonth]} {change.effectiveYear}</td>
													<td>{formatAsCurrency(change.amount)}</td>
													<td>
														<button class="btn-icon danger small" on:click={() => removeScheduledChange(row.category.id, index)}>✕</button>
													</td>
												</tr>
											{/each}
										</tbody>
									</table>
								{/if}

								<div class="change-form">
									<label class="field">
										<span>From</span>
										<div class="field-row">
											<select bind:value={changeEffectiveMonth}>
												{#each monthNames as name, i}
													<option value={i}>{name}</option>
												{/each}
											</select>
											<input type="number" bind:value={changeEffectiveYear} min="2000" max="2100" class="year-input" />
										</div>
									</label>
									<label class="field">
										<span>New amount ($)</span>
										<input type="number" bind:value={changeAmount} placeholder="Amount" />
									</label>
									<button class="btn-primary" on:click={addScheduledChange}>Add change</button>
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- Annual overview table -->
		<section class="annual-section">
			<h2>Annual Overview — {selectedYear}</h2>
			<div class="annual-table-wrap">
				<table class="annual-table">
					<thead>
						<tr>
							<th>Month</th>
							{#each categories as cat}
								<th>{cat.name}</th>
							{/each}
							<th>Total Spending</th>
							{#if monthlyIncome > 0}
								<th>Savings</th>
							{/if}
						</tr>
					</thead>
					<tbody>
						{#each monthNames as name, m}
							{@const spent = categories.reduce((acc, cat) => acc + getAmountForMonth(cat, selectedYear, m), 0)}
							{@const savings = monthlyIncome - spent}
							<tr class:current-month={m === selectedMonth && selectedYear === now.getFullYear()}>
								<td class="month-cell">{name}</td>
								{#each categories as cat}
									<td>{formatAsCurrency(getAmountForMonth(cat, selectedYear, m))}</td>
								{/each}
								<td class="total-cell">{formatAsCurrency(spent)}</td>
								{#if monthlyIncome > 0}
									<td class="savings-cell {savingsClass(savings)}">{formatAsCurrency(savings)}</td>
								{/if}
							</tr>
						{/each}
					</tbody>
					<tfoot>
						<tr>
							<td><strong>Year Total</strong></td>
							{#each categories as cat}
								<td>
									{formatAsCurrency(
										Array.from({ length: 12 }, (_, m) => getAmountForMonth(cat, selectedYear, m)).reduce((a, b) => a + b, 0)
									)}
								</td>
							{/each}
							<td class="total-cell">
								<strong>{formatAsCurrency(Array.from({ length: 12 }, (_, m) => categories.reduce((acc, cat) => acc + getAmountForMonth(cat, selectedYear, m), 0)).reduce((a, b) => a + b, 0))}</strong>
							</td>
							{#if monthlyIncome > 0}
								<td class="savings-cell {savingsClass(annualSavings)}"><strong>{formatAsCurrency(annualSavings)}</strong></td>
							{/if}
						</tr>
					</tfoot>
				</table>
			</div>
		</section>

	</main>
</div>

<style>
	/* ── Layout ── */
	.app {
		display: flex;
		min-height: 100vh;
		background: #f4f6fa;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		font-size: 0.95rem;
		color: #1a1d23;
	}

	/* ── Sidebar ── */
	.sidebar {
		width: 200px;
		flex-shrink: 0;
		background: #1e2130;
		color: #c8cdd8;
		display: flex;
		flex-direction: column;
		padding: 1.25rem 0;
		position: sticky;
		top: 0;
		height: 100vh;
		overflow-y: auto;
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

	/* ── Main ── */
	.main {
		flex: 1;
		min-width: 0;
		padding: 1.5rem 2rem 3rem;
		max-width: 1100px;
	}

	/* ── Period bar ── */
	.period-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1.5rem;
	}

	.period-nav {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.period-selects {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.period-selects select,
	.period-selects .year-input {
		padding: 0.45rem 0.7rem;
		border: 1px solid #d0d5e0;
		border-radius: 8px;
		background: #fff;
		font-size: 1rem;
		font-weight: 600;
		color: #1a1d23;
	}

	.period-selects .year-input { width: 80px; }

	.icon-btn {
		background: #fff;
		border: 1px solid #d0d5e0;
		border-radius: 8px;
		width: 36px;
		height: 36px;
		font-size: 1.2rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #555;
		transition: background 0.15s;
	}
	.icon-btn:hover { background: #eef0f6; }

	/* ── Summary cards ── */
	.summary-row {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin-bottom: 1.25rem;
	}

	.summary-card {
		background: #fff;
		border-radius: 12px;
		padding: 1.1rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		box-shadow: 0 1px 4px rgba(0,0,0,0.06);
	}

	.summary-label {
		font-size: 0.78rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #7a8099;
	}

	.summary-amount {
		font-size: 1.55rem;
		font-weight: 700;
		color: #1a1d23;
	}

	.summary-sub {
		font-size: 0.8rem;
		color: #9ba3b5;
	}

	.income-input {
		font-size: 1.55rem;
		font-weight: 700;
		border: none;
		outline: none;
		width: 100%;
		color: #1a1d23;
		background: transparent;
		padding: 0;
	}

	.income-input::placeholder { color: #c5c9d6; }

	.calc-link {
		color: #4f86c6;
		text-decoration: none;
		font-size: 0.8rem;
	}
	.calc-link:hover { text-decoration: underline; }

	.savings-card.positive .summary-amount,
	.annual-card.positive .summary-amount { color: #2e8b57; }

	.savings-card.negative .summary-amount,
	.annual-card.negative .summary-amount { color: #c0392b; }

	.savings-card.positive { border-top: 3px solid #2e8b57; }
	.savings-card.negative { border-top: 3px solid #c0392b; }
	.annual-card.positive { border-top: 3px solid #2e8b57; }
	.annual-card.negative { border-top: 3px solid #c0392b; }
	.income-card { border-top: 3px solid #4f86c6; }
	.spending-card { border-top: 3px solid #e07b54; }

	/* ── Spending bar ── */
	.spend-bar-section {
		background: #fff;
		border-radius: 12px;
		padding: 1rem 1.25rem;
		margin-bottom: 1.25rem;
		box-shadow: 0 1px 4px rgba(0,0,0,0.06);
	}

	.spend-bar {
		display: flex;
		height: 20px;
		border-radius: 10px;
		overflow: hidden;
		background: #eef0f6;
	}

	.spend-segment {
		height: 100%;
		transition: width 0.3s;
	}

	.savings-segment {
		background: #2e8b57;
		opacity: 0.7;
	}

	.spend-bar-legend {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 0.6rem;
		font-size: 0.8rem;
		color: #555;
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}

	.legend-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		display: inline-block;
	}

	.savings-dot { background: #2e8b57; opacity: 0.85; }

	/* ── Categories ── */
	.categories-section {
		background: #fff;
		border-radius: 12px;
		padding: 1.25rem;
		box-shadow: 0 1px 4px rgba(0,0,0,0.06);
		margin-bottom: 1.25rem;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.75rem;
	}

	.section-header h2 {
		margin: 0;
		font-size: 1rem;
		font-weight: 700;
	}

	.btn-add {
		background: transparent;
		border: 1px solid #4f86c6;
		color: #4f86c6;
		padding: 0.4rem 0.85rem;
		border-radius: 8px;
		font-size: 0.85rem;
		cursor: pointer;
		transition: background 0.15s, color 0.15s;
	}
	.btn-add:hover { background: #4f86c6; color: #fff; }

	.add-category-row {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
		padding: 0.75rem;
		background: #f9fafb;
		border-radius: 8px;
	}

	.input, .add-category-row input {
		flex: 1;
		padding: 0.5rem 0.7rem;
		border: 1px solid #d0d5e0;
		border-radius: 8px;
		font-size: 0.9rem;
		background: #fff;
	}

	.btn-primary {
		padding: 0.5rem 1rem;
		background: #4f86c6;
		color: #fff;
		border: none;
		border-radius: 8px;
		font-size: 0.9rem;
		cursor: pointer;
		white-space: nowrap;
	}
	.btn-primary:hover { background: #3a6fa8; }

	.category-list {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.category-item {
		border-radius: 10px;
		border: 1px solid #eaecf2;
		overflow: hidden;
		transition: border-color 0.15s;
	}
	.category-item.expanded { border-color: #4f86c6; }

	.category-row {
		display: grid;
		grid-template-columns: 5px 1fr auto auto auto auto;
		align-items: center;
		gap: 0.75rem;
		padding: 0.65rem 0.9rem 0.65rem 0;
		background: #fff;
	}

	.category-color-bar {
		width: 5px;
		align-self: stretch;
		border-radius: 0;
	}

	.category-name {
		font-weight: 600;
		font-size: 0.95rem;
	}

	.category-meta {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.pct-badge {
		background: #eef0f6;
		color: #555;
		font-size: 0.75rem;
		padding: 0.15rem 0.45rem;
		border-radius: 20px;
		font-weight: 600;
	}

	.amount-input {
		width: 120px;
		padding: 0.4rem 0.6rem;
		border: 1px solid #d0d5e0;
		border-radius: 8px;
		font-size: 0.95rem;
		text-align: right;
		background: #fff;
	}
	.amount-input:focus { outline: 2px solid #4f86c6; border-color: transparent; }

	.category-override {
		font-size: 0.8rem;
		color: #e07b54;
		white-space: nowrap;
		min-width: 140px;
		text-align: left;
	}
	.category-override.placeholder { min-width: 140px; }

	.category-actions {
		display: flex;
		gap: 0.35rem;
	}

	.btn-icon {
		background: transparent;
		border: 1px solid #d0d5e0;
		border-radius: 7px;
		padding: 0.3rem 0.55rem;
		font-size: 0.8rem;
		cursor: pointer;
		color: #555;
		transition: background 0.15s, color 0.15s;
		white-space: nowrap;
	}
	.btn-icon:hover { background: #eef0f6; }
	.btn-icon.active { background: #e8effa; border-color: #4f86c6; color: #4f86c6; }
	.btn-icon.danger:hover { background: #fdecea; border-color: #c0392b; color: #c0392b; }
	.btn-icon.small { padding: 0.2rem 0.4rem; font-size: 0.75rem; }

	/* ── Changes panel ── */
	.changes-panel {
		background: #f9fafb;
		border-top: 1px solid #eaecf2;
		padding: 1rem;
	}

	.changes-header {
		font-size: 0.82rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #7a8099;
		margin-bottom: 0.6rem;
	}

	.changes-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.88rem;
		margin-bottom: 0.75rem;
	}

	.changes-table th,
	.changes-table td {
		padding: 0.4rem 0.5rem;
		border-bottom: 1px solid #eaecf2;
		text-align: left;
	}

	.changes-table th { color: #7a8099; font-weight: 600; }

	.change-form {
		display: flex;
		gap: 0.75rem;
		align-items: flex-end;
		flex-wrap: wrap;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		font-size: 0.82rem;
		color: #555;
	}

	.field-row {
		display: flex;
		gap: 0.35rem;
	}

	.field select,
	.field input {
		padding: 0.45rem 0.6rem;
		border: 1px solid #d0d5e0;
		border-radius: 8px;
		font-size: 0.88rem;
		background: #fff;
	}

	.field .year-input { width: 75px; }

	/* ── Annual table ── */
	.annual-section {
		background: #fff;
		border-radius: 12px;
		padding: 1.25rem;
		box-shadow: 0 1px 4px rgba(0,0,0,0.06);
	}

	.annual-section h2 {
		margin: 0 0 0.9rem;
		font-size: 1rem;
		font-weight: 700;
	}

	.annual-table-wrap {
		overflow-x: auto;
	}

	.annual-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.86rem;
		white-space: nowrap;
	}

	.annual-table th,
	.annual-table td {
		padding: 0.5rem 0.75rem;
		border-bottom: 1px solid #eaecf2;
		text-align: right;
	}

	.annual-table th:first-child,
	.annual-table td:first-child { text-align: left; }

	.annual-table thead th {
		font-size: 0.8rem;
		font-weight: 700;
		color: #7a8099;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		background: #f9fafb;
	}

	.annual-table tfoot td {
		background: #f4f6fa;
		font-weight: 600;
		border-top: 2px solid #d0d5e0;
	}

	.current-month { background: #f0f5ff; }
	.month-cell { font-weight: 600; }
	.total-cell { font-weight: 600; }
	.savings-cell.positive { color: #2e8b57; font-weight: 600; }
	.savings-cell.negative { color: #c0392b; font-weight: 600; }

	/* ── Responsive ── */
	@media (max-width: 900px) {
		.sidebar { display: none; }
		.main { padding: 1rem; }
		.summary-row { grid-template-columns: repeat(2, 1fr); }
	}

	@media (max-width: 540px) {
		.summary-row { grid-template-columns: 1fr; }
		.category-override { display: none; }
	}
</style>
