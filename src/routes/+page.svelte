<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	import { formatAsCurrency, safelyGetLocalStorage, safelySetLocalStorage } from '$lib';
	import Nav from '$lib/Nav.svelte';
	import { auth, db } from '$lib/firebase.js';
	import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
	import { doc, getDoc, setDoc } from 'firebase/firestore';

	const STORAGE_KEY = 'monthly-budget-v5';
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
	 * @typedef {{ id: string; amount: number; kind: 'yearly' | 'one-time'; month: number; day: number; year?: number; label?: string; mode?: 'lump-sum' | 'amortized' }} CategoryEvent
	 */

	/**
	 * @typedef {{ id: string; name: string; baseAmount: number; changes: BudgetChange[]; events: CategoryEvent[] }} BudgetCategory
	 */

	/** @type {BudgetCategory[]} */
	let categories = [
		{ id: 'housing', name: 'Housing', baseAmount: 2500, changes: [], events: [] },
		{ id: 'education', name: 'Education', baseAmount: 1000, changes: [], events: [] },
		{ id: 'groceries', name: 'Groceries', baseAmount: 700, changes: [], events: [] },
		{ id: 'transport', name: 'Transport', baseAmount: 400, changes: [], events: [] }
	];

	/**
	 * @typedef {{ effectiveYear: number; effectiveMonth: number; amount: number }} IncomeChange
	 */

	/**
	 * @typedef {{ id: string; name: string; amount: number; frequency: 'monthly' | 'biweekly'; startDate?: string; changes: IncomeChange[] }} IncomeSource
	 */

	/**
	 * @typedef {{ id: string; name: string; amount: number; year: number; month: number }} Bonus
	 */

	let selectedYear = now.getFullYear();
	let selectedMonth = now.getMonth();

	/** @type {IncomeSource[]} */
	let incomeSources = [
		{ id: 'income-1', name: 'My Income', amount: 0, frequency: 'biweekly', startDate: now.toISOString().slice(0, 10), changes: [] }
	];

	/** @type {Bonus[]} */
	let bonuses = [];

	let addingIncome = false;
	let newIncomeName = '';
	let newIncomeAmount = 0;
	/** @type {'monthly' | 'biweekly'} */
	let newIncomeFrequency = 'biweekly';
	let newIncomeStartDate = now.toISOString().slice(0, 10);

	let addingBonus = false;
	let newBonusName = '';
	let newBonusAmount = 0;
	let newBonusYear = now.getFullYear();
	let newBonusMonth = now.getMonth();

	// Income scheduled change panel state
	/** @type {string} */
	let expandedIncomeSourceId = '';
	let incomeChangeEffectiveYear = selectedYear;
	let incomeChangeEffectiveMonth = selectedMonth;
	let incomeChangeAmount = 0;

	let hasLoadedFromStorage = false;

	/**
	 * @type {import('firebase/auth').User | null}
	 */
	let currentUser = null;
	let email = '';
	let password = '';

	let newCategoryName = '';
	let newCategoryAmount = 0;
	/** @type {'monthly' | 'yearly'} */
	let newCategoryCadence = 'monthly';
	let newCategoryDueMonth = selectedMonth;
	let newCategoryDueDay = 1;

	// Inline-add state
	let addingCategory = false;

	// Scheduled change panel state
	/** @type {string} */
	let expandedChangeCategoryId = '';
	let changeEffectiveYear = selectedYear;
	let changeEffectiveMonth = selectedMonth;
	let changeAmount = 0;
	/** @type {'monthly' | 'yearly' | 'one-time'} */
	let changeMode = 'monthly';
	let eventLabel = '';
	let eventMonth = selectedMonth;
	let eventDay = 1;
	let eventYear = selectedYear;
	/** @type {'lump-sum' | 'amortized'} */
	let yearlyProjectionView = 'lump-sum';

	/** @type {{ category: BudgetCategory; activeAmount: number; color: string }[]} */
	let monthlyRows = [];
	let totalMonthlyBudget = 0;
	let monthlySavings = 0;
	let annualSavings = 0;

	/**
	 * @param {unknown} parsed
	 */
	function applyParsedBudget(parsed) {
		const p = /** @type {{ categories?: unknown; incomeSources?: unknown; bonuses?: unknown; expenses?: unknown }} */ (parsed);
		if (Array.isArray(p?.categories)) {
			categories = normalizeCategories(p.categories);
		}
		if (Array.isArray(p?.incomeSources) && p.incomeSources.length > 0) {
			incomeSources = p.incomeSources
				.filter((/** @type {unknown} */ s) => s && typeof s === 'object')
				.map((/** @type {{ id?: unknown; name?: unknown; amount?: unknown; frequency?: unknown; startDate?: unknown; changes?: unknown[] }} */ s, /** @type {number} */ i) => {
					/** @type {{ effectiveYear: number; effectiveMonth: number; amount: number }[]} */
					const changes = [];
					if (Array.isArray(s.changes)) {
						for (const c of (/** @type {unknown[]} */ (s.changes))) {
							if (!c || typeof c !== 'object') continue;
							const cp = /** @type {{ effectiveYear?: unknown; effectiveMonth?: unknown; amount?: unknown }} */ (c);
							changes.push({
								effectiveYear: Number(cp.effectiveYear) || now.getFullYear(),
								effectiveMonth: Number(cp.effectiveMonth) || 0,
								amount: Number(cp.amount) || 0
							});
						}
						changes.sort((a, b) => compareYearMonth(a.effectiveYear, a.effectiveMonth, b.effectiveYear, b.effectiveMonth));
					}
					return {
						id: typeof s.id === 'string' && s.id ? s.id : `income-${i}`,
						name: typeof s.name === 'string' && s.name ? s.name : `Income ${i + 1}`,
						amount: Number(s.amount) || 0,
						frequency: s.frequency === 'monthly' ? 'monthly' : /** @type {'biweekly'} */ ('biweekly'),
						changes,
						...(typeof s.startDate === 'string' && s.startDate ? { startDate: s.startDate } : {})
					};
				});
		}
		if (Array.isArray(p?.bonuses)) {
			bonuses = p.bonuses
				.filter((/** @type {unknown} */ b) => b && typeof b === 'object')
				.map((/** @type {{ id?: unknown; name?: unknown; amount?: unknown; year?: unknown; month?: unknown }} */ b, /** @type {number} */ i) => ({
					id: typeof b.id === 'string' && b.id ? b.id : `bonus-${i}`,
					name: typeof b.name === 'string' && b.name ? b.name : `Bonus ${i + 1}`,
					amount: Number(b.amount) || 0,
					year: Number(b.year) || now.getFullYear(),
					month: Number(b.month) || 0
				}));
		}
		// Migrate legacy top-level expenses into a dedicated category events list.
		if (Array.isArray(p?.expenses)) {
			const legacyEvents = p.expenses
				.filter((/** @type {unknown} */ e) => e && typeof e === 'object')
				.map((/** @type {{ id?: unknown; name?: unknown; amount?: unknown; frequency?: unknown; month?: unknown; day?: unknown; date?: unknown }} */ e, /** @type {number} */ i) => {
					const isOneTime = e.frequency === 'one-time';
					const fromDate = typeof e.date === 'string' ? new Date(e.date + 'T12:00:00') : null;
					const parsedMonth = Number(e.month);
					const parsedDay = Number(e.day);
					return {
						id: typeof e.id === 'string' && e.id ? e.id : `legacy-expense-${i}`,
						label: typeof e.name === 'string' ? e.name : `Expense ${i + 1}`,
						amount: Number(e.amount) || 0,
						kind: isOneTime ? /** @type {'one-time'} */ ('one-time') : /** @type {'yearly'} */ ('yearly'),
						month: Number.isFinite(parsedMonth) ? parsedMonth : (fromDate ? fromDate.getMonth() : now.getMonth()),
						day: Number.isFinite(parsedDay) ? parsedDay : (fromDate ? fromDate.getDate() : 1),
						...(isOneTime ? {} : { mode: /** @type {'lump-sum'} */ ('lump-sum') }),
						...(isOneTime && fromDate ? { year: fromDate.getFullYear() } : {})
					};
				});
			if (legacyEvents.length > 0) {
				const existing = categories.find((c) => c.id === 'scheduled-expenses');
				if (existing) {
					categories = categories.map((c) =>
						c.id === 'scheduled-expenses' ? { ...c, events: [...(c.events ?? []), ...legacyEvents] } : c
					);
				} else {
					categories = [
						...categories,
						{ id: 'scheduled-expenses', name: 'Scheduled Expenses', baseAmount: 0, changes: [], events: legacyEvents }
					];
				}
			}
		}
		migrateScheduledExpensesCategory();
	}

	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let syncDebounceTimer;

	async function syncBudgetToFirebase() {
		if (!currentUser) return;
		try {
			await setDoc(doc(db, 'budgets', currentUser.uid), { categories, incomeSources, bonuses });
		} catch (err) {
			console.error('Failed to sync budget to Firebase:', err);
		}
	}

	function debouncedSyncBudgetToFirebase() {
		clearTimeout(syncDebounceTimer);
		syncDebounceTimer = setTimeout(syncBudgetToFirebase, 2000);
	}

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

	onAuthStateChanged(auth, async (user) => {
		currentUser = user;
		if (user) {
			const snap = await getDoc(doc(db, 'budgets', user.uid));
			if (snap.exists()) {
				try {
					applyParsedBudget(snap.data());
				} catch (err) {
					console.error('Could not apply Firestore budget', err);
				}
			}
		}
	});

	onMount(() => {
		const storedBudget = safelyGetLocalStorage(STORAGE_KEY);
		if (storedBudget) {
			try {
				applyParsedBudget(JSON.parse(storedBudget));
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
		safelySetLocalStorage(STORAGE_KEY, JSON.stringify({ categories, incomeSources, bonuses }));
		debouncedSyncBudgetToFirebase();
	}

	/**
	 * Count how many biweekly paydays fall in the given year/month,
	 * given any reference payday as start date.
	 * @param {string} startDate ISO 'YYYY-MM-DD' of any known payday
	 * @param {number} year
	 * @param {number} month 0-indexed
	 */
	function biweeklyPaychecksInMonth(startDate, year, month) {
		const refMs = new Date(startDate + 'T12:00:00').getTime();
		const firstMs = new Date(year, month, 1, 12, 0, 0).getTime();
		const lastMs = new Date(year, month + 1, 0, 12, 0, 0).getTime();
		const interval = 14 * 24 * 60 * 60 * 1000;
		const nStart = Math.ceil((firstMs - refMs) / interval);
		let count = 0;
		for (let n = nStart; refMs + n * interval <= lastMs; n++) count++;
		return count;
	}

	/**
	 * @param {IncomeSource} src
	 * @param {number} year
	 * @param {number} month 0-indexed
	 */
	function getAmountForIncomeSource(src, year, month) {
		let amount = Number(src.amount) || 0;
		for (const change of (src.changes ?? [])) {
			if (compareYearMonth(change.effectiveYear, change.effectiveMonth, year, month) <= 0) {
				amount = Number(change.amount) || 0;
			}
		}
		return amount;
	}

	/**
	 * @param {IncomeSource} src
	 * @param {number} year
	 * @param {number} month 0-indexed
	 */
	function incomeForMonth(src, year, month) {
		const amount = getAmountForIncomeSource(src, year, month);
		if (src.frequency === 'biweekly') {
			const count = src.startDate
				? biweeklyPaychecksInMonth(src.startDate, year, month)
				: 2;
			return count * amount;
		}
		return amount;
	}

	$: totalMonthlyIncome =
		incomeSources.reduce((acc, src) => acc + incomeForMonth(src, selectedYear, selectedMonth), 0) +
		bonuses
			.filter((b) => b.year === selectedYear && b.month === selectedMonth)
			.reduce((acc, b) => acc + b.amount, 0);

	$: hasYearlyIncome =
		incomeSources.some((src) =>
			Array.from({ length: 12 }, (_, m) => incomeForMonth(src, selectedYear, m)).some((v) => v > 0)
		) || bonuses.some((b) => b.year === selectedYear && b.amount > 0);

	$: {
		yearlyProjectionView;
		monthlyRows = categories.map((category, i) => ({
			category,
			activeAmount: getAmountForMonth(category, selectedYear, selectedMonth),
			color: CATEGORY_COLORS[i % CATEGORY_COLORS.length]
		}));
	}

	$: totalMonthlyBudget = monthlyRows.reduce((acc, row) => acc + row.activeAmount, 0);
	$: monthlySavings = totalMonthlyIncome - totalMonthlyBudget;

	// Annual savings: sum savings for each month of selectedYear
	$: {
		yearlyProjectionView;
		annualSavings = Array.from({ length: 12 }, (_, m) => {
			const income =
				incomeSources.reduce((acc, src) => acc + incomeForMonth(src, selectedYear, m), 0) +
				bonuses
					.filter((b) => b.year === selectedYear && b.month === m)
					.reduce((acc, b) => acc + b.amount, 0);
			const spent = categories.reduce(
				(acc, cat) => acc + getAmountForMonth(cat, selectedYear, m),
				0
			);
			return income - spent;
		}).reduce((a, b) => a + b, 0);
	}

	/** @param {number} val */
	function savingsClass(val) {
		return val >= 0 ? 'positive' : 'negative';
	}

	function exportData() {
		const data = JSON.stringify({ categories, incomeSources, bonuses }, null, 2);
		const blob = new Blob([data], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `budget-planner-${new Date().toISOString().slice(0, 10)}.json`;
		a.click();
		URL.revokeObjectURL(url);
	}

	/** @param {Event} e */
	function handleImport(e) {
		const input = /** @type {HTMLInputElement} */ (e.target);
		const file = input.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = (ev) => {
			try {
				applyParsedBudget(JSON.parse(/** @type {string} */ (ev.target?.result)));
			} catch (err) {
				alert('Failed to import: invalid JSON file.');
				console.error(err);
			} finally {
				input.value = '';
			}
		};
		reader.readAsText(file);
	}

	function addIncomeSource() {
		const name = newIncomeName.trim();
		if (!name) return;
		incomeSources = [
			...incomeSources,
			{
				id: `income-${Date.now()}`,
				name,
				amount: Number(newIncomeAmount) || 0,
				frequency: newIncomeFrequency,
				changes: [],
				...(newIncomeFrequency === 'biweekly' ? { startDate: newIncomeStartDate } : {})
			}
		];
		newIncomeName = '';
		newIncomeAmount = 0;
		newIncomeFrequency = 'biweekly';
		newIncomeStartDate = now.toISOString().slice(0, 10);
		addingIncome = false;
	}

	/** @param {string} id @param {string} name */
	function removeIncomeSource(id, name) {
		if (!confirm(`Delete income source "${name}"? This cannot be undone.`)) return;
		incomeSources = incomeSources.filter((s) => s.id !== id);
		if (expandedIncomeSourceId === id) expandedIncomeSourceId = '';
	}

	/** @param {string} id */
	function toggleIncomeChangePanel(id) {
		if (expandedIncomeSourceId === id) {
			expandedIncomeSourceId = '';
		} else {
			expandedIncomeSourceId = id;
			incomeChangeEffectiveYear = selectedYear;
			incomeChangeEffectiveMonth = selectedMonth;
			const src = incomeSources.find((s) => s.id === id) ?? incomeSources[0];
			incomeChangeAmount = getAmountForIncomeSource(src, selectedYear, selectedMonth);
		}
	}

	function addIncomeScheduledChange() {
		if (!expandedIncomeSourceId) return;
		incomeSources = incomeSources.map((src) => {
			if (src.id !== expandedIncomeSourceId) return src;
			const nextChanges = [
				...(src.changes ?? []),
				{
					effectiveYear: Number(incomeChangeEffectiveYear),
					effectiveMonth: Number(incomeChangeEffectiveMonth),
					amount: Number(incomeChangeAmount) || 0
				}
			].sort((a, b) => compareYearMonth(a.effectiveYear, a.effectiveMonth, b.effectiveYear, b.effectiveMonth));
			return { ...src, changes: nextChanges };
		});
	}

	/**
	 * @param {string} sourceId
	 * @param {number} index
	 */
	function removeIncomeScheduledChange(sourceId, index) {
		incomeSources = incomeSources.map((src) => {
			if (src.id !== sourceId) return src;
			return { ...src, changes: (src.changes ?? []).filter((_, i) => i !== index) };
		});
	}

	function addBonus() {
		const name = newBonusName.trim();
		if (!name || !newBonusAmount) return;
		bonuses = [
			...bonuses,
			{
				id: `bonus-${Date.now()}`,
				name,
				amount: Number(newBonusAmount) || 0,
				year: Number(newBonusYear),
				month: Number(newBonusMonth)
			}
		];
		newBonusName = '';
		newBonusAmount = 0;
		newBonusYear = now.getFullYear();
		newBonusMonth = now.getMonth();
		addingBonus = false;
	}

	/** @param {string} id @param {string} name */
	function removeBonus(id, name) {
		if (!confirm(`Delete bonus "${name}"? This cannot be undone.`)) return;
		bonuses = bonuses.filter((b) => b.id !== id);
	}

	function addCategory() {
		const name = newCategoryName.trim();
		if (!name) return;

		const id = makeCategoryId(name);
		const numericAmount = Number(newCategoryAmount) || 0;
		const initialEvents = newCategoryCadence === 'yearly'
			? [{
				id: `event-${Date.now()}`,
				amount: numericAmount,
				kind: /** @type {'yearly'} */ ('yearly'),
				month: Number(newCategoryDueMonth),
				day: Number(newCategoryDueDay)
			}]
			: [];
		categories = [
			...categories,
			{ id, name, baseAmount: newCategoryCadence === 'monthly' ? numericAmount : 0, changes: [], events: initialEvents }
		];

		newCategoryName = '';
		newCategoryAmount = 0;
		newCategoryCadence = 'monthly';
		newCategoryDueMonth = selectedMonth;
		newCategoryDueDay = 1;
		addingCategory = false;
	}

	/** @param {string} categoryId @param {string} categoryName */
	function removeCategory(categoryId, categoryName) {
		if (!confirm(`Delete category "${categoryName}"? This cannot be undone.`)) return;
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
			changeMode = 'monthly';
			eventMonth = selectedMonth;
			eventDay = 1;
			eventYear = selectedYear;
			eventLabel = '';
			changeAmount = getAmountForMonth(
				categories.find((c) => c.id === id) ?? categories[0],
				selectedYear,
				selectedMonth
			);
		}
	}

	function addScheduledChange() {
		if (!expandedChangeCategoryId) return;
		if (changeMode !== 'monthly') {
			let targetCategoryId = expandedChangeCategoryId;
			if (expandedChangeCategoryId === 'scheduled-expenses' && eventLabel.trim()) {
				targetCategoryId = ensureCategoryByName(eventLabel.trim());
			}
			const nextEvent = {
				id: `event-${Date.now()}`,
				amount: Number(changeAmount) || 0,
				kind: changeMode,
				month: Number(eventMonth),
				day: Number(eventDay),
				...(changeMode === 'one-time' ? { year: Number(eventYear) } : {}),
				...(eventLabel.trim() ? { label: eventLabel.trim() } : {})
			};
			categories = categories.map((category) => {
				if (category.id !== targetCategoryId) return category;
				return { ...category, events: [...(category.events ?? []), nextEvent] };
			});
			if (expandedChangeCategoryId === 'scheduled-expenses') {
				migrateScheduledExpensesCategory();
			}
			return;
		}

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
	 * @param {string} eventId
	 * @param {string} displayText
	 */
	function removeCategoryEvent(categoryId, eventId, displayText) {
		if (!confirm(`Delete event "${displayText}"? This cannot be undone.`)) return;
		categories = categories.map((category) => {
			if (category.id !== categoryId) return category;
			return { ...category, events: (category.events ?? []).filter((evt) => evt.id !== eventId) };
		});
	}

	/**
	 * @param {string} categoryId
	 * @param {number} index
	 * @param {string} displayText
	 */
	function removeScheduledChange(categoryId, index, displayText) {
		if (!confirm(`Delete change "${displayText}"? This cannot be undone.`)) return;
		categories = categories.map((category) => {
			if (category.id !== categoryId) return category;
			return {
				...category,
				changes: category.changes.filter((_, i) => i !== index)
			};
		});
	}

	/**
	 * Update the amount that is active for the currently selected month.
	 * If a scheduled monthly change is already active, edit that change; otherwise edit base amount.
	 * @param {string} categoryId
	 * @param {number} nextAmount
	 */
	function updateCategoryAmountForSelectedMonth(categoryId, nextAmount) {
		const safeAmount = Number(nextAmount) || 0;
		categories = categories.map((category) => {
			if (category.id !== categoryId) return category;
			let latestActiveChangeIndex = -1;
			for (let i = 0; i < category.changes.length; i++) {
				const change = category.changes[i];
				if (compareYearMonth(change.effectiveYear, change.effectiveMonth, selectedYear, selectedMonth) <= 0) {
					latestActiveChangeIndex = i;
				}
			}
			if (latestActiveChangeIndex >= 0) {
				const nextChanges = category.changes.map((change, i) =>
					i === latestActiveChangeIndex ? { ...change, amount: safeAmount } : change
				);
				return { ...category, changes: nextChanges };
			}
			return { ...category, baseAmount: safeAmount };
		});
	}

	/**
	 * @param {BudgetCategory} category
	 * @param {number} year
	 * @param {number} month
	 * @param {'lump-sum' | 'amortized'} [projectionView]
	 */
	function getAmountForMonth(category, year, month, projectionView = yearlyProjectionView) {
		let amount = Number(category.baseAmount) || 0;
		for (const change of category.changes) {
			if (compareYearMonth(change.effectiveYear, change.effectiveMonth, year, month) <= 0) {
				amount = Number(change.amount) || 0;
			}
		}
		return amount + getCategoryEventAmountForMonth(category, year, month, projectionView);
	}

	/**
	 * @param {BudgetCategory} category
	 * @param {number} year
	 * @param {number} month
	 * @param {'lump-sum' | 'amortized'} [projectionView]
	 */
	function getCategoryEventAmountForMonth(category, year, month, projectionView = yearlyProjectionView) {
		return (category.events ?? []).reduce((acc, evt) => {
			if (evt.kind === 'yearly') {
				const yearlyAmount = Number(evt.amount) || 0;
				if (projectionView === 'amortized') {
					return acc + yearlyAmount / 12;
				}
				return evt.month === month ? acc + yearlyAmount : acc;
			}
			return evt.month === month && evt.year === year ? acc + (Number(evt.amount) || 0) : acc;
		}, 0);
	}

	/** @param {BudgetCategory} category */
	function hasYearlyEvents(category) {
		return (category.events ?? []).some((evt) => evt.kind === 'yearly' && (Number(evt.amount) || 0) !== 0);
	}

	/** @param {BudgetCategory} category */
	function isProjectedCategory(category) {
		return yearlyProjectionView === 'amortized' && hasYearlyEvents(category);
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
		/** @type {BudgetCategory[]} */
		const accumulated = [];
		return /** @type {BudgetCategory[]} */ (unknownCategories
			.map((rawCategory, index) => {
				if (!rawCategory || typeof rawCategory !== 'object') return null;
				const candidate = /** @type {{ id?: unknown; name?: unknown; baseAmount?: unknown; changes?: unknown[]; events?: unknown[] }} */ (rawCategory);
				const name =
					typeof candidate.name === 'string' && candidate.name.trim()
						? candidate.name
						: `Category ${index + 1}`;
				const id =
					typeof candidate.id === 'string' && candidate.id.trim() ? candidate.id : makeCategoryIdFromList(name, accumulated);
				/** @type {BudgetChange[]} */
				const changes = [];
				if (Array.isArray(candidate.changes)) {
					for (const change of candidate.changes) {
						if (!change || typeof change !== 'object') continue;
						const p = /** @type {{ effectiveYear?: unknown; effectiveMonth?: unknown; amount?: unknown }} */ (change);
						changes.push({
							effectiveYear: Number(p.effectiveYear) || now.getFullYear(),
							effectiveMonth: Number(p.effectiveMonth) || 0,
							amount: Number(p.amount) || 0
						});
					}
					changes.sort((a, b) => compareYearMonth(a.effectiveYear, a.effectiveMonth, b.effectiveYear, b.effectiveMonth));
				}

				/** @type {CategoryEvent[]} */
				const events = [];
				if (Array.isArray(candidate.events)) {
					for (const event of candidate.events) {
						if (!event || typeof event !== 'object') continue;
						const p = /** @type {{ id?: unknown; amount?: unknown; kind?: unknown; month?: unknown; day?: unknown; year?: unknown; label?: unknown; mode?: unknown }} */ (event);
						events.push({
							id: typeof p.id === 'string' && p.id ? p.id : `event-${Date.now()}-${events.length}`,
							amount: Number(p.amount) || 0,
							kind: p.kind === 'one-time' ? 'one-time' : 'yearly',
							month: Number(p.month) || 0,
							day: Number(p.day) || 1,
							...(p.kind === 'one-time' ? {} : { mode: p.mode === 'amortized' ? 'amortized' : 'lump-sum' }),
							...(p.kind === 'one-time' ? { year: Number(p.year) || now.getFullYear() } : {}),
							...(typeof p.label === 'string' && p.label.trim() ? { label: p.label.trim() } : {})
						});
					}
				}

				const normalized = { id, name, baseAmount: Number(candidate.baseAmount) || 0, changes, events };
				accumulated.push(normalized);
				return normalized;
			})
			.filter(Boolean));
	}

	/**
	 * @param {string} name
	 * @param {BudgetCategory[]} list
	 * @returns {string}
	 */
	function makeCategoryIdFromList(name, list) {
		const slug = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
		const baseId = slug || 'category';
		let nextId = baseId;
		let suffix = 2;
		while (list.some((c) => c.id === nextId)) {
			nextId = `${baseId}-${suffix}`;
			suffix += 1;
		}
		return nextId;
	}

	/**
	 * Ensure a category exists for the given category name and return its id.
	 * @param {string} name
	 * @returns {string}
	 */
	function ensureCategoryByName(name) {
		const normalizedName = name.trim();
		const existing = categories.find((c) => c.name.toLowerCase() === normalizedName.toLowerCase());
		if (existing) return existing.id;
		const id = makeCategoryIdFromList(normalizedName, categories);
		categories = [...categories, { id, name: normalizedName, baseAmount: 0, changes: [], events: [] }];
		return id;
	}

	/**
	 * Split labeled events out of the synthetic Scheduled Expenses category into
	 * their own categories, preserving unlabeled items in Scheduled Expenses.
	 */
	function migrateScheduledExpensesCategory() {
		const scheduled = categories.find((c) => c.id === 'scheduled-expenses');
		if (!scheduled) return;

		const labeledEvents = (scheduled.events ?? []).filter((evt) => Boolean(evt.label && evt.label.trim()));
		if (labeledEvents.length === 0) return;

		for (const evt of labeledEvents) {
			const targetId = ensureCategoryByName(evt.label ?? 'Scheduled Expense');
			categories = categories.map((c) => {
				if (c.id !== targetId) return c;
				return {
					...c,
					events: [
						...(c.events ?? []),
						{ ...evt, label: undefined }
					]
				};
			});
		}

		const remainingEvents = (scheduled.events ?? []).filter((evt) => !(evt.label && evt.label.trim()));
		categories = categories
			.map((c) => (c.id === 'scheduled-expenses' ? { ...c, events: remainingEvents } : c))
			.filter((c) => c.id !== 'scheduled-expenses' || c.baseAmount !== 0 || c.changes.length > 0 || c.events.length > 0);
	}
</script>

<div class="app">
	<Nav />

	<!-- ── Firebase auth ── -->
	{#if !currentUser}
		<div class="auth-bar">
			<form class="auth-form" on:submit|preventDefault={signIn}>
				<input type="email" bind:value={email} placeholder="Email" required />
				<input type="password" bind:value={password} placeholder="Password" required />
				<button type="submit" class="btn-secondary">Sign in to sync</button>
			</form>
		</div>
	{:else}
		<div class="auth-bar auth-bar--signed-in">
			<span class="auth-email">{currentUser.email}</span>
			<button class="btn-secondary" on:click={logOut}>Sign out</button>
		</div>
	{/if}

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
			<div class="period-actions">
				<button class="btn-secondary" on:click={exportData} title="Export planner data as JSON">⬇ Export</button>
				<label class="btn-secondary" title="Import planner data from JSON">
					⬆ Import
					<input type="file" accept=".json,application/json" style="display:none" on:change={handleImport} />
				</label>
			</div>
		</header>

		<!-- Summary cards -->
		<section class="summary-row">
			<div class="summary-card income-card">
				<div class="summary-label-row">
					<span class="summary-label">Monthly Income</span>
					<button class="btn-icon-tiny" title="Add income source" on:click={() => (addingIncome = !addingIncome)}>
						{addingIncome ? '✕' : '+'}
					</button>
				</div>
				<div class="summary-amount">{formatAsCurrency(totalMonthlyIncome)}</div>
				<div class="income-sources-list">
					{#each incomeSources as src (src.id)}
						{@const isIncomeExpanded = expandedIncomeSourceId === src.id}
						{@const activeAmount = getAmountForIncomeSource(src, selectedYear, selectedMonth)}
						<div class="income-source-item" class:expanded={isIncomeExpanded}>
							<div class="income-source-row">
								<input
									class="income-name-input"
									type="text"
									bind:value={src.name}
									on:change={() => (incomeSources = [...incomeSources])}
								/>
								<input
									class="income-amt-input"
									type="number"
									bind:value={src.amount}
									on:change={() => (incomeSources = [...incomeSources])}
								/>
								<select
									class="freq-select"
									bind:value={src.frequency}
									on:change={() => (incomeSources = [...incomeSources])}
								>
									<option value="biweekly">/ 2 wks</option>
									<option value="monthly">/ mo</option>
								</select>
								{#if src.frequency === 'biweekly'}
									<input
										class="start-date-input"
										type="date"
										bind:value={src.startDate}
										on:change={() => (incomeSources = [...incomeSources])}
										title="A known payday date (sets the biweekly cycle)"
									/>
									<span
										class="paycheck-count"
										title="Paychecks in {monthNames[selectedMonth]} {selectedYear}"
									>×{src.startDate ? biweeklyPaychecksInMonth(src.startDate, selectedYear, selectedMonth) : '~2'}</span>
								{/if}
								{#if activeAmount !== src.amount}
									<span class="income-override" title="Scheduled change active">→ {formatAsCurrency(activeAmount)}</span>
								{/if}
								<button
									class="btn-icon-tiny"
									class:active={isIncomeExpanded}
									title="{isIncomeExpanded ? 'Hide' : 'Schedule'} income changes"
									on:click={() => toggleIncomeChangePanel(src.id)}
								>{(src.changes ?? []).length > 0 ? `⏱ ${src.changes.length}` : '⏱'}</button>
								{#if incomeSources.length > 1}
									<button class="btn-icon-tiny danger" title="Remove" on:click={() => removeIncomeSource(src.id, src.name)}>✕</button>
								{/if}
							</div>

							{#if isIncomeExpanded}
								<div class="income-changes-panel">
									<div class="changes-header">Scheduled changes for {src.name}</div>
									{#if (src.changes ?? []).length > 0}
										<table class="changes-table">
											<thead><tr><th>From</th><th>Amount per paycheck</th><th></th></tr></thead>
											<tbody>
												{#each src.changes as change, idx}
													<tr>
														<td>{monthNames[change.effectiveMonth]} {change.effectiveYear}</td>
														<td>{formatAsCurrency(change.amount)}</td>
														<td><button class="btn-icon danger small" on:click={() => removeIncomeScheduledChange(src.id, idx)}>✕</button></td>
													</tr>
												{/each}
											</tbody>
										</table>
									{/if}
									<div class="change-form">
										<label class="field">
											<span>From</span>
											<div class="field-row">
												<select bind:value={incomeChangeEffectiveMonth}>
													{#each monthNames as mname, i}
														<option value={i}>{mname}</option>
													{/each}
												</select>
												<input type="number" bind:value={incomeChangeEffectiveYear} min="2000" max="2100" class="year-input" />
											</div>
										</label>
										<label class="field">
											<span>New amount per {src.frequency === 'biweekly' ? 'paycheck' : 'month'} ($)</span>
											<input type="number" bind:value={incomeChangeAmount} placeholder="Amount" />
										</label>
										<button class="btn-primary" on:click={addIncomeScheduledChange}>Add change</button>
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>
				{#if addingIncome}
					<div class="income-add-row">
						<input type="text" bind:value={newIncomeName} placeholder="Name" class="income-name-input" on:keydown={(e) => e.key === 'Enter' && addIncomeSource()} />
						<input type="number" bind:value={newIncomeAmount} placeholder="Amount" class="income-amt-input" on:keydown={(e) => e.key === 'Enter' && addIncomeSource()} />
						<select class="freq-select" bind:value={newIncomeFrequency}>
							<option value="biweekly">/ 2 wks</option>
							<option value="monthly">/ mo</option>
						</select>
						{#if newIncomeFrequency === 'biweekly'}
							<input type="date" class="start-date-input" bind:value={newIncomeStartDate} title="A known payday date" />
						{/if}
						<button class="btn-icon-tiny confirm" on:click={addIncomeSource}>✓</button>
					</div>
				{/if}

				<!-- Bonuses -->
				<div class="income-section-header">
					<span class="summary-sublabel">Bonuses</span>
					<button class="btn-icon-tiny" title="Add bonus" on:click={() => (addingBonus = !addingBonus)}>
						{addingBonus ? '✕' : '+'}
					</button>
				</div>
				{#each bonuses as bonus (bonus.id)}
					<div class="bonus-row">
						<input class="income-name-input" type="text" bind:value={bonus.name} on:change={() => (bonuses = [...bonuses])} />
						<input class="income-amt-input" type="number" bind:value={bonus.amount} on:change={() => (bonuses = [...bonuses])} />
						<select class="freq-select" bind:value={bonus.month} on:change={() => (bonuses = [...bonuses])}>
							{#each monthNames as mname, i}
								<option value={i}>{mname.slice(0, 3)}</option>
							{/each}
						</select>
						<input class="bonus-year-input" type="number" bind:value={bonus.year} min="2000" max="2100" on:change={() => (bonuses = [...bonuses])} />
						<button class="btn-icon-tiny danger" title="Remove bonus" on:click={() => removeBonus(bonus.id, bonus.name)}>✕</button>
					</div>
				{/each}
				{#if addingBonus}
					<div class="bonus-row">
						<input type="text" bind:value={newBonusName} placeholder="Name" class="income-name-input" on:keydown={(e) => e.key === 'Enter' && addBonus()} />
						<input type="number" bind:value={newBonusAmount} placeholder="Amount" class="income-amt-input" on:keydown={(e) => e.key === 'Enter' && addBonus()} />
						<select class="freq-select" bind:value={newBonusMonth}>
							{#each monthNames as mname, i}
								<option value={i}>{mname.slice(0, 3)}</option>
							{/each}
						</select>
						<input class="bonus-year-input" type="number" bind:value={newBonusYear} min="2000" max="2100" />
						<button class="btn-icon-tiny confirm" on:click={addBonus}>✓</button>
					</div>
				{/if}
				<div class="summary-sub">
					<a href="{base}/take-home-pay" class="calc-link">Calculate take-home →</a>
				</div>
			</div>

			<div class="summary-card spending-card">
				<div class="summary-label">Total Spending</div>
				<div class="summary-amount">{formatAsCurrency(totalMonthlyBudget)}</div>
				<div class="summary-sub">{formatAsCurrency(totalMonthlyBudget * 12)} / year</div>
			</div>

			<div class="summary-card savings-card {savingsClass(monthlySavings)}">
				<div class="summary-label">Monthly Savings</div>
				<div class="summary-amount">{formatAsCurrency(monthlySavings)}</div>
				<div class="summary-sub">
					{#if totalMonthlyIncome > 0}
						{Math.round((monthlySavings / totalMonthlyIncome) * 100)}% of income
					{:else}
						Set income above
					{/if}
				</div>
			</div>

			<div class="summary-card annual-card {savingsClass(annualSavings)}">
				<div class="summary-label">Annual Savings ({selectedYear})</div>
				<div class="summary-amount">{formatAsCurrency(annualSavings)}</div>
				<div class="summary-sub">
					{#if totalMonthlyIncome > 0}
						Across all 12 months
					{:else}
						Set income above
					{/if}
				</div>
			</div>
		</section>

		<!-- Spending bar -->
		{#if totalMonthlyIncome > 0 && totalMonthlyBudget > 0}
			<section class="spend-bar-section">
				<div class="spend-bar">
					{#each monthlyRows as row}
						<div
							class="spend-segment"
							style="width: {Math.min((row.activeAmount / Math.max(totalMonthlyIncome, totalMonthlyBudget)) * 100, 100)}%; background: {row.color};"
							title="{row.category.name}: {formatAsCurrency(row.activeAmount)}"
						></div>
					{/each}
					{#if monthlySavings > 0}
						<div
							class="spend-segment savings-segment"
							style="width: {Math.min((monthlySavings / totalMonthlyIncome) * 100, 100)}%;"
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
				<div class="section-actions">
					<label class="projection-view">
						<span>Yearly Payments View</span>
						<select bind:value={yearlyProjectionView}>
							<option value="lump-sum">Lump Sum</option>
							<option value="amortized">Amortized</option>
						</select>
					</label>
					<button class="btn-add" on:click={() => (addingCategory = !addingCategory)}>
						{addingCategory ? '✕ Cancel' : '+ Add Category'}
					</button>
				</div>
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
					<select class="input" bind:value={newCategoryCadence}>
						<option value="monthly">Monthly</option>
						<option value="yearly">Yearly</option>
					</select>
					<input
						type="number"
						bind:value={newCategoryAmount}
						placeholder={newCategoryCadence === 'yearly' ? 'Yearly amount' : 'Monthly amount'}
						class="input"
						on:keydown={(e) => e.key === 'Enter' && addCategory()}
					/>
					{#if newCategoryCadence === 'yearly'}
						<select class="input" bind:value={newCategoryDueMonth}>
							{#each monthNames as name, i}
								<option value={i}>{name}</option>
							{/each}
						</select>
						<input class="input due-day-input" type="number" bind:value={newCategoryDueDay} min="1" max="31" placeholder="Day" />
					{/if}
					<button class="btn-primary" on:click={addCategory}>Add</button>
				</div>
			{/if}

			<div class="category-list">
				{#each monthlyRows as row (row.category.id)}
					{@const isExpanded = expandedChangeCategoryId === row.category.id}
					{@const pct = totalMonthlyIncome > 0 ? Math.round((row.activeAmount / totalMonthlyIncome) * 100) : null}
					{@const scheduledEventAmount = getCategoryEventAmountForMonth(row.category, selectedYear, selectedMonth, yearlyProjectionView)}
					{@const projectedRow = isProjectedCategory(row.category)}

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
									value={row.activeAmount}
									disabled={projectedRow}
									on:change={(e) => updateCategoryAmountForSelectedMonth(row.category.id, Number(e.currentTarget.value))}
									aria-label="Amount for {row.category.name}"
								/>
							</div>
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
									on:click={() => removeCategory(row.category.id, row.category.name)}
								>✕</button>
							</div>
						</div>

						{#if scheduledEventAmount > 0}
							<div class="category-note" class:projected-note={yearlyProjectionView === 'amortized'}>
								{yearlyProjectionView === 'amortized' ? 'Projected set-aside*' : 'Scheduled payment'}: +{formatAsCurrency(scheduledEventAmount)}
							</div>
						{/if}

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
														<button class="btn-icon danger small" on:click={() => removeScheduledChange(row.category.id, index, `${monthNames[change.effectiveMonth]} ${change.effectiveYear}`)}>✕</button>
													</td>
												</tr>
											{/each}
										</tbody>
									</table>
								{/if}

								{#if (row.category.events ?? []).length > 0}
									<table class="changes-table spaced-top">
										<thead>
											<tr>
												<th>Type</th>
												<th>When</th>
												<th>Amount</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											{#each row.category.events as evt}
												<tr>
													<td>{evt.kind === 'yearly' ? 'Yearly' : 'One-time'}</td>
													<td>
														{monthNames[evt.month]} {evt.day}{#if evt.kind === 'one-time'} {evt.year}{/if}
														{#if evt.label}
															<div class="event-label">{evt.label}</div>
														{/if}
													</td>
													<td>{formatAsCurrency(evt.amount)}</td>
													<td>
														<button class="btn-icon danger small" on:click={() => removeCategoryEvent(row.category.id, evt.id, `${monthNames[evt.month]} ${evt.day}`)}>✕</button>
													</td>
												</tr>
											{/each}
										</tbody>
									</table>
								{/if}

								<div class="change-form">
									<label class="field">
										<span>Schedule type</span>
										<select bind:value={changeMode}>
											<option value="monthly">Monthly amount change</option>
											<option value="yearly">Yearly payment</option>
											<option value="one-time">One-time payment</option>
										</select>
									</label>
									{#if changeMode === 'monthly'}
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
									{:else}
										<label class="field">
											<span>When</span>
											<div class="field-row">
												<select bind:value={eventMonth}>
													{#each monthNames as name, i}
														<option value={i}>{name}</option>
													{/each}
												</select>
												<input type="number" bind:value={eventDay} min="1" max="31" class="year-input" />
												{#if changeMode === 'one-time'}
													<input type="number" bind:value={eventYear} min="2000" max="2100" class="year-input" />
												{/if}
											</div>
										</label>
										<label class="field">
											<span>Label (optional)</span>
											<input type="text" bind:value={eventLabel} placeholder="e.g. Auto insurance" />
										</label>
									{/if}
									<label class="field">
										<span>{changeMode === 'monthly' ? 'New amount ($)' : 'Payment amount ($)'}</span>
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
							<th>Total Spending</th>
							{#if hasYearlyIncome}
								<th>Income</th>
								<th>Savings</th>
							{/if}
							{#each categories as cat}
								{@const projectedHeader = isProjectedCategory(cat)}
								<th class:projected-cell={projectedHeader}>{cat.name}{#if projectedHeader}<span class="projection-marker">*</span>{/if}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each monthNames as name, m}
							{@const spent = categories.reduce((acc, cat) => acc + getAmountForMonth(cat, selectedYear, m, yearlyProjectionView), 0)}
							{@const rowIncome = incomeSources.reduce((acc, src) => acc + incomeForMonth(src, selectedYear, m), 0) + bonuses.filter((b) => b.year === selectedYear && b.month === m).reduce((acc, b) => acc + b.amount, 0)}
							{@const savings = rowIncome - spent}
							<tr class:current-month={m === selectedMonth && selectedYear === now.getFullYear()}>
								<td class="month-cell">{name}</td>
								<td class="total-cell">{formatAsCurrency(spent)}</td>
								{#if hasYearlyIncome}
									<td class="income-cell">{formatAsCurrency(rowIncome)}</td>
									<td class="savings-cell {savingsClass(savings)}">{formatAsCurrency(savings)}</td>
								{/if}
								{#each categories as cat}
									{@const projectedCell = isProjectedCategory(cat)}
									<td class:projected-cell={projectedCell}>{formatAsCurrency(getAmountForMonth(cat, selectedYear, m, yearlyProjectionView))}{#if projectedCell}<span class="projection-marker">*</span>{/if}</td>
								{/each}
							</tr>
						{/each}
					</tbody>
					<tfoot>
						<tr>
							<td><strong>Year Total</strong></td>
							<td class="total-cell">
								<strong>{formatAsCurrency(Array.from({ length: 12 }, (_, m) => categories.reduce((acc, cat) => acc + getAmountForMonth(cat, selectedYear, m, yearlyProjectionView), 0)).reduce((a, b) => a + b, 0))}</strong>
							</td>
							{#if hasYearlyIncome}
								<td class="income-cell">
									<strong>{formatAsCurrency(Array.from({ length: 12 }, (_, m) => incomeSources.reduce((acc, src) => acc + incomeForMonth(src, selectedYear, m), 0) + bonuses.filter((b) => b.year === selectedYear && b.month === m).reduce((acc, b) => acc + b.amount, 0)).reduce((a, b) => a + b, 0))}</strong>
								</td>
								<td class="savings-cell {savingsClass(annualSavings)}"><strong>{formatAsCurrency(annualSavings)}</strong></td>
							{/if}
							{#each categories as cat}
								<td>
									{formatAsCurrency(
										Array.from({ length: 12 }, (_, m) => getAmountForMonth(cat, selectedYear, m, yearlyProjectionView)).reduce((a, b) => a + b, 0)
									)}
								</td>
							{/each}
						</tr>
					</tfoot>
				</table>
				{#if yearlyProjectionView === 'amortized'}
					<div class="projection-footnote">* Projected amortized yearly set-aside (planning view). Actual payment still occurs on due date.</div>
				{/if}
			</div>
		</section>

	</main>
</div>

<style>
	/* ── Auth bar ── */
	.auth-bar {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 100;
		padding: 0.4rem 0.75rem;
		background: #fff;
		border-bottom-left-radius: 6px;
		box-shadow: 0 1px 4px rgba(0,0,0,0.1);
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.auth-form {
		display: flex;
		gap: 0.4rem;
		align-items: center;
	}
	.auth-form input {
		padding: 0.3rem 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 0.85rem;
		width: 140px;
	}
	.auth-bar--signed-in {
		gap: 0.75rem;
	}
	.auth-email {
		font-size: 0.8rem;
		color: #555;
	}

	/* ── Layout ── */
	.app {
		display: flex;
		min-height: 100vh;
		background: #f4f6fa;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		font-size: 0.95rem;
		color: #1a1d23;
	}

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
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	}

	.period-actions {
		display: flex;
		gap: 0.5rem;
	}

	.btn-secondary {
		padding: 0.45rem 0.85rem;
		border: 1px solid #d0d5e0;
		border-radius: 8px;
		background: #fff;
		font-size: 0.85rem;
		font-weight: 500;
		color: #444;
		cursor: pointer;
		text-decoration: none;
		transition: background 0.15s, border-color 0.15s;
		white-space: nowrap;
	}
	.btn-secondary:hover { background: #eef0f6; border-color: #b0b8cc; }

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

	.summary-label-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.income-sources-list {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		margin: 0.3rem 0;
	}

	.income-source-item {
		border-radius: 8px;
		border: 1px solid transparent;
		transition: border-color 0.15s;
	}
	.income-source-item.expanded {
		border-color: #d0d5e0;
		background: #f9fafb;
		padding: 0.4rem;
	}

	.income-source-row,
	.income-add-row {
		display: flex;
		gap: 0.3rem;
		align-items: center;
	}

	.income-override {
		font-size: 0.78rem;
		color: #8b6bbf;
		font-weight: 600;
		white-space: nowrap;
		flex-shrink: 0;
	}

	.income-changes-panel {
		margin-top: 0.5rem;
		padding-top: 0.5rem;
		border-top: 1px solid #e5e8f0;
	}

	.income-name-input {
		flex: 1;
		min-width: 0;
		padding: 0.25rem 0.4rem;
		border: 1px solid #d0d5e0;
		border-radius: 6px;
		font-size: 0.82rem;
		background: #f9fafb;
	}

	.income-amt-input {
		width: 80px;
		padding: 0.25rem 0.4rem;
		border: 1px solid #d0d5e0;
		border-radius: 6px;
		font-size: 0.82rem;
		text-align: right;
		background: #f9fafb;
	}

	.freq-select {
		padding: 0.25rem 0.3rem;
		border: 1px solid #d0d5e0;
		border-radius: 6px;
		font-size: 0.78rem;
		background: #f9fafb;
		color: #555;
	}

	.btn-icon-tiny {
		background: transparent;
		border: 1px solid #d0d5e0;
		border-radius: 5px;
		padding: 0.15rem 0.4rem;
		font-size: 0.75rem;
		cursor: pointer;
		color: #555;
		line-height: 1.4;
		transition: background 0.15s, color 0.15s;
		flex-shrink: 0;
	}
	.btn-icon-tiny:hover { background: #eef0f6; }
	.btn-icon-tiny.danger:hover { background: #fdecea; border-color: #c0392b; color: #c0392b; }
	.btn-icon-tiny.confirm { border-color: #2e8b57; color: #2e8b57; }
	.btn-icon-tiny.confirm:hover { background: #e8f5ee; }

	.start-date-input {
		width: 120px;
		padding: 0.25rem 0.4rem;
		border: 1px solid #d0d5e0;
		border-radius: 6px;
		font-size: 0.78rem;
		background: #f9fafb;
		color: #444;
	}

	.paycheck-count {
		font-size: 0.78rem;
		font-weight: 600;
		color: #4f86c6;
		white-space: nowrap;
		flex-shrink: 0;
	}

	.income-section-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 0.5rem;
		margin-bottom: 0.2rem;
	}

	.summary-sublabel {
		font-size: 0.78rem;
		font-weight: 600;
		color: #888;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.bonus-row {
		display: flex;
		gap: 0.3rem;
		align-items: center;
		margin-bottom: 0.15rem;
	}

	.bonus-year-input {
		width: 60px;
		padding: 0.25rem 0.4rem;
		border: 1px solid #d0d5e0;
		border-radius: 6px;
		font-size: 0.82rem;
		text-align: right;
		background: #f9fafb;
	}

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

	.section-actions {
		display: flex;
		align-items: center;
		gap: 0.65rem;
	}

	.projection-view {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
		color: #444;
	}

	.projection-view select {
		padding: 0.2rem 0.35rem;
		border: 1px solid #c8cfdb;
		border-radius: 6px;
		font-size: 0.82rem;
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
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
		padding: 0.75rem;
		background: #f9fafb;
		border-radius: 8px;
	}

	.input, .add-category-row input {
		flex: 1 1 150px;
		min-width: 120px;
		padding: 0.5rem 0.7rem;
		border: 1px solid #d0d5e0;
		border-radius: 8px;
		font-size: 0.9rem;
		background: #fff;
	}

	.due-day-input {
		flex: 0 0 88px;
		min-width: 88px;
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
		grid-template-columns: 5px minmax(120px, 1fr) 3.5rem 130px auto;
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
		width: 100%;
		padding: 0.4rem 0.6rem;
		border: 1px solid #d0d5e0;
		border-radius: 8px;
		font-size: 0.95rem;
		text-align: right;
		background: #fff;
		box-sizing: border-box;
	}
	.amount-input:focus { outline: 2px solid #4f86c6; border-color: transparent; }

	.category-note {
		padding: 0 0.9rem 0.45rem 0;
		font-size: 0.8rem;
		color: #e07b54;
		text-align: right;
		line-height: 1.2;
	}

	.category-note.projected-note {
		font-style: italic;
	}

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
		min-width: 2.5rem;
		text-align: center;
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

	.changes-table.spaced-top { margin-top: 0.6rem; }

	.event-label {
		font-size: 0.72rem;
		color: #6b7280;
		margin-top: 0.1rem;
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
	.income-cell { color: #4f86c6; font-weight: 500; }
	.projected-cell {
		font-style: italic;
		color: #7b5b2a;
	}
	.projection-marker {
		margin-left: 0.15rem;
		font-size: 0.8em;
		font-weight: 700;
	}
	.projection-footnote {
		margin-top: 0.45rem;
		font-size: 0.8rem;
		color: #6b7280;
		font-style: italic;
	}

	/* ── Responsive ── */
	@media (max-width: 900px) {
		.main { padding: 1rem; }
		.summary-row { grid-template-columns: repeat(2, 1fr); }
		.section-actions { flex-wrap: wrap; justify-content: flex-end; }
		.projection-view { width: 100%; justify-content: flex-end; }
		.category-row { grid-template-columns: 5px 1fr 3.5rem 130px auto; }
	}

	@media (max-width: 540px) {
		.summary-row { grid-template-columns: 1fr; }
	}
</style>
