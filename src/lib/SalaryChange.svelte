<script>
	import { formatAsCurrency } from '$lib';
	import { annualSalaryForYear } from './salary.js';
	export let salary = 0;
	export let newSalary = 0;
	export let changeMonth = 0;
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
</script>

<label>
	<span>Salary change starts</span>
	<select bind:value={changeMonth}>
		<option value={0}>No change (same salary all year)</option>
		{#each months as month, index}
			<option value={index + 1}>{month} 1</option>
		{/each}
	</select>
</label>
{#if changeMonth > 0}
	<label>
		<span>New yearly salary</span>
		<input type="number" min="0" step="any" bind:value={newSalary} />
	</label>
	<p>
		Expected salary earned this year:
		<strong>{formatAsCurrency(annualSalaryForYear(salary, newSalary, changeMonth))}</strong>. The
		original salary applies before {months[changeMonth - 1]} 1. Monthly and biweekly results are averages
		across the year.
	</p>
{/if}

<style>
	label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	span {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-secondary);
	}
	input,
	select {
		padding: 0.45rem 0.7rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		background: var(--color-surface);
		font-size: 0.95rem;
		color: var(--color-text-primary);
		width: 100%;
		box-sizing: border-box;
	}
	input:focus,
	select:focus {
		outline: 2px solid var(--color-accent-blue);
		outline-offset: 2px;
	}
	p {
		margin: 0;
		font-size: 0.8rem;
		color: var(--color-text-secondary);
	}
</style>
