import { describe, expect, it } from 'vitest';
import { annualSalaryForYear } from './salary.js';
import { calculateTax, taxRatesFilingJointly, standardDeductions } from './index.js';

describe('salary earned during the year', () => {
	it('uses the old salary for January–February and the raise from March', () => {
		expect(annualSalaryForYear(120000, 144000, 3)).toBe(140000);
	});
	it('preserves a full year of salary when no change is selected', () => {
		expect(annualSalaryForYear(120000, 0, 0)).toBe(120000);
	});
	it('handles January, December, and a salary decrease', () => {
		expect(annualSalaryForYear(120000, 144000, 1)).toBe(144000);
		expect(annualSalaryForYear(120000, 144000, 12)).toBe(122000);
		expect(annualSalaryForYear(120000, 96000, 7)).toBe(108000);
	});
	it('allows a zero salary before or after the change', () => {
		expect(annualSalaryForYear(0, 120000, 3)).toBe(100000);
		expect(annualSalaryForYear(120000, 0, 3)).toBe(20000);
	});
	it('taxes combined annual earnings rather than averaging taxes on salary rates', () => {
		const earned = annualSalaryForYear(120000, 144000, 3);
		expect(
			calculateTax(
				earned,
				taxRatesFilingJointly[2027].Federal,
				standardDeductions[2027].joint.federal
			)
		).toBe(12579);
	});
});
