<div align="center">

# [budget](https://rafistrauss.github.io/budget/)

[![built with sveltekit](https://img.shields.io/badge/built%20with-sveltekit-ff3e00?logo=svelte&style=flat-square)](https://kit.svelte.dev/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=prettier)](https://github.com/prettier/prettier)
[![linter: eslint](https://img.shields.io/badge/linter-eslint-4B32C3.svg?style=flat-square&logo=eslint)](https://eslint.org/)

</div>

Deployments:

- Production: `https://rafistrauss.github.io/budget/`
- Pull request previews: `https://rafistrauss.github.io/budget/pr-preview/pr-<number>/`

The take-home calculator supports 2023–2027. The 2027 federal brackets and standard
deductions match the [IRS announcement reported by CNBC](https://www.cnbc.com/2026/11/05/2027-federal-tax-brackets.html)
on November 5, 2026. Social Security uses the
[announced $192,300 wage base](https://www.ssa.gov/oact/COLA/cbb.html). State and city
rates and deductions carry forward the app's existing 2026 assumptions.

Tax bracket limits are cumulative taxable-income ceilings; the calculator applies
each rate only to the income between successive ceilings. This correction also
affects calculations for earlier years.

For a midyear raise, enter the original yearly salary, choose the month the change
starts, and enter the new yearly salary. A March 1 change uses two months at the
original rate and ten at the new rate. Taxes and percentage contributions use the
combined annual earnings; monthly and biweekly figures are averages for the year.
