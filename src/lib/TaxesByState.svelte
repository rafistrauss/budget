<script>
	import {
		calculateTax,
		formatAsCurrency,
		medicareTaxRates,
		socialSecurityTaxRates,
		standardDeductionsFilingJointly,
		taxRatesFilingJointly,
		taxRatesFilingJointly_City
	} from '$lib';
	import TaxesDisplay from './TaxesDisplay.svelte';

	export let currentYear = '2023',
		currentState = 'New York',
		taxableIncome,
		/** @type {number} */
		yearlySalary,
		/**
		 * @type {number}
		 */
		contributionPercentage,
		/**
		 * @type {number}
		 */
		health_care_fsa_contribution,
		/**
		 * @type {number}
		 */
		dependent_care_fsa_contribution,
		interval,
		/** @type {number} */
		monthlyMedicalContribution = 0,
		/** @type {number} */
		monthlyDentalContribution = 0,
		/** @type {number} */
		monthlyVisionContribution = 0;

	let yearlyBonus;
	/**
	 * @type {number | bigint}
	 */
	let yearly401kContribution;

	/** @type {number}	 */
	let federalTaxAmount,
		/** @type {number}*/
		stateTaxAmount,
		/** @type {number}*/
		cityTaxAmount,
		/** @type {number}*/
		socialSecurityTaxAmount,
		/** @type {number} */
		medicareTaxAmount,
		/** @type {number}*/
		yearlyHealthcareFSAContribution,
		/** @type {number} */
		yearlyDependentCareFSAContribution;
	let monthlyTakeHome = 0;
	let biweeklyTakeHome = 0;
	let annualTakeHome = 0;
	/**
	 * @type {{ rates: import("$lib").TaxRate[]; }}
	 */
	let taxRate;

	$: {
		taxRate = taxRatesFilingJointly[currentYear][currentState];

		yearly401kContribution = yearlySalary * (contributionPercentage / 100);
		yearlyHealthcareFSAContribution = health_care_fsa_contribution;
		yearlyDependentCareFSAContribution = dependent_care_fsa_contribution;

		let yearlyMedicalContribution = monthlyMedicalContribution * 12;
		let yearlyDentalContribution = monthlyDentalContribution * 12;
		let yearlyVisionContribution = monthlyVisionContribution * 12;

		taxableIncome =
			yearlySalary -
			yearly401kContribution -
			yearlyHealthcareFSAContribution -
			yearlyDependentCareFSAContribution -
			yearlyMedicalContribution -
			yearlyDentalContribution -
			yearlyVisionContribution;

		stateTaxAmount = calculateTax(
			taxableIncome,
			taxRate,
			standardDeductionsFilingJointly[currentState].state
		);
		federalTaxAmount = calculateTax(
			taxableIncome,
			taxRatesFilingJointly[currentYear].Federal,
			standardDeductionsFilingJointly.federal
		);
		cityTaxAmount = calculateTax(
			taxableIncome,
			taxRatesFilingJointly_City[currentState],
			standardDeductionsFilingJointly[currentState].city
		);
		socialSecurityTaxAmount = calculateTax(taxableIncome, socialSecurityTaxRates[currentYear]);
		medicareTaxAmount = calculateTax(taxableIncome, medicareTaxRates);

		annualTakeHome =
			taxableIncome -
			stateTaxAmount -
			federalTaxAmount -
			cityTaxAmount -
			socialSecurityTaxAmount -
			medicareTaxAmount;

		monthlyTakeHome = annualTakeHome / 12;

		biweeklyTakeHome = annualTakeHome / 26;
	}
</script>

Taxable income: {formatAsCurrency(taxableIncome)}

<TaxesDisplay
	{federalTaxAmount}
	{stateTaxAmount}
	{cityTaxAmount}
	{socialSecurityTaxAmount}
	{medicareTaxAmount}
	{interval}
	{currentState}
/>

<p>
	Your monthly take-home pay: {formatAsCurrency(monthlyTakeHome)}
	<br />
	Your biweekly take-home pay: {formatAsCurrency(biweeklyTakeHome)}
	<br />
	Your annual take-home pay: {formatAsCurrency(annualTakeHome)}
</p>
