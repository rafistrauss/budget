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

	export let /** @type {'2023'|'2024'|'2025'} */
		currentYear = '2023',
		currentState = 'New York',
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
	/**
	 * @type {{ rates: import("$lib").TaxRate[]; }}
	 */
	let taxRate;

	$: {
		taxRate = taxRatesFilingJointly[currentYear][currentState];

		yearly401kContributions = yearlySalaries.map(
			(salary, index) => salary * (contributionPercentages[index] / 100)
		);
		yearlyHealthcareFSAContributions = yearlySalaries.map(
			(_, index) => health_care_fsa_contributions[index]
		);
		yearlyDependentCareFSAContributions = yearlySalaries.map(
			(_, index) => dependent_care_fsa_contributions[index]
		);

		let yearlyMedicalContributions = monthlyMedicalContributions.map(
			(contribution) => contribution * 12
		);
		let yearlyDentalContributions = monthlyDentalContributions.map(
			(contribution) => contribution * 12
		);
		let yearlyVisionContributions = monthlyVisionContributions.map(
			(contribution) => contribution * 12
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
			() => standardDeductions?.[currentYear]?.[filingStatus]?.[currentState]?.state ?? 0
		);
		federalStandardTaxDeductions = yearlySalaries.map(
			() => standardDeductions?.[currentYear]?.[filingStatus]?.federal ?? 0
		);
		cityStandardTaxDeductions = yearlySalaries.map(
			() => standardDeductions?.[currentYear]?.[filingStatus]?.[currentState]?.city ?? 0
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
				taxRatesFilingJointly_City[currentYear][currentState],
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

{#each yearlySalaries as _, index}
	<h3>Income {index + 1}</h3>
	Taxable income: {formatAsCurrency(taxableIncomes[index])}
{/each}

<TaxesDisplay
	federalTaxAmount={federalTaxAmounts[0] + federalTaxAmounts[1]}
	stateTaxAmount={stateTaxAmounts[0] + stateTaxAmounts[1]}
	cityTaxAmount={cityTaxAmounts[0] + cityTaxAmounts[1]}
	socialSecurityTaxAmount={socialSecurityTaxAmounts[0] + socialSecurityTaxAmounts[1]}
	medicareTaxAmount={medicareTaxAmounts[0] + medicareTaxAmounts[1]}
	{interval}
	{currentState}
/>

<p>
	Your monthly take-home pay: {formatAsCurrency(monthlyTakeHomes[0] + monthlyTakeHomes[1])}
	<br />
	Your biweekly take-home pay: {formatAsCurrency(biweeklyTakeHomes[0] + biweeklyTakeHomes[1])}
	<br />
	Your annual take-home pay: {formatAsCurrency(annualTakeHomes[0] + annualTakeHomes[1])}
</p>
