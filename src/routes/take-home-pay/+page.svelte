<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	import { onAuthStateChanged } from 'firebase/auth';
	import { doc, getDoc, setDoc } from 'firebase/firestore';

	import { formatAsCurrency, safelyGetLocalStorage, safelySetLocalStorage } from '$lib';
	import { darkMode } from '$lib/darkModeStore.js';
	import TaxesByState from '$lib/TaxesByState.svelte';
	import Nav from '$lib/Nav.svelte';
	import AuthBar from '$lib/AuthBar.svelte';
	import { auth, db } from '$lib/firebase.js';

	let currentUser = auth.currentUser;

	let yearlySalary1 = 100000;
	let bonusPercentage1 = 5;
	let _401kContributionPercentage1 = 3;
	let health_care_fsa_contribution_1 = 100;
	let dependent_care_fsa_contribution_1 = 100;
	let annual_medical_deduction_1 = 1234;
	let annual_dental_deduction_1 = 123;
	let annual_vision_deduction_1 = 12;

	let yearlySalary2 = 0;
	let bonusPercentage2 = 0;
	let _401kContributionPercentage2 = 0;
	let health_care_fsa_contribution_2 = 0;
	let dependent_care_fsa_contribution_2 = 0;
	let annual_medical_deduction_2 = 0;
	let annual_dental_deduction_2 = 0;
	let annual_vision_deduction_2 = 0;

	let currentState = 'New Jersey';
	let workState = 'New Jersey';
	let currentYear = '2026';

	let interval = 'annual';
	let deductionInputPeriod1 = 'annual';
	let deductionInputPeriod2 = 'annual';

	/**
	 * @type {Expense[]}
	 */
	let expenses = []; // Array to store expenses, each expense will be an object { label: string, amount: number }

	let hasLoaded = false;
	let saveStatus = '';
	let inputsExpanded = true;

	// ── Compare / What-if scenario ──
	// Lets the user preview take-home for different inputs without overwriting current values.
	let compareMode = false;
	let scenarioSalary1 = 0;
	let scenario401kContributionPercentage1 = 0;
	let scenarioSalary2 = 0;
	let scenario401kContributionPercentage2 = 0;

	// Outputs read back from the tax breakdown components for comparison.
	let currentAnnualTakeHome = 0;
	let currentMonthlyTakeHome = 0;
	let currentBiweeklyTakeHome = 0;
	let scenarioAnnualTakeHome = 0;
	let scenarioMonthlyTakeHome = 0;
	let scenarioBiweeklyTakeHome = 0;

	$: scenarioMonthlyDelta = scenarioMonthlyTakeHome - currentMonthlyTakeHome;
	$: scenarioBiweeklyDelta = scenarioBiweeklyTakeHome - currentBiweeklyTakeHome;
	$: scenarioAnnualDelta = scenarioAnnualTakeHome - currentAnnualTakeHome;

	$: typedCurrentYear =
		/** @type {'2023'|'2024'|'2025'|'2026'} */ (/** @type {any} */ (currentYear));

	function initScenarioFromCurrent() {
		scenarioSalary1 = yearlySalary1;
		scenario401kContributionPercentage1 = _401kContributionPercentage1;
		scenarioSalary2 = yearlySalary2;
		scenario401kContributionPercentage2 = _401kContributionPercentage2;
	}

	function toggleCompareMode() {
		if (!compareMode) initScenarioFromCurrent();
		compareMode = !compareMode;
	}

	// ── Saved comparisons ──
	/**
	 * @typedef {{ id: string; name: string; salary1: number; k401_1: number; salary2: number; k401_2: number }} TakeHomeScenario
	 */
	/** @type {TakeHomeScenario[]} */
	let savedScenarios = [];
	let scenarioName = '';
	/** @type {string} */
	let loadedScenarioId = '';

	function newScenarioId() {
		return `scenario-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
	}

	async function saveScenario() {
		const name = scenarioName.trim() || `Scenario ${savedScenarios.length + 1}`;
		const scenario = {
			id: newScenarioId(),
			name,
			salary1: Number(scenarioSalary1) || 0,
			k401_1: Number(scenario401kContributionPercentage1) || 0,
			salary2: Number(scenarioSalary2) || 0,
			k401_2: Number(scenario401kContributionPercentage2) || 0
		};
		savedScenarios = [...savedScenarios, scenario];
		loadedScenarioId = scenario.id;
		scenarioName = '';
		await saveData();
	}

	/** @param {TakeHomeScenario} scenario */
	function loadScenario(scenario) {
		scenarioSalary1 = scenario.salary1;
		scenario401kContributionPercentage1 = scenario.k401_1;
		scenarioSalary2 = scenario.salary2;
		scenario401kContributionPercentage2 = scenario.k401_2;
		loadedScenarioId = scenario.id;
		if (!compareMode) compareMode = true;
	}

	/** @param {string} id */
	async function deleteScenario(id) {
		savedScenarios = savedScenarios.filter((s) => s.id !== id);
		if (loadedScenarioId === id) loadedScenarioId = '';
		await saveData();
	}

	let /** @type {number} */
		yearlyBonus1,
		/** @type {number} */
		yearly401kContribution1,
		/** @type {number} */
		yearlyBonus2,
		/** @type {number} */
		yearly401kContribution2;

	$: {
		yearlyBonus1 = (yearlySalary1 || 0) * ((bonusPercentage1 || 0) / 100);
		yearly401kContribution1 = (yearlySalary1 || 0) * ((_401kContributionPercentage1 || 0) / 100);
		yearlyBonus2 = (yearlySalary2 || 0) * ((bonusPercentage2 || 0) / 100);
		yearly401kContribution2 = (yearlySalary2 || 0) * ((_401kContributionPercentage2 || 0) / 100);
	}

	/**
	 * @param {string} period
	 */
	function periodMultiplier(period) {
		if (period === 'monthly') return 12;
		if (period === 'biweekly') return 26;
		return 1;
	}

	/**
	 * @param {number} annualValue
	 * @param {string} period
	 */
	function displayFromAnnual(annualValue, period) {
		return Number(((Number(annualValue) || 0) / periodMultiplier(period)).toFixed(2));
	}

	/**
	 * @param {number | string} displayValue
	 * @param {string} period
	 */
	function annualFromDisplay(displayValue, period) {
		return (Number(displayValue) || 0) * periodMultiplier(period);
	}

	/**
	 * @param {Record<string, any>} data
	 * @param {string} annualKey
	 * @param {string} enteredKey
	 * @param {string} period
	 * @param {number} fallback
	 */
	function getAnnualStoredValue(data, annualKey, enteredKey, period, fallback) {
		if (data[annualKey] != null) return Number(data[annualKey]) || 0;
		if (data[enteredKey] != null) return annualFromDisplay(data[enteredKey], period);
		return fallback;
	}

	/**
	 * @param {Record<string, any>} data
	 */
	function loadCalculatorData(data) {
		yearlySalary1 = Number(data['yearly_salary_1'] ?? yearlySalary1) || 0;
		bonusPercentage1 = Number(data['expected_bonus_1'] ?? bonusPercentage1) || 0;
		_401kContributionPercentage1 =
			Number(data['401k_contribution_1'] ?? _401kContributionPercentage1) || 0;
		deductionInputPeriod1 = data['deduction_input_period_1'] ?? deductionInputPeriod1;
		health_care_fsa_contribution_1 = getAnnualStoredValue(
			data,
			'healthcare_fsa_contribution_1',
			'entered_healthcare_fsa_contribution_1',
			deductionInputPeriod1,
			health_care_fsa_contribution_1
		);
		dependent_care_fsa_contribution_1 = getAnnualStoredValue(
			data,
			'dependent_care_fsa_contribution_1',
			'entered_dependent_care_fsa_contribution_1',
			deductionInputPeriod1,
			dependent_care_fsa_contribution_1
		);
		annual_medical_deduction_1 = getAnnualStoredValue(
			data,
			'annual_medical_deduction_1',
			'entered_medical_deduction_1',
			deductionInputPeriod1,
			annual_medical_deduction_1
		);
		annual_dental_deduction_1 = getAnnualStoredValue(
			data,
			'annual_dental_deduction_1',
			'entered_dental_deduction_1',
			deductionInputPeriod1,
			annual_dental_deduction_1
		);
		annual_vision_deduction_1 = getAnnualStoredValue(
			data,
			'annual_vision_deduction_1',
			'entered_vision_deduction_1',
			deductionInputPeriod1,
			annual_vision_deduction_1
		);

		yearlySalary2 = Number(data['yearly_salary_2'] ?? yearlySalary2) || 0;
		bonusPercentage2 = Number(data['expected_bonus_2'] ?? bonusPercentage2) || 0;
		_401kContributionPercentage2 =
			Number(data['401k_contribution_2'] ?? _401kContributionPercentage2) || 0;
		deductionInputPeriod2 = data['deduction_input_period_2'] ?? deductionInputPeriod2;
		health_care_fsa_contribution_2 = getAnnualStoredValue(
			data,
			'healthcare_fsa_contribution_2',
			'entered_healthcare_fsa_contribution_2',
			deductionInputPeriod2,
			health_care_fsa_contribution_2
		);
		dependent_care_fsa_contribution_2 = getAnnualStoredValue(
			data,
			'dependent_care_fsa_contribution_2',
			'entered_dependent_care_fsa_contribution_2',
			deductionInputPeriod2,
			dependent_care_fsa_contribution_2
		);
		annual_medical_deduction_2 = getAnnualStoredValue(
			data,
			'annual_medical_deduction_2',
			'entered_medical_deduction_2',
			deductionInputPeriod2,
			annual_medical_deduction_2
		);
		annual_dental_deduction_2 = getAnnualStoredValue(
			data,
			'annual_dental_deduction_2',
			'entered_dental_deduction_2',
			deductionInputPeriod2,
			annual_dental_deduction_2
		);
		annual_vision_deduction_2 = getAnnualStoredValue(
			data,
			'annual_vision_deduction_2',
			'entered_vision_deduction_2',
			deductionInputPeriod2,
			annual_vision_deduction_2
		);

		currentState = data['current_state'] ?? currentState;
		workState = data['work_state'] ?? workState;
		currentYear = data['current_year'] ?? currentYear;

		if (Array.isArray(data['take_home_scenarios'])) {
			savedScenarios = data['take_home_scenarios']
				.filter((/** @type {any} */ s) => s && typeof s === 'object')
				.map((/** @type {any} */ s, /** @type {number} */ i) => ({
					id: typeof s.id === 'string' && s.id ? s.id : newScenarioId(),
					name: typeof s.name === 'string' && s.name ? s.name : `Scenario ${i + 1}`,
					salary1: Number(s.salary1) || 0,
					k401_1: Number(s.k401_1) || 0,
					salary2: Number(s.salary2) || 0,
					k401_2: Number(s.k401_2) || 0
				}));
		}
	}

	$: if (hasLoaded) {
		safelySetLocalStorage('expenses', JSON.stringify(expenses));
	}

	// Function to load expenses from local storage on component mount
	onMount(() => {
		const storedExpenses = safelyGetLocalStorage('expenses');
		expenses = storedExpenses ? JSON.parse(storedExpenses) : [];
		const storedCalculatorData = safelyGetLocalStorage('calculatorData');
		if (storedCalculatorData) {
			try {
				loadCalculatorData(JSON.parse(storedCalculatorData));
			} catch (err) {
				console.error('Error parsing local calculator data:', err);
			}
		}
		hasLoaded = true;
	});

	// Function to add a new expense
	function addExpense() {
		expenses = [...expenses, { label: '', amount: 0 }];
	}

	// Function to remove an expense
	/**
	 * @param {number} index
	 */
	function removeExpense(index) {
		expenses = expenses.filter((_, i) => i !== index);
	}

	// Function to save data
	async function saveData() {
		try {
			if (currentUser) {
				// Save to Firebase for signed-in users
				await setDoc(
					doc(db, 'users', currentUser.uid),
					{
						yearly_salary_1: yearlySalary1,
						expected_bonus_1: bonusPercentage1,
						'401k_contribution_1': _401kContributionPercentage1,
						deduction_input_period_1: deductionInputPeriod1,
						healthcare_fsa_contribution_1: health_care_fsa_contribution_1,
						dependent_care_fsa_contribution_1: dependent_care_fsa_contribution_1,
						annual_medical_deduction_1: annual_medical_deduction_1,
						annual_dental_deduction_1: annual_dental_deduction_1,
						annual_vision_deduction_1: annual_vision_deduction_1,
						yearly_salary_2: yearlySalary2,
						expected_bonus_2: bonusPercentage2,
						'401k_contribution_2': _401kContributionPercentage2,
						deduction_input_period_2: deductionInputPeriod2,
						healthcare_fsa_contribution_2: health_care_fsa_contribution_2,
						dependent_care_fsa_contribution_2: dependent_care_fsa_contribution_2,
						annual_medical_deduction_2: annual_medical_deduction_2,
						annual_dental_deduction_2: annual_dental_deduction_2,
						annual_vision_deduction_2: annual_vision_deduction_2,
						current_state: currentState,
						work_state: workState,
						current_year: currentYear,
						take_home_scenarios: savedScenarios
					},
					{ merge: true }
				);
				saveStatus = 'Data saved successfully!';
			} else {
				// Save to local storage for unsigned users
				const userData = {
					yearly_salary_1: yearlySalary1,
					expected_bonus_1: bonusPercentage1,
					'401k_contribution_1': _401kContributionPercentage1,
					deduction_input_period_1: deductionInputPeriod1,
					healthcare_fsa_contribution_1: health_care_fsa_contribution_1,
					dependent_care_fsa_contribution_1: dependent_care_fsa_contribution_1,
					annual_medical_deduction_1: annual_medical_deduction_1,
					annual_dental_deduction_1: annual_dental_deduction_1,
					annual_vision_deduction_1: annual_vision_deduction_1,
					yearly_salary_2: yearlySalary2,
					expected_bonus_2: bonusPercentage2,
					'401k_contribution_2': _401kContributionPercentage2,
					deduction_input_period_2: deductionInputPeriod2,
					healthcare_fsa_contribution_2: health_care_fsa_contribution_2,
					dependent_care_fsa_contribution_2: dependent_care_fsa_contribution_2,
					annual_medical_deduction_2: annual_medical_deduction_2,
					annual_dental_deduction_2: annual_dental_deduction_2,
					annual_vision_deduction_2: annual_vision_deduction_2,
					current_state: currentState,
					work_state: workState,
					current_year: currentYear,
					take_home_scenarios: savedScenarios
				};
				safelySetLocalStorage('calculatorData', JSON.stringify(userData));
				saveStatus = 'Data saved locally!';
			}

			// Clear the status message after 3 seconds
			setTimeout(() => {
				saveStatus = '';
			}, 3000);
		} catch (err) {
			console.error('Error saving data:', err);
			saveStatus = 'Error saving data';
			setTimeout(() => {
				saveStatus = '';
			}, 3000);
		}
	}

	onAuthStateChanged(auth, async (user) => {
		if (user) {
			currentUser = user;
			// console.log(user.uid);
			const snapshot = await getDoc(doc(db, 'users', user.uid));
			const data = snapshot.data();
			if (data) {
				loadCalculatorData(data);
			}
			console.log(snapshot.data());
		} else {
			currentUser = null;
		}
	});
</script>

<svelte:head>
	<title>Take Home Pay | Budget Planner</title>
</svelte:head>

<div class="app" class:dark-mode={$darkMode}>
	<Nav />

	<AuthBar {currentUser} />

	<main class="main">
		<header class="page-header">
			<h1>Take-Home Pay Calculator</h1>
			<div class="header-actions">
				<button class="btn-secondary" on:click={toggleCompareMode}>
					{compareMode ? 'Hide Compare' : 'Compare / Plan'}
				</button>
				<button class="btn-secondary" on:click={saveData}>Save</button>
				{#if saveStatus}<span class="save-toast">{saveStatus}</span>{/if}
			</div>
		</header>

		<!-- Settings card -->
		<section class="card settings-card">
			<div class="settings-grid">
				<div class="field">
					<span class="field-label">Tax Year</span>
					<select bind:value={currentYear}>
						<option value="">-- Select Year --</option>
						<option value="2023">2023</option>
						<option value="2024">2024</option>
						<option value="2025">2025</option>
						<option value="2026">2026</option>
					</select>
				</div>
				<div class="field">
					<span class="field-label">Residence State</span>
					<select bind:value={currentState}>
						<option value="">-- Select State --</option>
						<option value="New York">New York (NY)</option>
						<option value="New Jersey">New Jersey (NJ)</option>
					</select>
				</div>
				<div class="field">
					<span class="field-label">Work State</span>
					<select bind:value={workState}>
						<option value="New York">New York (NY)</option>
						<option value="New Jersey">New Jersey (NJ)</option>
					</select>
				</div>
			</div>
		</section>

		<!-- Summary cards -->
		<section class="summary-row">
			<div class="summary-card">
				<div class="summary-label">Gross Monthly Income</div>
				<div class="summary-amount">
					{formatAsCurrency(yearlySalary1 / 12 + yearlySalary2 / 12)}
				</div>
			</div>
			<div class="summary-card">
				<div class="summary-label">Person 1 Bonus</div>
				<div class="summary-amount">{formatAsCurrency(yearlyBonus1)}</div>
				<div class="summary-sub">/ year</div>
			</div>
			<div class="summary-card">
				<div class="summary-label">Person 1 401k</div>
				<div class="summary-amount">{formatAsCurrency(yearly401kContribution1)}</div>
				<div class="summary-sub">/ year</div>
			</div>
		</section>

		<!-- Salary inputs card -->
		<section class="card">
			<button
				class="section-header collapsible-header"
				on:click={() => (inputsExpanded = !inputsExpanded)}
			>
				<h2>Salary Inputs</h2>
				<span class="chevron" class:open={inputsExpanded}>›</span>
			</button>
			{#if inputsExpanded}
				<div class="persons-grid">
					<!-- Person 1 -->
					<div class="person-col">
						<h3>Person 1</h3>
						<div class="field-group">
							<div class="field">
								<span class="field-label">Yearly Salary</span>
								<input type="number" bind:value={yearlySalary1} />
							</div>
							<div class="field">
								<span class="field-label">Increase Salary by (%)</span>
								<div class="field-row">
									<input type="number" id="salaryIncreasePercentage1" class="flex-input" />
									<button
										class="btn-secondary btn-sm"
										on:click={() =>
											(yearlySalary1 +=
												yearlySalary1 *
												(document.getElementById('salaryIncreasePercentage1').value / 100))}
										>Apply</button
									>
								</div>
							</div>
							<div class="field">
								<span class="field-label">Expected Bonus (%)</span>
								<input type="number" bind:value={bonusPercentage1} />
							</div>
						</div>
						<div class="field-group">
							<div class="field">
								<span class="field-label">401k Contribution (%)</span>
								<input type="number" bind:value={_401kContributionPercentage1} />
							</div>
							<div class="field">
								<span class="field-label">Deduction Entry Period</span>
								<div class="radio-group">
									<label class="radio-label">
										<input
											type="radio"
											name="deductionPeriod1"
											value="annual"
											bind:group={deductionInputPeriod1}
										/>
										Annual
									</label>
									<label class="radio-label">
										<input
											type="radio"
											name="deductionPeriod1"
											value="monthly"
											bind:group={deductionInputPeriod1}
										/>
										Monthly
									</label>
									<label class="radio-label">
										<input
											type="radio"
											name="deductionPeriod1"
											value="biweekly"
											bind:group={deductionInputPeriod1}
										/>
										Biweekly
									</label>
								</div>
								<span class="field-hint"
									>Applies to FSA and medical, dental, and vision deductions.</span
								>
							</div>
							<div class="field">
								<span class="field-label">Healthcare FSA ($)</span>
								<input
									type="number"
									step="0.01"
									value={displayFromAnnual(health_care_fsa_contribution_1, deductionInputPeriod1)}
									on:change={(event) =>
										(health_care_fsa_contribution_1 = annualFromDisplay(
											/** @type {HTMLInputElement} */ (event.currentTarget).value,
											deductionInputPeriod1
										))}
								/>
							</div>
							<div class="field">
								<span class="field-label">Dependent Care FSA ($)</span>
								<input
									type="number"
									step="0.01"
									value={displayFromAnnual(
										dependent_care_fsa_contribution_1,
										deductionInputPeriod1
									)}
									on:change={(event) =>
										(dependent_care_fsa_contribution_1 = annualFromDisplay(
											/** @type {HTMLInputElement} */ (event.currentTarget).value,
											deductionInputPeriod1
										))}
								/>
							</div>
						</div>
						<div class="field-group">
							<div class="field">
								<span class="field-label">Medical Deduction ($)</span>
								<input
									type="number"
									step="0.01"
									value={displayFromAnnual(annual_medical_deduction_1, deductionInputPeriod1)}
									on:change={(event) =>
										(annual_medical_deduction_1 = annualFromDisplay(
											/** @type {HTMLInputElement} */ (event.currentTarget).value,
											deductionInputPeriod1
										))}
								/>
							</div>
							<div class="field">
								<span class="field-label">Dental Deduction ($)</span>
								<input
									type="number"
									step="0.01"
									value={displayFromAnnual(annual_dental_deduction_1, deductionInputPeriod1)}
									on:change={(event) =>
										(annual_dental_deduction_1 = annualFromDisplay(
											/** @type {HTMLInputElement} */ (event.currentTarget).value,
											deductionInputPeriod1
										))}
								/>
							</div>
							<div class="field">
								<span class="field-label">Vision Deduction ($)</span>
								<input
									type="number"
									step="0.01"
									value={displayFromAnnual(annual_vision_deduction_1, deductionInputPeriod1)}
									on:change={(event) =>
										(annual_vision_deduction_1 = annualFromDisplay(
											/** @type {HTMLInputElement} */ (event.currentTarget).value,
											deductionInputPeriod1
										))}
								/>
							</div>
						</div>
					</div>

					<!-- Person 2 -->
					<div class="person-col">
						<h3>Person 2</h3>
						<div class="field-group">
							<div class="field">
								<span class="field-label">Yearly Salary</span>
								<input type="number" bind:value={yearlySalary2} />
							</div>
							<div class="field">
								<span class="field-label">Expected Bonus (%)</span>
								<input type="number" bind:value={bonusPercentage2} />
							</div>
						</div>
						<div class="field-group">
							<div class="field">
								<span class="field-label">401k Contribution (%)</span>
								<input type="number" bind:value={_401kContributionPercentage2} />
							</div>
							<div class="field">
								<span class="field-label">Deduction Entry Period</span>
								<div class="radio-group">
									<label class="radio-label">
										<input
											type="radio"
											name="deductionPeriod2"
											value="annual"
											bind:group={deductionInputPeriod2}
										/>
										Annual
									</label>
									<label class="radio-label">
										<input
											type="radio"
											name="deductionPeriod2"
											value="monthly"
											bind:group={deductionInputPeriod2}
										/>
										Monthly
									</label>
									<label class="radio-label">
										<input
											type="radio"
											name="deductionPeriod2"
											value="biweekly"
											bind:group={deductionInputPeriod2}
										/>
										Biweekly
									</label>
								</div>
								<span class="field-hint"
									>Applies to FSA and medical, dental, and vision deductions.</span
								>
							</div>
							<div class="field">
								<span class="field-label">Healthcare FSA ($)</span>
								<input
									type="number"
									step="0.01"
									value={displayFromAnnual(health_care_fsa_contribution_2, deductionInputPeriod2)}
									on:change={(event) =>
										(health_care_fsa_contribution_2 = annualFromDisplay(
											/** @type {HTMLInputElement} */ (event.currentTarget).value,
											deductionInputPeriod2
										))}
								/>
							</div>
							<div class="field">
								<span class="field-label">Dependent Care FSA ($)</span>
								<input
									type="number"
									step="0.01"
									value={displayFromAnnual(
										dependent_care_fsa_contribution_2,
										deductionInputPeriod2
									)}
									on:change={(event) =>
										(dependent_care_fsa_contribution_2 = annualFromDisplay(
											/** @type {HTMLInputElement} */ (event.currentTarget).value,
											deductionInputPeriod2
										))}
								/>
							</div>
						</div>
						<div class="field-group">
							<div class="field">
								<span class="field-label">Medical Deduction ($)</span>
								<input
									type="number"
									step="0.01"
									value={displayFromAnnual(annual_medical_deduction_2, deductionInputPeriod2)}
									on:change={(event) =>
										(annual_medical_deduction_2 = annualFromDisplay(
											/** @type {HTMLInputElement} */ (event.currentTarget).value,
											deductionInputPeriod2
										))}
								/>
							</div>
							<div class="field">
								<span class="field-label">Dental Deduction ($)</span>
								<input
									type="number"
									step="0.01"
									value={displayFromAnnual(annual_dental_deduction_2, deductionInputPeriod2)}
									on:change={(event) =>
										(annual_dental_deduction_2 = annualFromDisplay(
											/** @type {HTMLInputElement} */ (event.currentTarget).value,
											deductionInputPeriod2
										))}
								/>
							</div>
							<div class="field">
								<span class="field-label">Vision Deduction ($)</span>
								<input
									type="number"
									step="0.01"
									value={displayFromAnnual(annual_vision_deduction_2, deductionInputPeriod2)}
									on:change={(event) =>
										(annual_vision_deduction_2 = annualFromDisplay(
											/** @type {HTMLInputElement} */ (event.currentTarget).value,
											deductionInputPeriod2
										))}
								/>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</section>

		<!-- Tax breakdown card -->
		<section class="card">
			<div class="section-header">
				<h2>Tax Breakdown</h2>
				<div class="radio-group">
					<label class="radio-label">
						<input type="radio" name="interval" value="annual" bind:group={interval} />
						Annual
					</label>
					<label class="radio-label">
						<input type="radio" name="interval" value="monthly" bind:group={interval} />
						Monthly
					</label>
					<label class="radio-label">
						<input type="radio" name="interval" value="fortnightly" bind:group={interval} />
						Fortnightly
					</label>
				</div>
			</div>
			<TaxesByState
				{currentState}
				{workState}
				currentYear={typedCurrentYear}
				bind:totalAnnualTakeHome={currentAnnualTakeHome}
				bind:totalMonthlyTakeHome={currentMonthlyTakeHome}
				bind:totalBiweeklyTakeHome={currentBiweeklyTakeHome}
				health_care_fsa_contributions={[
					health_care_fsa_contribution_1,
					health_care_fsa_contribution_2
				]}
				dependent_care_fsa_contributions={[
					dependent_care_fsa_contribution_1,
					dependent_care_fsa_contribution_2
				]}
				yearlySalaries={[yearlySalary1, yearlySalary2]}
				contributionPercentages={[_401kContributionPercentage1, _401kContributionPercentage2]}
				{interval}
				monthlyDentalContributions={[
					annual_dental_deduction_1 / 12,
					annual_dental_deduction_2 / 12
				]}
				monthlyMedicalContributions={[
					annual_medical_deduction_1 / 12,
					annual_medical_deduction_2 / 12
				]}
				monthlyVisionContributions={[
					annual_vision_deduction_1 / 12,
					annual_vision_deduction_2 / 12
				]}
			/>
		</section>

		<!-- Compare / What-if scenario card -->
		{#if compareMode}
			<section class="card scenario-card">
				<div class="section-header">
					<h2>Compare Scenario</h2>
					<button class="btn-secondary btn-sm" on:click={initScenarioFromCurrent}>
						Reset to current
					</button>
				</div>
				<p class="scenario-hint">
					Adjust the values below to preview take-home pay for a different scenario. Your saved
					values above are not changed.
				</p>

				<div class="persons-grid">
					<!-- Person 1 scenario -->
					<div class="person-col">
						<h3>Person 1</h3>
						<div class="field-group">
							<div class="field">
								<span class="field-label">Yearly Salary</span>
								<input type="number" bind:value={scenarioSalary1} />
							</div>
							<div class="field">
								<span class="field-label">401k Contribution (%)</span>
								<input type="number" bind:value={scenario401kContributionPercentage1} />
							</div>
						</div>
					</div>

					<!-- Person 2 scenario -->
					<div class="person-col">
						<h3>Person 2</h3>
						<div class="field-group">
							<div class="field">
								<span class="field-label">Yearly Salary</span>
								<input type="number" bind:value={scenarioSalary2} />
							</div>
							<div class="field">
								<span class="field-label">401k Contribution (%)</span>
								<input type="number" bind:value={scenario401kContributionPercentage2} />
							</div>
						</div>
					</div>
				</div>

				<span class="field-hint">
					Deductions, FSA, state, and tax year are taken from your current inputs above.
				</span>

				<!-- Save / load comparisons -->
				<div class="saved-scenarios">
					<div class="save-scenario-row">
						<input
							type="text"
							class="scenario-name-input"
							placeholder="Name this comparison"
							bind:value={scenarioName}
							on:keydown={(e) => e.key === 'Enter' && saveScenario()}
						/>
						<button class="btn-secondary btn-sm" on:click={saveScenario}>Save comparison</button>
					</div>
					{#if savedScenarios.length > 0}
						<ul class="scenario-list">
							{#each savedScenarios as scenario (scenario.id)}
								<li class="scenario-list-item" class:active={loadedScenarioId === scenario.id}>
									<div class="scenario-list-info">
										<span class="scenario-list-name">{scenario.name}</span>
										<span class="scenario-list-meta">
											P1 {formatAsCurrency(scenario.salary1)} · {scenario.k401_1}% 401k
											{#if scenario.salary2}· P2 {formatAsCurrency(scenario.salary2)} · {scenario.k401_2}% 401k{/if}
										</span>
									</div>
									<div class="scenario-list-actions">
										<button class="btn-secondary btn-sm" on:click={() => loadScenario(scenario)}>Load</button>
										<button class="btn-icon-danger" title="Delete comparison" on:click={() => deleteScenario(scenario.id)}>✕</button>
									</div>
								</li>
							{/each}
						</ul>
					{/if}
				</div>

				<!-- Comparison summary -->
				<div class="compare-summary">
					<div class="compare-col">
						<span class="compare-heading">Current</span>
						<div class="compare-metric">
							<span class="compare-metric-label">Monthly</span>
							<span class="compare-metric-value">{formatAsCurrency(currentMonthlyTakeHome)}</span>
						</div>
						<div class="compare-metric">
							<span class="compare-metric-label">Biweekly</span>
							<span class="compare-metric-value">{formatAsCurrency(currentBiweeklyTakeHome)}</span>
						</div>
						<div class="compare-metric">
							<span class="compare-metric-label">Annual</span>
							<span class="compare-metric-value">{formatAsCurrency(currentAnnualTakeHome)}</span>
						</div>
					</div>
					<div class="compare-col scenario">
						<span class="compare-heading">Scenario</span>
						<div class="compare-metric">
							<span class="compare-metric-label">Monthly</span>
							<span class="compare-metric-value">{formatAsCurrency(scenarioMonthlyTakeHome)}</span>
						</div>
						<div class="compare-metric">
							<span class="compare-metric-label">Biweekly</span>
							<span class="compare-metric-value">{formatAsCurrency(scenarioBiweeklyTakeHome)}</span>
						</div>
						<div class="compare-metric">
							<span class="compare-metric-label">Annual</span>
							<span class="compare-metric-value">{formatAsCurrency(scenarioAnnualTakeHome)}</span>
						</div>
					</div>
					<div class="compare-col delta">
						<span class="compare-heading">Difference</span>
						<div class="compare-metric">
							<span class="compare-metric-label">Monthly</span>
							<span class="compare-metric-value" class:positive={scenarioMonthlyDelta >= 0} class:negative={scenarioMonthlyDelta < 0}>
								{scenarioMonthlyDelta >= 0 ? '+' : '−'}{formatAsCurrency(Math.abs(scenarioMonthlyDelta))}
							</span>
						</div>
						<div class="compare-metric">
							<span class="compare-metric-label">Biweekly</span>
							<span class="compare-metric-value" class:positive={scenarioBiweeklyDelta >= 0} class:negative={scenarioBiweeklyDelta < 0}>
								{scenarioBiweeklyDelta >= 0 ? '+' : '−'}{formatAsCurrency(Math.abs(scenarioBiweeklyDelta))}
							</span>
						</div>
						<div class="compare-metric">
							<span class="compare-metric-label">Annual</span>
							<span class="compare-metric-value" class:positive={scenarioAnnualDelta >= 0} class:negative={scenarioAnnualDelta < 0}>
								{scenarioAnnualDelta >= 0 ? '+' : '−'}{formatAsCurrency(Math.abs(scenarioAnnualDelta))}
							</span>
						</div>
					</div>
				</div>

				<!-- Scenario tax breakdown -->
				<div class="scenario-breakdown">
					<TaxesByState
						{currentState}
						{workState}
						currentYear={typedCurrentYear}
						bind:totalAnnualTakeHome={scenarioAnnualTakeHome}
						bind:totalMonthlyTakeHome={scenarioMonthlyTakeHome}
						bind:totalBiweeklyTakeHome={scenarioBiweeklyTakeHome}
						health_care_fsa_contributions={[
							health_care_fsa_contribution_1,
							health_care_fsa_contribution_2
						]}
						dependent_care_fsa_contributions={[
							dependent_care_fsa_contribution_1,
							dependent_care_fsa_contribution_2
						]}
						yearlySalaries={[scenarioSalary1, scenarioSalary2]}
						contributionPercentages={[
							scenario401kContributionPercentage1,
							scenario401kContributionPercentage2
						]}
						{interval}
						monthlyDentalContributions={[
							annual_dental_deduction_1 / 12,
							annual_dental_deduction_2 / 12
						]}
						monthlyMedicalContributions={[
							annual_medical_deduction_1 / 12,
							annual_medical_deduction_2 / 12
						]}
						monthlyVisionContributions={[
							annual_vision_deduction_1 / 12,
							annual_vision_deduction_2 / 12
						]}
					/>
				</div>
			</section>
		{/if}
	</main>
</div>

<style>
	/* ── Layout ── */
	.app {
		display: flex;
		width: 100%;
		min-height: 100vh;
		background: var(--color-bg);
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		font-size: 0.95rem;
		color: var(--color-text-primary);
		transition: background 0.2s, color 0.2s;
	}

	.main {
		flex: 1;
		min-width: 0;
		padding: 1.5rem 2rem 3rem;
		max-width: 1100px;
	}

	/* ── Page header ── */
	.page-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	}

	h1 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-text-primary);
		margin: 0;
		transition: color 0.2s;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.save-toast {
		font-size: 0.85rem;
		color: #2e8b57;
		font-weight: 500;
	}

	/* ── Cards ── */
	.card {
		background: var(--color-surface);
		border-radius: 12px;
		padding: 1.25rem;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
		margin-bottom: 1rem;
		transition: background 0.2s;
	}

	:global(.dark-mode) .card {
		box-shadow: 0 1px 4px rgba(0,0,0,0.3);
	}

	/* ── Settings card ── */
	.settings-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
		gap: 1rem;
		align-items: start;
	}

	/* ── Section header ── */
	.section-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text-primary);
		margin: 0;
		transition: color 0.2s;
	}

	/* ── Persons grid ── */
	.persons-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	h3 {
		font-size: 0.78rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-secondary);
		margin: 0 0 0.75rem;
		transition: color 0.2s;
	}

	/* ── Field groups ── */
	.field-group {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding-bottom: 0.75rem;
		margin-bottom: 0.75rem;
		border-bottom: 1px solid var(--color-border);
		transition: border-color 0.2s;
	}

	.field-group:last-child {
		border-bottom: none;
		margin-bottom: 0;
		padding-bottom: 0;
	}

	/* ── Field ── */
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.field-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-secondary);
		transition: color 0.2s;
	}

	.field-hint {
		font-size: 0.75rem;
		color: var(--color-text-tertiary);
		transition: color 0.2s;
	}

	.field input[type='number'],
	.field select {
		padding: 0.45rem 0.7rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		background: var(--color-surface);
		font-size: 0.95rem;
		color: var(--color-text-primary);
		width: 100%;
		box-sizing: border-box;
		transition: background 0.2s, color 0.2s, border-color 0.2s;
	}

	.field input[type='number']:focus,
	.field select:focus {
		outline: none;
		border-color: var(--color-accent-blue);
		box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-accent-blue) 15%, transparent);
	}

	.field-row {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.flex-input {
		flex: 1;
		padding: 0.45rem 0.7rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		font-size: 0.95rem;
		color: var(--color-text-primary);
		background: var(--color-surface);
		min-width: 0;
		transition: background 0.2s, color 0.2s, border-color 0.2s;
	}

	/* ── Radio group ── */
	.radio-group {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		align-items: center;
		padding-top: 0.1rem;
	}

	.radio-label {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.9rem;
		cursor: pointer;
		color: var(--color-text-primary);
		transition: color 0.2s;
	}

	/* ── Summary cards ── */
	.summary-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.summary-card {
		background: var(--color-surface);
		border-radius: 12px;
		padding: 1.1rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
		transition: background 0.2s;
	}

	:global(.dark-mode) .summary-card {
		box-shadow: 0 1px 4px rgba(0,0,0,0.3);
	}

	.summary-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-secondary);
		transition: color 0.2s;
	}

	.summary-amount {
		font-size: 1.45rem;
		font-weight: 700;
		color: var(--color-text-primary);
		transition: color 0.2s;
	}

	.summary-sub {
		font-size: 0.8rem;
		color: var(--color-text-tertiary);
		transition: color 0.2s;
	}

	/* ── Collapsible ── */
	.collapsible-header {
		background: none;
		border: none;
		padding: 0;
		width: 100%;
		cursor: pointer;
		margin-bottom: 0;
	}

	.collapsible-header:hover h2 { 
		color: var(--color-accent-blue);
		transition: color 0.2s;
	}

	.chevron {
		font-size: 1.2rem;
		color: var(--color-text-secondary);
		transition: transform 0.2s, color 0.2s;
		display: inline-block;
		transform: rotate(90deg);
	}
	
	.chevron.open {
		transform: rotate(-90deg);
	}

	/* ── Buttons ── */
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
		transition: background 0.15s, border-color 0.15s;
	}

	.btn-sm {
		padding: 0.3rem 0.6rem;
		font-size: 0.82rem;
	}

	/* ── Responsive ── */
	@media (max-width: 767px) {
		.app {
			flex-direction: column;
		}
		.main {
			padding: 1rem 1rem 5rem; /* bottom clearance for auth bar */
		}
		.persons-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
		.summary-row {
			grid-template-columns: 1fr;
			gap: 0.75rem;
		}
		.settings-grid {
			grid-template-columns: 1fr 1fr;
		}
		.page-header h1 {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 1024px) {
		.main {
			max-width: 100%;
		}
	}

	/* ── Compare / Scenario ── */
	.scenario-card {
		border: 1px solid var(--color-accent, #4f86c6);
	}

	.scenario-hint {
		margin: 0 0 1rem;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
	}

	.saved-scenarios {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px dashed var(--color-border);
	}

	.save-scenario-row {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.scenario-name-input {
		flex: 1;
		min-width: 180px;
		padding: 0.45rem 0.6rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		background: var(--color-bg);
		color: var(--color-text-primary);
		font-size: 0.9rem;
	}

	.scenario-list {
		list-style: none;
		margin: 0.85rem 0 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.scenario-list-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.55rem 0.75rem;
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 8px;
	}

	.scenario-list-item.active {
		border-color: #4f86c6;
		box-shadow: inset 0 0 0 1px #4f86c6;
	}

	.scenario-list-info {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		min-width: 0;
	}

	.scenario-list-name {
		font-weight: 600;
		font-size: 0.9rem;
		color: var(--color-text-primary);
	}

	.scenario-list-meta {
		font-size: 0.75rem;
		color: var(--color-text-tertiary);
	}

	.scenario-list-actions {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		flex-shrink: 0;
	}

	.btn-icon-danger {
		border: 1px solid var(--color-border);
		background: transparent;
		color: #d1495b;
		border-radius: 6px;
		width: 1.9rem;
		height: 1.9rem;
		cursor: pointer;
		font-size: 0.85rem;
		line-height: 1;
	}

	.btn-icon-danger:hover {
		background: rgba(209, 73, 91, 0.1);
	}

	.compare-summary {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem;
		margin: 1.25rem 0;
	}

	.compare-col {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 10px;
		padding: 0.85rem 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.compare-col.scenario {
		background: #eef4ff;
		border-color: #c3d8f7;
	}

	:global(.dark-mode) .compare-col.scenario {
		background: #1f3a5f;
		border-color: #2d5fa8;
	}

	.compare-heading {
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-secondary);
	}

	.compare-metric {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.compare-metric-label {
		font-size: 0.78rem;
		color: var(--color-text-tertiary);
	}

	.compare-metric-value {
		font-size: 1rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.compare-metric-value.positive {
		color: #2e9e5b;
	}

	.compare-metric-value.negative {
		color: #d1495b;
	}

	.scenario-breakdown {
		margin-top: 1.25rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--color-border);
	}

	@media (max-width: 600px) {
		.compare-summary {
			grid-template-columns: 1fr;
		}
	}
</style>
