import dayjs from 'dayjs';

/**
 * Groups transactions by calendar day and calculates each day's net change and ending balance.
 *
 * @param {any[]} transactions
 */
export function groupTransactionsByDate(transactions) {
	/** @type {any[]} */
	const groups = [];

	transactions.forEach((transaction, index) => {
		const dateKey = dayjs(transaction.date).format('YYYY-MM-DD');
		let group = groups.at(-1);

		if (!group || group.dateKey !== dateKey) {
			group = {
				dateKey,
				date: transaction.date,
				dailyTotal: 0,
				endingBalance: 0,
				transactions: []
			};
			groups.push(group);
		}

		group.dailyTotal += transaction.type === 'credit' ? transaction.amount : -transaction.amount;
		group.endingBalance = transaction.runningTotal;
		group.transactions.push({ ...transaction, index });
	});

	return groups;
}

/**
 * Finds the first day whose ending checking balance is below the requested minimum.
 *
 * @param {any[]} transactions
 * @param {number} minimumBalance
 */
export function calculateRequiredTransfer(transactions, minimumBalance) {
	if (!Number.isFinite(minimumBalance) || minimumBalance < 0) return null;

	let runningBalance = 0;
	for (const group of groupTransactionsByDate(transactions)) {
		runningBalance += group.dailyTotal;
		if (runningBalance < minimumBalance) {
			return {
				amount: Math.round((minimumBalance - runningBalance) * 100) / 100,
				shortfallDate: group.dateKey,
				transferDate: dayjs(group.dateKey).subtract(1, 'day').format('YYYY-MM-DD'),
				projectedBalance: Math.round(runningBalance * 100) / 100
			};
		}
	}

	return null;
}
