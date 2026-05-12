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
		currentState,
		/** @type {string}*/
		cityTaxLocation
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

	$: rows = [
		{ label: 'Federal', amount: displayFederalTaxAmount, color: '#4f86c6' },
		{ label: currentState || 'State', amount: displayStateTaxAmount, color: '#e07b54' },
		...(cityTaxLocation ? [{ label: `${cityTaxLocation} City`, amount: displayCityTaxAmount, color: '#c95f8a' }] : []),
		{ label: 'Social Security', amount: displaySocialSecurityTaxAmount, color: '#5bb56a' },
		{ label: 'Medicare', amount: displayMedicareTaxAmount, color: '#8b6bbf' },
	];
</script>

<div class="tax-breakdown">
	<div class="tax-rows">
		{#each rows as row}
			{@const pct = displayTotalTaxAmount > 0 ? (row.amount / displayTotalTaxAmount) * 100 : 0}
			<div class="tax-row">
				<div class="tax-row-top">
					<span class="tax-dot" style="background:{row.color}"></span>
					<span class="tax-label">{row.label}</span>
					<span class="tax-amount">{formatAsCurrency(row.amount)}</span>
					<span class="tax-pct">{pct.toFixed(1)}%</span>
				</div>
				<div class="tax-bar-track">
					<div class="tax-bar-fill" style="width:{pct}%; background:{row.color};"></div>
				</div>
			</div>
		{/each}
	</div>

	<div class="tax-total-row">
		<span class="tax-total-label">Total Tax</span>
		<span class="tax-total-amount">{formatAsCurrency(displayTotalTaxAmount)}</span>
	</div>
</div>

<style>
	.tax-breakdown {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.interval-label {
		font-size: 0.72rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-tertiary);
		margin-bottom: 0.5rem;
		transition: color 0.2s;
	}

	.tax-rows {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.tax-row {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.tax-row-top {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.tax-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.tax-label {
		flex: 1;
		font-size: 0.88rem;
		color: var(--color-text-primary);
		transition: color 0.2s;
	}

	.tax-amount {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--color-text-primary);
		min-width: 80px;
		text-align: right;
		transition: color 0.2s;
	}

	.tax-pct {
		font-size: 0.78rem;
		color: var(--color-text-tertiary);
		min-width: 40px;
		text-align: right;
		transition: color 0.2s;
	}

	.tax-bar-track {
		height: 4px;
		background: var(--color-border);
		border-radius: 2px;
		overflow: hidden;
		margin-left: 17px;
		transition: background 0.2s;
	}

	.tax-bar-fill {
		height: 100%;
		border-radius: 2px;
		transition: width 0.3s ease;
	}

	.tax-total-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.75rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--color-border);
		transition: border-color 0.2s;
	}

	.tax-total-label {
		font-size: 0.88rem;
		font-weight: 700;
		color: var(--color-text-primary);
		transition: color 0.2s;
	}

	.tax-total-amount {
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--color-text-primary);
		transition: color 0.2s;
	}
</style>
