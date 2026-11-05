import { describe, expect, it } from 'vitest';
import {
	calculateTax,
	socialSecurityTaxRates,
	standardDeductions,
	taxRatesFilingSingle,
	taxRatesFilingJointly,
	taxRatesFilingSingle_City,
	taxRatesFilingJointly_City
} from './index.js';

describe('progressive tax calculation', () => {
	it('applies each rate only between successive bracket ceilings', () => {
		const brackets = {
			rates: [
				{ limit: 10000, rate: 0.1 },
				{ limit: 20000, rate: 0.2 },
				{ limit: Infinity, rate: 0.3 }
			]
		};
		expect(calculateTax(25000, brackets)).toBe(4500);
		expect(calculateTax(25000, brackets, 5000)).toBe(3000);
		expect(calculateTax(5000, brackets, 10000)).toBe(0);
	});
});

describe('projected 2027 federal taxes', () => {
	it.each([
		[12800, 1280],
		[52025, 5987],
		[109125, 18549],
		[208325, 42357],
		[264550, 60349],
		[661375, 199237.75],
		[761375, 236237.75]
	])('calculates single tax on %i of taxable income', (income, tax) => {
		expect(calculateTax(income, taxRatesFilingSingle[2027].Federal)).toBe(tax);
	});

	it.each([
		[25600, 2560],
		[104050, 11974],
		[218250, 37098],
		[416650, 84714],
		[529100, 120698],
		[793650, 213290.5],
		[893650, 250290.5]
	])('calculates joint tax on %i of taxable income', (income, tax) => {
		expect(calculateTax(income, taxRatesFilingJointly[2027].Federal)).toBe(tax);
	});

	it.each([
		['single', taxRatesFilingSingle, 16600],
		['joint', taxRatesFilingJointly, 33200]
	])('applies the %s standard deduction', (status, tables, deduction) => {
		expect(standardDeductions[2027][/** @type {'single'|'joint'} */ (status)].federal).toBe(
			deduction
		);
		expect(calculateTax(deduction, tables[2027].Federal, deduction)).toBe(0);
		expect(calculateTax(deduction + 10000, tables[2027].Federal, deduction)).toBe(1000);
	});

	it('caps Social Security at the announced 2027 wage base', () => {
		expect(calculateTax(100000, socialSecurityTaxRates[2027])).toBe(6200);
		expect(calculateTax(192300, socialSecurityTaxRates[2027])).toBe(11922.6);
		expect(calculateTax(300000, socialSecurityTaxRates[2027])).toBe(11922.6);
	});

	it('provides state and city assumptions for both filing statuses', () => {
		for (const tables of [taxRatesFilingSingle, taxRatesFilingJointly]) {
			for (const state of ['New York', 'New Jersey']) {
				expect(calculateTax(100000, tables[2027][state])).toBeGreaterThan(0);
				expect(tables[2027][state]).toEqual(tables[2026][state]);
			}
		}
		for (const tables of [taxRatesFilingSingle_City, taxRatesFilingJointly_City]) {
			expect(calculateTax(100000, tables[2027]['New York'])).toBeGreaterThan(0);
		}
	});
});
