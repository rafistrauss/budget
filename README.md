<div align="center">

# [budget](https://rafistrauss.github.io/budget/)

[![built with sveltekit](https://img.shields.io/badge/built%20with-sveltekit-ff3e00?logo=svelte&style=flat-square)](https://kit.svelte.dev/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=prettier)](https://github.com/prettier/prettier)
[![linter: eslint](https://img.shields.io/badge/linter-eslint-4B32C3.svg?style=flat-square&logo=eslint)](https://eslint.org/)

</div>

Deployments:

- Production: `https://rafistrauss.github.io/budget/`
- Pull request previews: `https://rafistrauss.github.io/budget/pr-preview/pr-<number>/`

The take-home calculator supports 2023–2027. The 2027 option is a planning estimate:
federal brackets and standard deductions use [Thomson Reuters projections](https://tax.thomsonreuters.com/news/key-2027-figures-calculated-by-thomson-reuters-checkpoint-based-on-inflation-data-now-available/)
(checked November 5, 2026), pending official IRS figures. Social Security uses the
[announced $192,300 wage base](https://www.ssa.gov/oact/COLA/cbb.html). State and city
rates and deductions carry forward the app's existing 2026 assumptions.

Tax bracket limits are cumulative taxable-income ceilings; the calculator applies
each rate only to the income between successive ceilings. This correction also
affects calculations for earlier years.
