<script>
	import { onMount } from 'svelte';

	import { formatAsCurrency, safelyGetLocalStorage, safelySetLocalStorage } from '$lib';
	import TaxesByState from '$lib/TaxesByState.svelte';

	let yearlySalary1 = 100_000;
	let bonusPercentage1 = 5;
	let _401kContributionPercentage1 = 5;
	let health_care_fsa_contribution = 1000;
	let dependent_care_fsa_contribution = 1_000;
	
	let yearlySalary2 = 50000;
	let bonusPercentage2 = 0;
	let _401kContributionPercentage2 = 0;
	let currentState = 'New Jersey';
	let currentYear = '2024';

	let interval = 'annual';

	/**
	 * @type {Expense[]}
	 */
	let expenses = []; // Array to store expenses, each expense will be an object { label: string, amount: number }

	let 
	/** @type {number} */
	yearlyBonus1,
	/** @type {number} */
	yearly401kContribution1,
	/** @type {number} */
	yearlyBonus2,
	/** @type {number} */
	yearly401kContribution2,
	/** @type {number} */
	taxableIncome;

	$: {
		yearlyBonus1 = yearlySalary1 * (bonusPercentage1 / 100);
		yearly401kContribution1 = yearlySalary1 * (_401kContributionPercentage1 / 100);
		yearlyBonus2 = yearlySalary2 * (bonusPercentage2 / 100);
		yearly401kContribution2 = yearlySalary2 * (_401kContributionPercentage2 / 100);
	}

	$: {
		safelySetLocalStorage('expenses', JSON.stringify(expenses));
	}

	// Function to load expenses from local storage on component mount
	onMount(() => {
		const storedExpenses = safelyGetLocalStorage('expenses');
		expenses = storedExpenses ? JSON.parse(storedExpenses) : [];
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
</script>

<main>
	<h1>Budget Calculator</h1>

<section>
	<h2>Salary input</h2>
	<div style="display: flex; gap: 1em;">
		<div>
			<h3>Person 1</h3>
			<label for="yearlySalary1">Yearly Salary:</label>
			<input type="number" id="yearlySalary1" bind:value={yearlySalary1} />
			<br />
		
			<label for="bonusPercentage1">Expected Bonus (%):</label>
			<input type="number" id="bonusPercentage1" bind:value={bonusPercentage1} />
		
			<br />
			<label for="contributionPercentage1">401k Contribution (%):</label>
			<input type="number" id="contributionPercentage1" bind:value={_401kContributionPercentage1} />
		</div>
		<div>
			<h3>Person 2</h3>
			<label for="yearlySalary2">Yearly Salary:</label>
			<input type="number" id="yearlySalary2" bind:value={yearlySalary2} />
			<br />
		
			<label for="bonusPercentage2">Expected Bonus (%):</label>
			<input type="number" id="bonusPercentage2" bind:value={bonusPercentage2} />
		
			<br />
			<label for="contributionPercentage2">401k Contribution (%):</label>
			<input type="number" id="contributionPercentage2" bind:value={_401kContributionPercentage2} />
		</div>
	</div>

</section>

	<label for="currentYear">Current Year:</label>
	<select id="currentYear" bind:value={currentYear}>
		<option value="">-- Select Year --</option>
		<option value="2023">2023</option>
		<option value="2024">2024</option>
	</select>

	<br />

	<label for="currentState">Current US State:</label>
	<select id="currentState" bind:value={currentState}>
		<option value="">-- Select State --</option>
		<option value="New York">New York (NY)</option>
		<option value="New Jersey">New Jersey (NJ)</option>
		<!-- Add options for other states if needed -->
	</select>

	<hr />

	<br /><b>Bonus:</b> {formatAsCurrency(yearlyBonus1)}
	<br /><b>401K Contribution:</b> {formatAsCurrency(yearly401kContribution1)}

<p>	Gross Monthly Income: {formatAsCurrency((yearlySalary1 / 12) + (yearlySalary2 / 12))}</p>
	<hr />

	<!-- Gross monthly income -->
	<br />

	<!-- Radio box to switch between annual, monthly, and fortnightly -->
	<label for="interval">Interval:</label>
	<label class="interval" for="annual">
		<input
			class="interval"
			type="radio"
			id="annual"
			name="interval"
			value="annual"
			bind:group={interval}
		/>
		Annual
	</label>
	<label class="interval" for="monthly">
		<input
			class="interval"
			type="radio"
			id="monthly"
			name="interval"
			value="monthly"
			bind:group={interval}
		/>
		Monthly
	</label>
	<label class="interval" for="fortnightly">
		<input
			class="interval"
			type="radio"
			id="fortnightly"
			name="interval"
			value="fortnightly"
			bind:group={interval}
		/>
		Fortnightly
	</label>

	<div id="taxDisplay">
		<div>
			<TaxesByState
				{currentState}
				{currentYear}
				{taxableIncome}
				{health_care_fsa_contribution}
				{dependent_care_fsa_contribution}
				yearlySalary={yearlySalary1 + yearlySalary2}
				contributionPercentage={_401kContributionPercentage1 + _401kContributionPercentage2}
				{interval}
			/>
		</div>
		<!-- <div>
			<TaxesByState
				currentState={'New Jersey'}
				{taxableIncome}
				bonusPercentage={bonusPercentage1 + bonusPercentage2}
				yearlySalary={yearlySalary1 + yearlySalary2}
				contributionPercentage={_401kContributionPercentage1 + _401kContributionPercentage2}
				{interval}
			/>
		</div> -->
	</div>
	<section>
		<h3>Expenses</h3>
		<button on:click={addExpense}>Add Expense</button>

		{#each expenses as expense, index}
			<div>
				<input type="text" bind:value={expense.label} placeholder="Expense Label" />
				<input type="number" bind:value={expense.amount} placeholder="Expense Amount" />
				<button on:click={() => removeExpense(index)}>Remove</button>
			</div>
		{/each}
	</section>
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.interval {
		cursor: pointer;
	}

	#taxDisplay {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
