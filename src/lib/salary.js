/**
 * Annual earnings when a new annual salary starts on the first of a month.
 * A zero month keeps the original salary for the whole year.
 * @param {number} salary
 * @param {number} newSalary
 * @param {number} changeMonth
 */
export function annualSalaryForYear(salary, newSalary, changeMonth) {
	const original = Math.max(0, Number(salary) || 0);
	if (!Number.isInteger(changeMonth) || changeMonth < 1 || changeMonth > 12) return original;
	const updated = Math.max(0, Number(newSalary) || 0);
	return (original * (changeMonth - 1) + updated * (13 - changeMonth)) / 12;
}
