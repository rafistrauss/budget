import { describe, expect, it } from 'vitest';
import { calculateRequiredTransfer, groupTransactionsByDate } from './checking.js';

describe('checking timeline calculations', () => {
	it('groups transactions by day with a daily total and ending balance', () => {
		const transactions = [
			{ date: '2026-09-07', type: 'credit', amount: 500, runningTotal: 500 },
			{ date: '2026-09-08', type: 'debit', amount: 400, runningTotal: 100 },
			{ date: '2026-09-08', type: 'debit', amount: 300, runningTotal: -200 }
		];

		expect(groupTransactionsByDate(transactions)).toMatchObject([
			{ dateKey: '2026-09-07', dailyTotal: 500, endingBalance: 500 },
			{ dateKey: '2026-09-08', dailyTotal: -700, endingBalance: -200 }
		]);
	});

	it('calculates a transfer one day before the first end-of-day shortfall', () => {
		const transactions = [
			{ date: '2026-09-07', type: 'credit', amount: 500 },
			{ date: '2026-09-08', type: 'debit', amount: 700 }
		];

		expect(calculateRequiredTransfer(transactions, 200)).toEqual({
			amount: 400,
			shortfallDate: '2026-09-08',
			transferDate: '2026-09-07',
			projectedBalance: -200
		});
	});

	it('does not suggest a transfer when every day meets the minimum', () => {
		const transactions = [{ date: '2026-09-08', type: 'credit', amount: 500 }];

		expect(calculateRequiredTransfer(transactions, 200)).toBeNull();
	});
});
