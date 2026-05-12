<script>
	import {
		calculateTax,
		formatAsCurrency,
		medicareTaxRates,
		socialSecurityTaxRates,
		standardDeductions,
		taxRatesFilingJointly,
		taxRatesFilingJointly_City
	} from '$lib';
	import TaxesDisplay from './TaxesDisplay.svelte';

	export let /** @type {'2023'|'2024'|'2025'|'2026'} */
		currentYear = '2023',
		currentState = 'New York',
		workState = 'New Jersey',
		/** @type {number[]} */
		yearlySalaries = [],
		/** @type {number[]} */
		contributionPercentages = [],
		/** @type {number[]} */
		health_care_fsa_contributions = [],
		/** @type {number[]} */
		dependent_care_fsa_contributions = [],
		interval,
		/** @type {number[]} */
		monthlyMedicalContributions = [0, 0],
		/** @type {number[]} */
		monthlyDentalContributions = [0, 0],
		/** @type {number[]} */
		monthlyVisionContributions = [0, 0],
		/** @type {"single"|"joint"} */
		filingStatus = 'joint';

	let yearlyBonuses = [];
	/** @type {number[]} */
	let yearly401kContributions = [];
	/** @type {number[]} */
	let federalTaxAmounts = [];
	/** @type {number[]} */
	let stateTaxAmounts = [];
	/** @type {number[]} */
	let cityTaxAmounts = [];
	/** @type {number[]} */
	let socialSecurityTaxAmounts = [];
	/** @type {number[]} */
	let medicareTaxAmounts = [];
	/** @type {number[]} */
	let yearlyHealthcareFSAContributions = [];
	/** @type {number[]} */
	let yearlyDependentCareFSAContributions = [];
	/** @type {number[]} */
	let stateStandardTaxDeductions = [];
	/** @type {number[]} */
	let federalStandardTaxDeductions = [];
	/** @type {number[]} */
	let cityStandardTaxDeductions = [];
	/** @type {number[]} */
	let monthlyTakeHomes = [];
	/** @type {number[]} */
	let biweeklyTakeHomes = [];
	/** @type {number[]} */
	let annualTakeHomes = [];
	/** @type {number[]} */
	let taxableIncomes = [];
	let effectiveCityTaxLocation = '';
	let effectiveStateTaxLocation = '';
	/**
	 * @type {{ rates: import("$lib").TaxRate[]; }}
	 */
	let taxRate;

	$: {
		effectiveStateTaxLocation = workState || currentState;
		effectiveCityTaxLocation = currentState === 'New York' ? 'New York' : '';
		taxRate = taxRatesFilingJointly[currentYear][effectiveStateTaxLocation];

		yearly401kContributions = yearlySalaries.map(
			(salary, index) => (salary || 0) * ((contributionPercentages[index] || 0) / 100)
		);
		yearlyHealthcareFSAContributions = yearlySalaries.map(
			(_, index) => health_care_fsa_contributions[index] || 0
		);
		yearlyDependentCareFSAContributions = yearlySalaries.map(
			(_, index) => dependent_care_fsa_contributions[index] || 0
		);

		let yearlyMedicalContributions = monthlyMedicalContributions.map(
			(contribution) => (contribution || 0) * 12
		);
		let yearlyDentalContributions = monthlyDentalContributions.map(
			(contribution) => (contribution || 0) * 12
		);
		let yearlyVisionContributions = monthlyVisionContributions.map(
			(contribution) => (contribution || 0) * 12
		);
		taxableIncomes = yearlySalaries.map((salary, index) => {
			return (
				salary -
				yearly401kContributions[index] -
				yearlyHealthcareFSAContributions[index] -
				yearlyDependentCareFSAContributions[index] -
				yearlyMedicalContributions[index] -
				yearlyDentalContributions[index] -
				yearlyVisionContributions[index]
			);
		});

		stateStandardTaxDeductions = yearlySalaries.map(
			() => standardDeductions?.[currentYear]?.[filingStatus]?.[effectiveStateTaxLocation]?.state ?? 0
		);
		federalStandardTaxDeductions = yearlySalaries.map(
			() => standardDeductions?.[currentYear]?.[filingStatus]?.federal ?? 0
		);
		cityStandardTaxDeductions = yearlySalaries.map(
			() => standardDeductions?.[currentYear]?.[filingStatus]?.[effectiveCityTaxLocation]?.city ?? 0
		);

		stateTaxAmounts = taxableIncomes.map((income, index) =>
			calculateTax(income, taxRate, stateStandardTaxDeductions[index])
		);
		federalTaxAmounts = taxableIncomes.map((income, index) =>
			calculateTax(
				income,
				taxRatesFilingJointly[currentYear].Federal,
				federalStandardTaxDeductions[index]
			)
		);
		cityTaxAmounts = taxableIncomes.map((income, index) =>
			calculateTax(
				income,
				taxRatesFilingJointly_City[currentYear][effectiveCityTaxLocation],
				cityStandardTaxDeductions[index]
			)
		);
		socialSecurityTaxAmounts = taxableIncomes.map((income) =>
			calculateTax(income, socialSecurityTaxRates[currentYear])
		);
		medicareTaxAmounts = taxableIncomes.map((income) => calculateTax(income, medicareTaxRates));

		annualTakeHomes = taxableIncomes.map(
			(income, index) =>
				income -
				stateTaxAmounts[index] -
				federalTaxAmounts[index] -
				cityTaxAmounts[index] -
				socialSecurityTaxAmounts[index] -
				medicareTaxAmounts[index]
		);

		monthlyTakeHomes = annualTakeHomes.map((takeHome) => takeHome / 12);
		biweeklyTakeHomes = annualTakeHomes.map((takeHome) => takeHome / 26);
	}
</script>

<!-- Take-home summary cards -->
<div class="breakdown-header">
	<h2 class="breakdown-title">Tax Breakdown</h2>
	{#if effectiveCityTaxLocation}
		<span class="breakdown-meta">{effectiveStateTaxLocation} · City: {effectiveCityTaxLocation}</span>
	{:else}
		<span class="breakdown-meta">{effectiveStateTaxLocation}</span>
	{/if}
</div>

<div class="takehome-row">
	<div class="takehome-card primary">
		<span class="takehome-label">Monthly Take-Home</span>
		<span class="takehome-amount">{formatAsCurrency(monthlyTakeHomes[0] + monthlyTakeHomes[1])}</span>
	</div>
	<div class="takehome-card">
		<span class="takehome-label">Biweekly Take-Home</span>
		<span class="takehome-amount">{formatAsCurrency(biweeklyTakeHomes[0] + biweeklyTakeHomes[1])}</span>
	</div>
	<div class="takehome-card">
		<span class="takehome-label">Annual Take-Home</span>
		<span class="takehome-amount">{formatAsCurrency(annualTakeHomes[0] + annualTakeHomes[1])}</span>
	</div>
</div>

<!-- Per-person taxable income -->
{#if yearlySalaries.filter((s) => s > 0).length > 0}
	<div class="taxable-row">
		{#each yearlySalaries as salary, index}
			{#if salary > 0}
				<div class="taxable-item">
					<span class="taxable-label">Person {index + 1} Taxable Income</span>
					<span class="taxable-value">{formatAsCurrency(taxableIncomes[index])}</span>
				</div>
			{/if}
		{/each}
	</div>
{/if}

<!-- Tax breakdown -->
<TaxesDisplay
	federalTaxAmount={federalTaxAmounts[0] + federalTaxAmounts[1]}
	stateTaxAmount={stateTaxAmounts[0] + stateTaxAmounts[1]}
	cityTaxAmount={cityTaxAmounts[0] + cityTaxAmounts[1]}
	socialSecurityTaxAmount={socialSecurityTaxAmounts[0] + socialSecurityTaxAmounts[1]}
	medicareTaxAmount={medicareTaxAmounts[0] + medicareTaxAmounts[1]}

	{interval}
	currentState={effectiveStateTaxLocation}
	cityTaxLocation={effectiveCityTaxLocation}
/>

<style>
	.breakdown-header {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.breakdown-title {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1d23;
		margin: 0;
	}

	.breakdown-meta {
		font-size: 0.8rem;
		color: #7a8099;
	}

	.takehome-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem;
		margin-bottom: 1.25rem;
	}

	.takehome-card {
		background: #f4f6fa;
		border-radius: 10px;
		padding: 0.85rem 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.takehome-card.primary {
		background: #eef4ff;
		border: 1px solid #c3d8f7;
	}

	.takehome-label {
		font-size: 0.72rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #7a8099;
	}

	.takehome-amount {
		font-size: 1.3rem;
		font-weight: 700;
		color: #1a1d23;
	}

	.takehome-card.primary .takehome-amount {
		color: #2c5fa8;
	}

	.taxable-row {
		display: flex;
		gap: 1.5rem;
		margin-bottom: 1.25rem;
		padding: 0.75rem 1rem;
		background: #fafbfd;
		border-radius: 8px;
		border: 1px solid #e8eaf2;
	}

	.taxable-item {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.taxable-label {
		font-size: 0.72rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #9ba3b5;
	}

	.taxable-value {
		font-size: 0.95rem;
		font-weight: 600;
		color: #1a1d23;
	}

	@media (max-width: 600px) {
		.takehome-row {
			grid-template-columns: 1fr;
		}
		.taxable-row {
			flex-direction: column;
			gap: 0.75rem;
		}
	}
</style>
