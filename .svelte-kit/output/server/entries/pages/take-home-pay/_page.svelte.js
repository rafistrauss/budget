import { c as create_ssr_component, e as escape, f as each, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { f as formatAsCurrency, t as taxRatesFilingJointly, s as standardDeductions, c as calculateTax, b as taxRatesFilingJointly_City, e as socialSecurityTaxRates, m as medicareTaxRates, a as auth, d as db } from "../../../chunks/firebase.js";
import { N as Nav } from "../../../chunks/Nav.js";
const TaxesDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stateTaxAmount, federalTaxAmount, cityTaxAmount, socialSecurityTaxAmount, medicareTaxAmount, interval, currentState } = $$props;
  let displayStateTaxAmount = stateTaxAmount, displayFederalTaxAmount = federalTaxAmount, displayCityTaxAmount = cityTaxAmount, displaySocialSecurityTaxAmount = socialSecurityTaxAmount, displayMedicareTaxAmount = medicareTaxAmount, displayTotalTaxAmount = stateTaxAmount + federalTaxAmount + cityTaxAmount + socialSecurityTaxAmount + medicareTaxAmount;
  if ($$props.stateTaxAmount === void 0 && $$bindings.stateTaxAmount && stateTaxAmount !== void 0) $$bindings.stateTaxAmount(stateTaxAmount);
  if ($$props.federalTaxAmount === void 0 && $$bindings.federalTaxAmount && federalTaxAmount !== void 0) $$bindings.federalTaxAmount(federalTaxAmount);
  if ($$props.cityTaxAmount === void 0 && $$bindings.cityTaxAmount && cityTaxAmount !== void 0) $$bindings.cityTaxAmount(cityTaxAmount);
  if ($$props.socialSecurityTaxAmount === void 0 && $$bindings.socialSecurityTaxAmount && socialSecurityTaxAmount !== void 0) $$bindings.socialSecurityTaxAmount(socialSecurityTaxAmount);
  if ($$props.medicareTaxAmount === void 0 && $$bindings.medicareTaxAmount && medicareTaxAmount !== void 0) $$bindings.medicareTaxAmount(medicareTaxAmount);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0) $$bindings.interval(interval);
  if ($$props.currentState === void 0 && $$bindings.currentState && currentState !== void 0) $$bindings.currentState(currentState);
  {
    {
      switch (interval) {
        case "annual":
          displayStateTaxAmount = stateTaxAmount;
          displayFederalTaxAmount = federalTaxAmount;
          displayCityTaxAmount = cityTaxAmount;
          displaySocialSecurityTaxAmount = socialSecurityTaxAmount;
          displayMedicareTaxAmount = medicareTaxAmount;
          displayTotalTaxAmount = displayStateTaxAmount + displayFederalTaxAmount + displayCityTaxAmount + displaySocialSecurityTaxAmount + displayMedicareTaxAmount;
          break;
        case "monthly":
          displayStateTaxAmount = stateTaxAmount / 12;
          displayFederalTaxAmount = federalTaxAmount / 12;
          displayCityTaxAmount = cityTaxAmount / 12;
          displaySocialSecurityTaxAmount = socialSecurityTaxAmount / 12;
          displayMedicareTaxAmount = medicareTaxAmount / 12;
          displayTotalTaxAmount = displayStateTaxAmount + displayFederalTaxAmount + displayCityTaxAmount + displaySocialSecurityTaxAmount + displayMedicareTaxAmount;
          break;
        case "fortnightly":
          displayStateTaxAmount = stateTaxAmount / 26;
          displayFederalTaxAmount = federalTaxAmount / 26;
          displayCityTaxAmount = cityTaxAmount / 26;
          displaySocialSecurityTaxAmount = socialSecurityTaxAmount / 26;
          displayMedicareTaxAmount = medicareTaxAmount / 26;
          displayTotalTaxAmount = displayStateTaxAmount + displayFederalTaxAmount + displayCityTaxAmount + displaySocialSecurityTaxAmount + displayMedicareTaxAmount;
          break;
      }
    }
  }
  return `<h2 style="text-transform: capitalize;">${escape(interval)} Taxes - ${escape(currentState)}</h2> <table style="border-collapse: collapse;"><thead data-svelte-h="svelte-91siwn"><tr><th>Tax</th> <th>Amount</th></tr></thead> <tbody><tr><td data-svelte-h="svelte-6waqll">Federal</td> <td>${escape(formatAsCurrency(displayFederalTaxAmount))}</td></tr> <tr><td data-svelte-h="svelte-qr71y5">State</td> <td>${escape(formatAsCurrency(displayStateTaxAmount))}</td></tr> <tr><td data-svelte-h="svelte-1yvq8zx">City</td> <td>${escape(formatAsCurrency(displayCityTaxAmount))}</td></tr> <tr><td data-svelte-h="svelte-1mp8mpj">Social Security</td> <td>${escape(formatAsCurrency(displaySocialSecurityTaxAmount))}</td></tr> <tr><td data-svelte-h="svelte-b4njfe">Medicare</td> <td>${escape(formatAsCurrency(displayMedicareTaxAmount))}</td></tr> <tr><td style="border-top: 1px solid black; font-weight: bold;" data-svelte-h="svelte-dm4jeo">Total</td> <td style="border-top: 1px solid black; font-weight: bold;">${escape(formatAsCurrency(displayTotalTaxAmount))}</td></tr></tbody></table>`;
});
const TaxesByState = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentYear = "2023", currentState = "New York", yearlySalaries = [], contributionPercentages = [], health_care_fsa_contributions = [], dependent_care_fsa_contributions = [], interval, monthlyMedicalContributions = [0, 0], monthlyDentalContributions = [0, 0], monthlyVisionContributions = [0, 0], filingStatus = "joint" } = $$props;
  let yearly401kContributions = [];
  let federalTaxAmounts = [];
  let stateTaxAmounts = [];
  let cityTaxAmounts = [];
  let socialSecurityTaxAmounts = [];
  let medicareTaxAmounts = [];
  let yearlyHealthcareFSAContributions = [];
  let yearlyDependentCareFSAContributions = [];
  let stateStandardTaxDeductions = [];
  let federalStandardTaxDeductions = [];
  let cityStandardTaxDeductions = [];
  let monthlyTakeHomes = [];
  let biweeklyTakeHomes = [];
  let annualTakeHomes = [];
  let taxableIncomes = [];
  let taxRate;
  if ($$props.currentYear === void 0 && $$bindings.currentYear && currentYear !== void 0) $$bindings.currentYear(currentYear);
  if ($$props.currentState === void 0 && $$bindings.currentState && currentState !== void 0) $$bindings.currentState(currentState);
  if ($$props.yearlySalaries === void 0 && $$bindings.yearlySalaries && yearlySalaries !== void 0) $$bindings.yearlySalaries(yearlySalaries);
  if ($$props.contributionPercentages === void 0 && $$bindings.contributionPercentages && contributionPercentages !== void 0) $$bindings.contributionPercentages(contributionPercentages);
  if ($$props.health_care_fsa_contributions === void 0 && $$bindings.health_care_fsa_contributions && health_care_fsa_contributions !== void 0) $$bindings.health_care_fsa_contributions(health_care_fsa_contributions);
  if ($$props.dependent_care_fsa_contributions === void 0 && $$bindings.dependent_care_fsa_contributions && dependent_care_fsa_contributions !== void 0) $$bindings.dependent_care_fsa_contributions(dependent_care_fsa_contributions);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0) $$bindings.interval(interval);
  if ($$props.monthlyMedicalContributions === void 0 && $$bindings.monthlyMedicalContributions && monthlyMedicalContributions !== void 0) $$bindings.monthlyMedicalContributions(monthlyMedicalContributions);
  if ($$props.monthlyDentalContributions === void 0 && $$bindings.monthlyDentalContributions && monthlyDentalContributions !== void 0) $$bindings.monthlyDentalContributions(monthlyDentalContributions);
  if ($$props.monthlyVisionContributions === void 0 && $$bindings.monthlyVisionContributions && monthlyVisionContributions !== void 0) $$bindings.monthlyVisionContributions(monthlyVisionContributions);
  if ($$props.filingStatus === void 0 && $$bindings.filingStatus && filingStatus !== void 0) $$bindings.filingStatus(filingStatus);
  {
    {
      taxRate = taxRatesFilingJointly[currentYear][currentState];
      yearly401kContributions = yearlySalaries.map((salary, index) => (salary || 0) * ((contributionPercentages[index] || 0) / 100));
      yearlyHealthcareFSAContributions = yearlySalaries.map((_, index) => health_care_fsa_contributions[index] || 0);
      yearlyDependentCareFSAContributions = yearlySalaries.map((_, index) => dependent_care_fsa_contributions[index] || 0);
      let yearlyMedicalContributions = monthlyMedicalContributions.map((contribution) => (contribution || 0) * 12);
      let yearlyDentalContributions = monthlyDentalContributions.map((contribution) => (contribution || 0) * 12);
      let yearlyVisionContributions = monthlyVisionContributions.map((contribution) => (contribution || 0) * 12);
      taxableIncomes = yearlySalaries.map((salary, index) => {
        return salary - yearly401kContributions[index] - yearlyHealthcareFSAContributions[index] - yearlyDependentCareFSAContributions[index] - yearlyMedicalContributions[index] - yearlyDentalContributions[index] - yearlyVisionContributions[index];
      });
      stateStandardTaxDeductions = yearlySalaries.map(() => standardDeductions?.[currentYear]?.[filingStatus]?.[currentState]?.state ?? 0);
      federalStandardTaxDeductions = yearlySalaries.map(() => standardDeductions?.[currentYear]?.[filingStatus]?.federal ?? 0);
      cityStandardTaxDeductions = yearlySalaries.map(() => standardDeductions?.[currentYear]?.[filingStatus]?.[currentState]?.city ?? 0);
      stateTaxAmounts = taxableIncomes.map((income, index) => calculateTax(income, taxRate, stateStandardTaxDeductions[index]));
      federalTaxAmounts = taxableIncomes.map((income, index) => calculateTax(income, taxRatesFilingJointly[currentYear].Federal, federalStandardTaxDeductions[index]));
      cityTaxAmounts = taxableIncomes.map((income, index) => calculateTax(income, taxRatesFilingJointly_City[currentYear][currentState], cityStandardTaxDeductions[index]));
      socialSecurityTaxAmounts = taxableIncomes.map((income) => calculateTax(income, socialSecurityTaxRates[currentYear]));
      medicareTaxAmounts = taxableIncomes.map((income) => calculateTax(income, medicareTaxRates));
      annualTakeHomes = taxableIncomes.map((income, index) => income - stateTaxAmounts[index] - federalTaxAmounts[index] - cityTaxAmounts[index] - socialSecurityTaxAmounts[index] - medicareTaxAmounts[index]);
      monthlyTakeHomes = annualTakeHomes.map((takeHome) => takeHome / 12);
      biweeklyTakeHomes = annualTakeHomes.map((takeHome) => takeHome / 26);
    }
  }
  return `${each(yearlySalaries, (_, index) => {
    return `<h3>Income ${escape(index + 1)}</h3>
	Taxable income: ${escape(formatAsCurrency(taxableIncomes[index]))}`;
  })} ${validate_component(TaxesDisplay, "TaxesDisplay").$$render(
    $$result,
    {
      federalTaxAmount: federalTaxAmounts[0] + federalTaxAmounts[1],
      stateTaxAmount: stateTaxAmounts[0] + stateTaxAmounts[1],
      cityTaxAmount: cityTaxAmounts[0] + cityTaxAmounts[1],
      socialSecurityTaxAmount: socialSecurityTaxAmounts[0] + socialSecurityTaxAmounts[1],
      medicareTaxAmount: medicareTaxAmounts[0] + medicareTaxAmounts[1],
      interval,
      currentState
    },
    {},
    {}
  )} <p>Your monthly take-home pay: ${escape(formatAsCurrency(monthlyTakeHomes[0] + monthlyTakeHomes[1]))} <br>
	Your biweekly take-home pay: ${escape(formatAsCurrency(biweeklyTakeHomes[0] + biweeklyTakeHomes[1]))} <br>
	Your annual take-home pay: ${escape(formatAsCurrency(annualTakeHomes[0] + annualTakeHomes[1]))}</p>`;
});
const css = {
  code: ".app.svelte-1d3gro8{display:flex;min-height:100vh;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif}main.svelte-1d3gro8{flex:1;max-width:800px;padding:1.5rem 2rem;min-width:0}.interval.svelte-1d3gro8{cursor:pointer}#taxDisplay.svelte-1d3gro8{display:grid;grid-template-columns:1fr 1fr}.splitDisplay.svelte-1d3gro8{display:flex;gap:1em;flex-direction:column}@media(min-width: 768px){.splitDisplay.svelte-1d3gro8{flex-direction:row}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { base } from '$app/paths';\\n\\timport { onMount } from 'svelte';\\n\\n\\timport { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';\\n\\timport { doc, getDoc } from 'firebase/firestore';\\n\\n\\timport { formatAsCurrency, safelyGetLocalStorage, safelySetLocalStorage } from '$lib';\\n\\timport TaxesByState from '$lib/TaxesByState.svelte';\\n\\timport Nav from '$lib/Nav.svelte';\\n\\timport { auth, db } from '$lib/firebase.js';\\n\\n\\tlet currentUser = auth.currentUser;\\n\\n\\tlet email, password;\\n\\n\\tlet yearlySalary1 = 100000;\\n\\tlet bonusPercentage1 = 5;\\n\\tlet _401kContributionPercentage1 = 3;\\n\\tlet health_care_fsa_contribution_1 = 100;\\n\\tlet dependent_care_fsa_contribution_1 = 100;\\n\\tlet annual_medical_deduction_1 = 1234;\\n\\tlet annual_dental_deduction_1 = 123;\\n\\tlet annual_vision_deduction_1 = 12;\\n\\t\\n\\tlet yearlySalary2 = 0;\\n\\tlet bonusPercentage2 = 0;\\n\\tlet _401kContributionPercentage2 = 0;\\n\\tlet health_care_fsa_contribution_2 = 0;\\n\\tlet dependent_care_fsa_contribution_2 = 0;\\n\\tlet annual_medical_deduction_2 = 0;\\n\\tlet annual_dental_deduction_2 = 0;\\n\\tlet annual_vision_deduction_2 = 0;\\n\\n\\t\\n\\tlet currentState = 'New Jersey';\\n\\tlet currentYear = '2024';\\n\\n\\tlet interval = 'annual';\\n\\n\\t/**\\n\\t * @type {Expense[]}\\n\\t */\\n\\tlet expenses = []; // Array to store expenses, each expense will be an object { label: string, amount: number }\\n\\n\\tlet hasLoaded = false;\\n\\n\\tlet /** @type {number} */\\n\\t\\tyearlyBonus1,\\n\\t\\t/** @type {number} */\\n\\t\\tyearly401kContribution1,\\n\\t\\t/** @type {number} */\\n\\t\\tyearlyBonus2,\\n\\t\\t/** @type {number} */\\n\\t\\tyearly401kContribution2;\\n\\n\\t$: {\\n\\t\\tyearlyBonus1 = (yearlySalary1 || 0) * ((bonusPercentage1 || 0) / 100);\\n\\t\\tyearly401kContribution1 = (yearlySalary1 || 0) * ((_401kContributionPercentage1 || 0) / 100);\\n\\t\\tyearlyBonus2 = (yearlySalary2 || 0) * ((bonusPercentage2 || 0) / 100);\\n\\t\\tyearly401kContribution2 = (yearlySalary2 || 0) * ((_401kContributionPercentage2 || 0) / 100);\\n\\t}\\n\\n\\t$: if (hasLoaded) {\\n\\t\\tsafelySetLocalStorage('expenses', JSON.stringify(expenses));\\n\\t}\\n\\n\\t// Function to load expenses from local storage on component mount\\n\\tonMount(() => {\\n\\t\\tconst storedExpenses = safelyGetLocalStorage('expenses');\\n\\t\\texpenses = storedExpenses ? JSON.parse(storedExpenses) : [];\\n\\t\\thasLoaded = true;\\n\\t});\\n\\n\\t// Function to add a new expense\\n\\tfunction addExpense() {\\n\\t\\texpenses = [...expenses, { label: '', amount: 0 }];\\n\\t}\\n\\n\\t// Function to remove an expense\\n\\t/**\\n\\t * @param {number} index\\n\\t */\\n\\tfunction removeExpense(index) {\\n\\t\\texpenses = expenses.filter((_, i) => i !== index);\\n\\t}\\n\\n\\tfunction signIn() {\\n\\t\\tif (!email || !password) return console.log('Email and password are required');\\n\\t\\tsignInWithEmailAndPassword(auth, email, password)\\n\\t\\t\\t.then((userCredential) => {\\n\\t\\t\\t\\t// Signed in\\n\\t\\t\\t\\tconst user = userCredential.user;\\n\\t\\t\\t\\tconsole.log(user);\\n\\t\\t\\t\\t// ...\\n\\t\\t\\t})\\n\\t\\t\\t.catch((err) => {\\n\\t\\t\\t\\tconsole.log(err);\\n\\t\\t\\t});\\n\\t}\\n\\n\\tonAuthStateChanged(auth, async (user) => {\\n\\t\\tif (user) {\\n\\t\\t\\tcurrentUser = user;\\n\\t\\t\\t// console.log(user.uid);\\n\\t\\t\\tconst snapshot = await getDoc(doc(db, 'users', user.uid));\\n\\t\\t\\tconst data = snapshot.data();\\n\\t\\t\\tif (data) {\\n\\t\\t\\t\\t_401kContributionPercentage1 = data['401k_contribution_1'] ?? _401kContributionPercentage1;\\n\\t\\t\\t\\thealth_care_fsa_contribution_1 = data['healthcare_fsa_contribution_1'] ?? health_care_fsa_contribution_1;\\n\\t\\t\\t\\tdependent_care_fsa_contribution_1 = data['dependent_care_fsa_contribution_1'] ?? dependent_care_fsa_contribution_1;\\n\\t\\t\\t\\tannual_medical_deduction_1 = data['annual_medical_deduction_1'] ?? annual_medical_deduction_1;\\n\\t\\t\\t\\tannual_dental_deduction_1 = data['annual_dental_deduction_1'] ?? annual_dental_deduction_1;\\n\\t\\t\\t\\tannual_vision_deduction_1 = data['annual_vision_deduction_1'] ?? annual_vision_deduction_1;\\n\\t\\t\\t\\tyearlySalary1 = data['yearly_salary_1'] ?? yearlySalary1;\\n\\t\\t\\t\\tbonusPercentage1 = data['expected_bonus_1'] ?? bonusPercentage1;\\n\\t\\t\\t}\\n\\t\\t\\tconsole.log(snapshot.data());\\n\\t\\t} else {\\n\\t\\t\\tcurrentUser = null;\\n\\t\\t}\\n\\t});\\n<\/script>\\n\\n<div class=\\"app\\">\\n\\t<Nav />\\n\\t<main>\\n\\t<h1>Take-Home Pay Calculator</h1>\\n\\n\\t<section>\\n\\t\\t{#if currentUser}\\n\\t\\t\\t<!-- content here -->\\n\\t\\t\\tSigned in as {currentUser.email} <button on:click={() => auth.signOut()}>Sign out</button>\\n\\t\\t{:else}\\n\\t\\t\\t<h2>Sign In</h2>\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<form on:submit|preventDefault={signIn}>\\n\\t\\t\\t\\t\\t<label for=\\"email\\">Email:</label>\\n\\t\\t\\t\\t\\t<input type=\\"email\\" id=\\"email\\" bind:value={email} autocomplete=\\"email\\" />\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"password\\">Password:</label>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\ttype=\\"password\\"\\n\\t\\t\\t\\t\\t\\tid=\\"password\\"\\n\\t\\t\\t\\t\\t\\tbind:value={password}\\n\\t\\t\\t\\t\\t\\tautocomplete=\\"current-password\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<button type=\\"submit\\">Sign In</button>\\n\\t\\t\\t\\t</form>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\n\\t\\t<section>\\n\\t\\t\\t<h2>Salary input</h2>\\n\\t\\t\\t<div class=\\"splitDisplay\\">\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t<h3>Person 1</h3>\\n\\t\\t\\t\\t\\t<label for=\\"yearlySalary1\\">Yearly Salary:</label>\\n\\t\\t\\t\\t\\t<input type=\\"number\\" id=\\"yearlySalary1\\" bind:value={yearlySalary1} />\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"salaryIncreasePercentage1\\">Increase Salary by (%):</label>\\n\\t\\t\\t\\t\\t<input type=\\"number\\" id=\\"salaryIncreasePercentage1\\" />\\n\\t\\t\\t\\t\\t<button on:click={() => yearlySalary1 += yearlySalary1 * (document.getElementById('salaryIncreasePercentage1').value / 100)}>\\n\\t\\t\\t\\t\\t\\tIncrease Salary\\n\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t<br />\\n\\n\\t\\t\\t\\t\\t<label for=\\"bonusPercentage1\\">Expected Bonus (%):</label>\\n\\t\\t\\t\\t\\t<input type=\\"number\\" id=\\"bonusPercentage1\\" bind:value={bonusPercentage1} />\\n\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"contributionPercentage1\\">401k Contribution (%):</label>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\ttype=\\"number\\"\\n\\t\\t\\t\\t\\t\\tid=\\"contributionPercentage1\\"\\n\\t\\t\\t\\t\\t\\tbind:value={_401kContributionPercentage1}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"healthCareContribution1\\">Healthcare FSA Contribution ($):</label>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\ttype=\\"number\\"\\n\\t\\t\\t\\t\\t\\tid=\\"healthCareContribution1\\"\\n\\t\\t\\t\\t\\t\\tbind:value={health_care_fsa_contribution_1}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"dependentCareContribution1\\">Dependent Care FSA Contribution ($):</label>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\ttype=\\"number\\"\\n\\t\\t\\t\\t\\t\\tid=\\"dependentCareContribution1\\"\\n\\t\\t\\t\\t\\t\\tbind:value={dependent_care_fsa_contribution_1}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"medicalDeduction1\\">Medical Deduction ($):</label>\\n\\t\\t\\t\\t\\t<input type=\\"number\\" id=\\"medicalDeduction1\\" bind:value={annual_medical_deduction_1} />\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"dentalDeduction1\\">Dental Deduction ($):</label>\\n\\t\\t\\t\\t\\t<input type=\\"number\\" id=\\"dentalDeduction1\\" bind:value={annual_dental_deduction_1} />\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"visionDeduction1\\">Vision Deduction ($):</label>\\n\\t\\t\\t\\t\\t<input type=\\"number\\" id=\\"visionDeduction1\\" bind:value={annual_vision_deduction_1} />\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t<h3>Person 2</h3>\\n\\t\\t\\t\\t\\t<label for=\\"yearlySalary2\\">Yearly Salary:</label>\\n\\t\\t\\t\\t\\t<input type=\\"number\\" id=\\"yearlySalary2\\" bind:value={yearlySalary2} />\\n\\t\\t\\t\\t\\t<br />\\n\\n\\t\\t\\t\\t\\t<label for=\\"bonusPercentage2\\">Expected Bonus (%):</label>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\ttype=\\"number\\"\\n\\t\\t\\t\\t\\t\\tid=\\"bonusPercentage2\\"\\n\\t\\t\\t\\t\\t\\tbind:value={bonusPercentage2}\\n\\t\\t\\t\\t\\t/>\\n\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"contributionPercentage2\\">401k Contribution (%):</label>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\ttype=\\"number\\"\\n\\t\\t\\t\\t\\t\\tid=\\"contributionPercentage2\\"\\n\\t\\t\\t\\t\\t\\tbind:value={_401kContributionPercentage2}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"healthCareContribution2\\">Healthcare FSA Contribution ($):</label>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\ttype=\\"number\\"\\n\\t\\t\\t\\t\\t\\tid=\\"healthCareContribution2\\"\\n\\t\\t\\t\\t\\t\\tbind:value={health_care_fsa_contribution_2}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"dependentCareContribution2\\">Dependent Care FSA Contribution ($):</label>\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\ttype=\\"number\\"\\n\\t\\t\\t\\t\\t\\tid=\\"dependentCareContribution2\\"\\n\\t\\t\\t\\t\\t\\tbind:value={dependent_care_fsa_contribution_2}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"medicalDeduction2\\">Medical Deduction ($):</label>\\n\\t\\t\\t\\t\\t<input type=\\"number\\" id=\\"medicalDeduction2\\" bind:value={annual_medical_deduction_2} />\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"dentalDeduction2\\">Dental Deduction ($):</label>\\n\\t\\t\\t\\t\\t<input type=\\"number\\" id=\\"dentalDeduction2\\" bind:value={annual_dental_deduction_2} />\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t\\t<label for=\\"visionDeduction2\\">Vision Deduction ($):</label>\\n\\t\\t\\t\\t\\t<input type=\\"number\\" id=\\"visionDeduction2\\" bind:value={annual_vision_deduction_2} />\\n\\t\\t\\t\\t\\t<br />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</section>\\n\\n\\t\\t<p>\\n\\t\\t\\t<label for=\\"currentYear\\">Current Year:</label>\\n\\t\\t\\t<select id=\\"currentYear\\" bind:value={currentYear}>\\n\\t\\t\\t\\t<option value=\\"\\">-- Select Year --</option>\\n\\t\\t\\t\\t<option value=\\"2023\\">2023</option>\\n\\t\\t\\t\\t<option value=\\"2024\\">2024</option>\\n\\t\\t\\t\\t<option value=\\"2025\\">2025</option>\\n\\t\\t\\t</select>\\n\\n\\t\\t\\t<br />\\n\\n\\t\\t\\t<label for=\\"currentState\\">Current US State:</label>\\n\\t\\t\\t<select id=\\"currentState\\" bind:value={currentState}>\\n\\t\\t\\t\\t<option value=\\"\\">-- Select State --</option>\\n\\t\\t\\t\\t<option value=\\"New York\\">New York (NY)</option>\\n\\t\\t\\t\\t<option value=\\"New Jersey\\">New Jersey (NJ)</option>\\n\\t\\t\\t\\t<!-- Add options for other states if needed -->\\n\\t\\t\\t</select>\\n\\t\\t</p>\\n\\n\\t\\t<hr />\\n\\n\\t\\t<div class=\\"splitDisplay\\">\\n\\t\\t\\t<br /><b>Bonus:</b>\\n\\t\\t\\t{formatAsCurrency(yearlyBonus1)}\\n\\t\\t\\t<br /><b>401K Contribution:</b>\\n\\t\\t\\t{formatAsCurrency(yearly401kContribution1)}\\n\\t\\n\\t\\t\\t<p>Gross Monthly Income: {formatAsCurrency(yearlySalary1 / 12 + yearlySalary2 / 12)}</p>\\n\\t\\t</div>\\n\\t\\t<hr />\\n\\n\\t\\t<!-- Gross monthly income -->\\n\\t\\t<br />\\n\\n\\t\\t<!-- Radio box to switch between annual, monthly, and fortnightly -->\\n\\t\\t<label for=\\"interval\\">Interval:</label>\\n\\t\\t<label class=\\"interval\\" for=\\"annual\\">\\n\\t\\t\\t<input\\n\\t\\t\\t\\tclass=\\"interval\\"\\n\\t\\t\\t\\ttype=\\"radio\\"\\n\\t\\t\\t\\tid=\\"annual\\"\\n\\t\\t\\t\\tname=\\"interval\\"\\n\\t\\t\\t\\tvalue=\\"annual\\"\\n\\t\\t\\t\\tbind:group={interval}\\n\\t\\t\\t/>\\n\\t\\t\\tAnnual\\n\\t\\t</label>\\n\\t\\t<label class=\\"interval\\" for=\\"monthly\\">\\n\\t\\t\\t<input\\n\\t\\t\\t\\tclass=\\"interval\\"\\n\\t\\t\\t\\ttype=\\"radio\\"\\n\\t\\t\\t\\tid=\\"monthly\\"\\n\\t\\t\\t\\tname=\\"interval\\"\\n\\t\\t\\t\\tvalue=\\"monthly\\"\\n\\t\\t\\t\\tbind:group={interval}\\n\\t\\t\\t/>\\n\\t\\t\\tMonthly\\n\\t\\t</label>\\n\\t\\t<label class=\\"interval\\" for=\\"fortnightly\\">\\n\\t\\t\\t<input\\n\\t\\t\\t\\tclass=\\"interval\\"\\n\\t\\t\\t\\ttype=\\"radio\\"\\n\\t\\t\\t\\tid=\\"fortnightly\\"\\n\\t\\t\\t\\tname=\\"interval\\"\\n\\t\\t\\t\\tvalue=\\"fortnightly\\"\\n\\t\\t\\t\\tbind:group={interval}\\n\\t\\t\\t/>\\n\\t\\t\\tFortnightly\\n\\t\\t</label>\\n\\n\\t\\t<div id=\\"taxDisplay\\">\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<TaxesByState\\n\\t\\t\\t\\t\\t{currentState}\\n\\t\\t\\t\\t\\t{currentYear}\\n\\t\\t\\t\\t\\thealth_care_fsa_contributions={[health_care_fsa_contribution_1, health_care_fsa_contribution_2]}\\n\\t\\t\\t\\t\\tdependent_care_fsa_contributions={[dependent_care_fsa_contribution_1, dependent_care_fsa_contribution_2]}\\n\\t\\t\\t\\t\\tyearlySalaries={[yearlySalary1,yearlySalary2]}\\n\\t\\t\\t\\t\\tcontributionPercentages={[_401kContributionPercentage1, _401kContributionPercentage2]}\\n\\t\\t\\t\\t\\t{interval}\\n\\t\\t\\t\\t\\tmonthlyDentalContributions={[annual_dental_deduction_1 / 12, annual_dental_deduction_2 / 12]}\\n\\t\\t\\t\\t\\tmonthlyMedicalContributions={[annual_medical_deduction_1 / 12, annual_medical_deduction_2 / 12]}\\n\\t\\t\\t\\t\\tmonthlyVisionContributions={[annual_vision_deduction_1 / 12, annual_vision_deduction_2 / 12]}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t\\t<!-- <div>\\n\\t\\t\\t<TaxesByState\\n\\t\\t\\t\\tcurrentState={'New Jersey'}\\n\\t\\t\\t\\t{taxableIncome}\\n\\t\\t\\t\\tbonusPercentage={bonusPercentage1 + bonusPercentage2}\\n\\t\\t\\t\\tyearlySalary={yearlySalary1 + yearlySalary2}\\n\\t\\t\\t\\tcontributionPercentage={_401kContributionPercentage1 + _401kContributionPercentage2}\\n\\t\\t\\t\\t{interval}\\n\\t\\t\\t/>\\n\\t\\t</div> -->\\n\\t\\t</div>\\n\\t\\t<section style=\\"display: none;\\">\\n\\t\\t\\t<h3>Expenses</h3>\\n\\t\\t\\t<button on:click={addExpense}>Add Expense</button>\\n\\n\\t\\t\\t{#each expenses as expense, index}\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t<input type=\\"text\\" bind:value={expense.label} placeholder=\\"Expense Label\\" />\\n\\t\\t\\t\\t\\t<input type=\\"number\\" bind:value={expense.amount} placeholder=\\"Expense Amount\\" />\\n\\t\\t\\t\\t\\t<button on:click={() => removeExpense(index)}>Remove</button>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</section>\\n\\t</section>\\n\\t</main>\\n</div>\\n\\n<style>\\n\\t.app {\\n\\t\\tdisplay: flex;\\n\\t\\tmin-height: 100vh;\\n\\t\\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\\n\\t\\t\\tCantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n\\t}\\n\\n\\tmain {\\n\\t\\tflex: 1;\\n\\t\\tmax-width: 800px;\\n\\t\\tpadding: 1.5rem 2rem;\\n\\t\\tmin-width: 0;\\n\\t}\\n\\n\\t.interval {\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t#taxDisplay {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: 1fr 1fr;\\n\\t}\\n\\n\\t.splitDisplay\\n\\t {\\n\\t\\tdisplay: flex;\\n\\t\\tgap: 1em;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\n\\t@media (min-width: 768px) {\\n\\t\\t.splitDisplay {\\n\\t\\t\\tflex-direction: row;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgXC,mBAAK,CACJ,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,CACjB,WAAW,CAAE,SAAS,CAAC,CAAC,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM;AAC/F,GAAG,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAC5C,CAEA,mBAAK,CACJ,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,SAAS,CAAE,CACZ,CAEA,wBAAU,CACT,MAAM,CAAE,OACT,CAEA,0BAAY,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAC5B,CAEA,4BACC,CACA,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,cAAc,CAAE,MACjB,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,4BAAc,CACb,cAAc,CAAE,GACjB,CACD"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentUser = auth.currentUser;
  let email, password;
  let yearlySalary1 = 1e5;
  let bonusPercentage1 = 5;
  let _401kContributionPercentage1 = 3;
  let health_care_fsa_contribution_1 = 100;
  let dependent_care_fsa_contribution_1 = 100;
  let annual_medical_deduction_1 = 1234;
  let annual_dental_deduction_1 = 123;
  let annual_vision_deduction_1 = 12;
  let yearlySalary2 = 0;
  let bonusPercentage2 = 0;
  let _401kContributionPercentage2 = 0;
  let health_care_fsa_contribution_2 = 0;
  let dependent_care_fsa_contribution_2 = 0;
  let annual_medical_deduction_2 = 0;
  let annual_dental_deduction_2 = 0;
  let annual_vision_deduction_2 = 0;
  let currentState = "New Jersey";
  let currentYear = "2024";
  let interval = "annual";
  let expenses = [];
  let yearlyBonus1, yearly401kContribution1;
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      currentUser = user;
      const snapshot = await getDoc(doc(db, "users", user.uid));
      const data = snapshot.data();
      if (data) {
        _401kContributionPercentage1 = data["401k_contribution_1"] ?? _401kContributionPercentage1;
        health_care_fsa_contribution_1 = data["healthcare_fsa_contribution_1"] ?? health_care_fsa_contribution_1;
        dependent_care_fsa_contribution_1 = data["dependent_care_fsa_contribution_1"] ?? dependent_care_fsa_contribution_1;
        annual_medical_deduction_1 = data["annual_medical_deduction_1"] ?? annual_medical_deduction_1;
        annual_dental_deduction_1 = data["annual_dental_deduction_1"] ?? annual_dental_deduction_1;
        annual_vision_deduction_1 = data["annual_vision_deduction_1"] ?? annual_vision_deduction_1;
        yearlySalary1 = data["yearly_salary_1"] ?? yearlySalary1;
        bonusPercentage1 = data["expected_bonus_1"] ?? bonusPercentage1;
      }
      console.log(snapshot.data());
    } else {
      currentUser = null;
    }
  });
  $$result.css.add(css);
  {
    {
      yearlyBonus1 = (yearlySalary1 || 0) * ((bonusPercentage1 || 0) / 100);
      yearly401kContribution1 = (yearlySalary1 || 0) * ((_401kContributionPercentage1 || 0) / 100);
    }
  }
  return `<div class="app svelte-1d3gro8">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <main class="svelte-1d3gro8"><h1 data-svelte-h="svelte-1r0rmbh">Take-Home Pay Calculator</h1> <section>${currentUser ? `
			Signed in as ${escape(currentUser.email)} <button data-svelte-h="svelte-6agn43">Sign out</button>` : `<h2 data-svelte-h="svelte-1f1zcva">Sign In</h2> <div><form><label for="email" data-svelte-h="svelte-1flf0h4">Email:</label> <input type="email" id="email" autocomplete="email"${add_attribute("value", email, 0)}> <br> <label for="password" data-svelte-h="svelte-bhu94">Password:</label> <input type="password" id="password" autocomplete="current-password"${add_attribute("value", password, 0)}> <br> <button type="submit" data-svelte-h="svelte-e6znon">Sign In</button></form></div>`} <section><h2 data-svelte-h="svelte-gzk6ig">Salary input</h2> <div class="splitDisplay svelte-1d3gro8"><div><h3 data-svelte-h="svelte-goopbe">Person 1</h3> <label for="yearlySalary1" data-svelte-h="svelte-908ltx">Yearly Salary:</label> <input type="number" id="yearlySalary1"${add_attribute("value", yearlySalary1, 0)}> <br> <label for="salaryIncreasePercentage1" data-svelte-h="svelte-i5oryw">Increase Salary by (%):</label> <input type="number" id="salaryIncreasePercentage1"> <button data-svelte-h="svelte-ew2fh4">Increase Salary</button> <br> <label for="bonusPercentage1" data-svelte-h="svelte-1cqojg7">Expected Bonus (%):</label> <input type="number" id="bonusPercentage1"${add_attribute("value", bonusPercentage1, 0)}> <br> <br> <label for="contributionPercentage1" data-svelte-h="svelte-1jizrnf">401k Contribution (%):</label> <input type="number" id="contributionPercentage1"${add_attribute("value", _401kContributionPercentage1, 0)}> <br> <label for="healthCareContribution1" data-svelte-h="svelte-b70m3q">Healthcare FSA Contribution ($):</label> <input type="number" id="healthCareContribution1"${add_attribute("value", health_care_fsa_contribution_1, 0)}> <br> <label for="dependentCareContribution1" data-svelte-h="svelte-122ovdq">Dependent Care FSA Contribution ($):</label> <input type="number" id="dependentCareContribution1"${add_attribute("value", dependent_care_fsa_contribution_1, 0)}> <br> <br> <label for="medicalDeduction1" data-svelte-h="svelte-7eql70">Medical Deduction ($):</label> <input type="number" id="medicalDeduction1"${add_attribute("value", annual_medical_deduction_1, 0)}> <br> <label for="dentalDeduction1" data-svelte-h="svelte-yg6ar2">Dental Deduction ($):</label> <input type="number" id="dentalDeduction1"${add_attribute("value", annual_dental_deduction_1, 0)}> <br> <label for="visionDeduction1" data-svelte-h="svelte-13k4z22">Vision Deduction ($):</label> <input type="number" id="visionDeduction1"${add_attribute("value", annual_vision_deduction_1, 0)}> <br></div> <div><h3 data-svelte-h="svelte-1a84iof">Person 2</h3> <label for="yearlySalary2" data-svelte-h="svelte-mttl8q">Yearly Salary:</label> <input type="number" id="yearlySalary2"${add_attribute("value", yearlySalary2, 0)}> <br> <label for="bonusPercentage2" data-svelte-h="svelte-1weqosu">Expected Bonus (%):</label> <input type="number" id="bonusPercentage2"${add_attribute("value", bonusPercentage2, 0)}> <br> <label for="contributionPercentage2" data-svelte-h="svelte-128ukag">401k Contribution (%):</label> <input type="number" id="contributionPercentage2"${add_attribute("value", _401kContributionPercentage2, 0)}> <br> <label for="healthCareContribution2" data-svelte-h="svelte-1kpz8wl">Healthcare FSA Contribution ($):</label> <input type="number" id="healthCareContribution2"${add_attribute("value", health_care_fsa_contribution_2, 0)}> <br> <label for="dependentCareContribution2" data-svelte-h="svelte-m7r8q7">Dependent Care FSA Contribution ($):</label> <input type="number" id="dependentCareContribution2"${add_attribute("value", dependent_care_fsa_contribution_2, 0)}> <br> <br> <label for="medicalDeduction2" data-svelte-h="svelte-19f71v3">Medical Deduction ($):</label> <input type="number" id="medicalDeduction2"${add_attribute("value", annual_medical_deduction_2, 0)}> <br> <label for="dentalDeduction2" data-svelte-h="svelte-chopdb">Dental Deduction ($):</label> <input type="number" id="dentalDeduction2"${add_attribute("value", annual_dental_deduction_2, 0)}> <br> <label for="visionDeduction2" data-svelte-h="svelte-15nv7zf">Vision Deduction ($):</label> <input type="number" id="visionDeduction2"${add_attribute("value", annual_vision_deduction_2, 0)}> <br></div></div></section> <p><label for="currentYear" data-svelte-h="svelte-17urc6i">Current Year:</label> <select id="currentYear"><option value="" data-svelte-h="svelte-121j27n">-- Select Year --</option><option value="2023" data-svelte-h="svelte-185o45e">2023</option><option value="2024" data-svelte-h="svelte-d7saby">2024</option><option value="2025" data-svelte-h="svelte-9aiaj6">2025</option></select> <br> <label for="currentState" data-svelte-h="svelte-x7pvh8">Current US State:</label> <select id="currentState"><option value="" data-svelte-h="svelte-30b5j3">-- Select State --</option><option value="New York" data-svelte-h="svelte-14igjfs">New York (NY)</option><option value="New Jersey" data-svelte-h="svelte-1xli4ar">New Jersey (NJ)</option></select></p> <hr> <div class="splitDisplay svelte-1d3gro8"><br><b data-svelte-h="svelte-1ydzksd">Bonus:</b> ${escape(formatAsCurrency(yearlyBonus1))} <br><b data-svelte-h="svelte-8fadtk">401K Contribution:</b> ${escape(formatAsCurrency(yearly401kContribution1))} <p>Gross Monthly Income: ${escape(formatAsCurrency(yearlySalary1 / 12 + yearlySalary2 / 12))}</p></div> <hr>  <br>  <label for="interval" data-svelte-h="svelte-1o5vfq0">Interval:</label> <label class="interval svelte-1d3gro8" for="annual"><input class="interval svelte-1d3gro8" type="radio" id="annual" name="interval" value="annual"${add_attribute("checked", true, 1)}>
			Annual</label> <label class="interval svelte-1d3gro8" for="monthly"><input class="interval svelte-1d3gro8" type="radio" id="monthly" name="interval" value="monthly"${""}>
			Monthly</label> <label class="interval svelte-1d3gro8" for="fortnightly"><input class="interval svelte-1d3gro8" type="radio" id="fortnightly" name="interval" value="fortnightly"${""}>
			Fortnightly</label> <div id="taxDisplay" class="svelte-1d3gro8"><div>${validate_component(TaxesByState, "TaxesByState").$$render(
    $$result,
    {
      currentState,
      currentYear,
      health_care_fsa_contributions: [health_care_fsa_contribution_1, health_care_fsa_contribution_2],
      dependent_care_fsa_contributions: [dependent_care_fsa_contribution_1, dependent_care_fsa_contribution_2],
      yearlySalaries: [yearlySalary1, yearlySalary2],
      contributionPercentages: [_401kContributionPercentage1, _401kContributionPercentage2],
      interval,
      monthlyDentalContributions: [annual_dental_deduction_1 / 12, annual_dental_deduction_2 / 12],
      monthlyMedicalContributions: [annual_medical_deduction_1 / 12, annual_medical_deduction_2 / 12],
      monthlyVisionContributions: [annual_vision_deduction_1 / 12, annual_vision_deduction_2 / 12]
    },
    {},
    {}
  )}</div> </div> <section style="display: none;"><h3 data-svelte-h="svelte-11jkbap">Expenses</h3> <button data-svelte-h="svelte-rmce5g">Add Expense</button> ${each(expenses, (expense, index) => {
    return `<div><input type="text" placeholder="Expense Label"${add_attribute("value", expense.label, 0)}> <input type="number" placeholder="Expense Amount"${add_attribute("value", expense.amount, 0)}> <button data-svelte-h="svelte-cieyql">Remove</button> </div>`;
  })}</section></section></main> </div>`;
});
export {
  Page as default
};
