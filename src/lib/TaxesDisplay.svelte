<script>
	import { formatAsCurrency } from '$lib';

	export let /** @type {number}*/
		stateTaxAmount,
		/** @type {number}*/
		federalTaxAmount,
		/** @type {number}*/
		cityTaxAmount,
		/** @type {number}*/
		socialSecurityTaxAmount,
		/** @type {number}*/
		medicareTaxAmount,
		/** @type {"annual"|"monthly"|"fortnightly"}*/
		interval,
		/** @type {string}*/
		currentState
		;

	let /** @type {number}*/
		displayStateTaxAmount = stateTaxAmount,
		/** @type {number}*/
		displayFederalTaxAmount = federalTaxAmount,
		/** @type {number}*/
		displayCityTaxAmount = cityTaxAmount,
		/** @type {number}*/
		displaySocialSecurityTaxAmount = socialSecurityTaxAmount,
		/** @type {number}*/
		displayMedicareTaxAmount = medicareTaxAmount,
		/** @type {number}*/
		displayTotalTaxAmount =
			stateTaxAmount +
			federalTaxAmount +
			cityTaxAmount +
			socialSecurityTaxAmount +
			medicareTaxAmount;

	$: {
		switch (interval) {
			case 'annual':
				displayStateTaxAmount = stateTaxAmount;
				displayFederalTaxAmount = federalTaxAmount;
				displayCityTaxAmount = cityTaxAmount;
				displaySocialSecurityTaxAmount = socialSecurityTaxAmount;
				displayMedicareTaxAmount = medicareTaxAmount;
				displayTotalTaxAmount =
					displayStateTaxAmount +
					displayFederalTaxAmount +
					displayCityTaxAmount +
					displaySocialSecurityTaxAmount +
					displayMedicareTaxAmount;
				break;
			case 'monthly':
				displayStateTaxAmount = stateTaxAmount / 12;
				displayFederalTaxAmount = federalTaxAmount / 12;
				displayCityTaxAmount = cityTaxAmount / 12;
				displaySocialSecurityTaxAmount = socialSecurityTaxAmount / 12;
				displayMedicareTaxAmount = medicareTaxAmount / 12;
				displayTotalTaxAmount =
					displayStateTaxAmount +
					displayFederalTaxAmount +
					displayCityTaxAmount +
					displaySocialSecurityTaxAmount +
					displayMedicareTaxAmount;
				break;
			case 'fortnightly':
				displayStateTaxAmount = stateTaxAmount / 26;
				displayFederalTaxAmount = federalTaxAmount / 26;
				displayCityTaxAmount = cityTaxAmount / 26;
				displaySocialSecurityTaxAmount = socialSecurityTaxAmount / 26;
				displayMedicareTaxAmount = medicareTaxAmount / 26;
				displayTotalTaxAmount =
					displayStateTaxAmount +
					displayFederalTaxAmount +
					displayCityTaxAmount +
					displaySocialSecurityTaxAmount +
					displayMedicareTaxAmount;
				break;

			default:
				break;
		}
	}
</script>

<h2 style="text-transform: capitalize;">{interval} Taxes - {currentState}</h2>

<table style="border-collapse: collapse;">
	<thead>
		<tr>
			<th>Tax</th>
			<th>Amount</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Federal</td>
			<td>{formatAsCurrency(displayFederalTaxAmount)}</td>
		</tr>
		<tr>
			<td>State</td>
			<td>{formatAsCurrency(displayStateTaxAmount)}</td>
		</tr>
		<tr>
			<td>City</td>
			<td>{formatAsCurrency(displayCityTaxAmount)}</td>
		</tr>
		<tr>
			<td>Social Security</td>
			<td>{formatAsCurrency(displaySocialSecurityTaxAmount)}</td>
		</tr>
		<tr>
			<td>Medicare</td>
			<td>{formatAsCurrency(displayMedicareTaxAmount)}</td>
		</tr>
		<tr>
			<td style="border-top: 1px solid black; font-weight: bold;">Total</td>
			<td style="border-top: 1px solid black; font-weight: bold;">{formatAsCurrency(displayTotalTaxAmount)}</td>
		</tr></tbody
	>
</table>
