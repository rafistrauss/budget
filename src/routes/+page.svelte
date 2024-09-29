<script>
	import { initializeApp } from 'firebase/app';
	import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
	import { getFirestore, doc } from 'firebase/firestore';

	import { onMount } from 'svelte';

	import { formatAsCurrency, safelyGetLocalStorage, safelySetLocalStorage } from '$lib';
	import TaxesByState from '$lib/TaxesByState.svelte';
	import { getDoc } from 'firebase/firestore';

	const firebaseConfig = {
		apiKey: 'AIzaSyC_wqKaOmHf0Nq31JOZtCt3pSQN_m1FOLk',
		authDomain: 'budget-e231f.firebaseapp.com',
		projectId: 'budget-e231f',
		storageBucket: 'budget-e231f.appspot.com',
		messagingSenderId: '324153005171',
		appId: '1:324153005171:web:1a3196daf6a3b148b94606'
	};

	const app = initializeApp(firebaseConfig);

	const auth = getAuth(app);

	const db = getFirestore(app);

	let currentUser = auth.currentUser;

	let email, password;

	let yearlySalary1 = 100000;
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

	
	let currentState = 'New Jersey';
	let currentYear = '2024';

	let interval = 'annual';

	/**
	 * @type {Expense[]}
	 */
	let expenses = []; // Array to store expenses, each expense will be an object { label: string, amount: number }

	let /** @type {number} */
		yearlyBonus1,
		/** @type {number} */
		yearly401kContribution1,
		/** @type {number} */
		yearlyBonus2,
		/** @type {number} */
		yearly401kContribution2,
		/** @type {number} */
		taxableIncome;

	$: {
		yearlyBonus1 = yearlySalary1 * (bonusPercentage1 / 100);
		yearly401kContribution1 = yearlySalary1 * (_401kContributionPercentage1 / 100);
		yearlyBonus2 = yearlySalary2 * (bonusPercentage2 / 100);
		yearly401kContribution2 = yearlySalary2 * (_401kContributionPercentage2 / 100);
	}

	$: {
		safelySetLocalStorage('expenses', JSON.stringify(expenses));
	}

	// Function to load expenses from local storage on component mount
	onMount(() => {
		const storedExpenses = safelyGetLocalStorage('expenses');
		expenses = storedExpenses ? JSON.parse(storedExpenses) : [];
	});

	// Function to add a new expense
	function addExpense() {
		expenses = [...expenses, { label: '', amount: 0 }];
	}

	// Function to remove an expense
	/**
	 * @param {number} index
	 */
	function removeExpense(index) {
		expenses = expenses.filter((_, i) => i !== index);
	}

	function signIn() {
		if (!email || !password) return console.log('Email and password are required');
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				// ...
			})
			.catch((err) => {
				console.log(err);
			});
	}

	onAuthStateChanged(auth, async (user) => {
		if (user) {
			currentUser = user;
			// console.log(user.uid);
			const snapshot = await getDoc(doc(db, 'users', user.uid));
			const data = snapshot.data();
			if (data) {
				_401kContributionPercentage1 = data['401k_contribution_1'];
				health_care_fsa_contribution_1 = data['healthcare_fsa_contribution_1'];
				dependent_care_fsa_contribution_1 = data['dependent_care_fsa_contribution_1'];
				annual_medical_deduction_1 = data['annual_medical_deduction_1'];
				annual_dental_deduction_1 = data['annual_dental_deduction_1'];
				annual_vision_deduction_1 ??= data['annual_vision_deduction_1'];
				yearlySalary1 = data['yearly_salary_1'] ?? yearlySalary1;
				bonusPercentage1 = data['expected_bonus_1'];
			}
			console.log(snapshot.data());
		} else {
			currentUser = null;
		}
	});
</script>

<main>
	<h1>Budget Calculator</h1>

	<section>
		{#if currentUser}
			<!-- content here -->
			Signed in as {currentUser.email} <button on:click={() => auth.signOut()}>Sign out</button>
		{:else}
			<h2>Sign In</h2>
			<div>
				<form action="">
					<label for="email">Email:</label>
					<input type="email" id="email" bind:value={email} autocomplete="email" />
					<br />
					<label for="password">Password:</label>
					<input
						type="password"
						id="password"
						bind:value={password}
						autocomplete="current-password"
					/>
					<br />
					<button on:click={signIn}>Sign In</button>
				</form>
			</div>
		{/if}

		<section>
			<h2>Salary input</h2>
			<div class="splitDisplay">
				<div>
					<h3>Person 1</h3>
					<label for="yearlySalary1">Yearly Salary:</label>
					<input type="number" id="yearlySalary1" bind:value={yearlySalary1} />
					<br />

					<label for="bonusPercentage1">Expected Bonus (%):</label>
					<input type="number" id="bonusPercentage1" bind:value={bonusPercentage1} />

					<br />
					<br />
					<label for="contributionPercentage1">401k Contribution (%):</label>
					<input
						type="number"
						id="contributionPercentage1"
						bind:value={_401kContributionPercentage1}
					/>
					<br />
					<label for="healthCareContribution">Healthcare FSA Contribution ($):</label>
					<input
						type="number"
						id="healthCareContribution"
						bind:value={health_care_fsa_contribution_1}
					/>
					<br />
					<label for="dependentCareContribution">Dependent Care FSA Contribution ($):</label>
					<input
						type="number"
						id="dependentCareContribution"
						bind:value={dependent_care_fsa_contribution_1}
					/>
					<br />
					<br />
					<label for="medicalDeduction">Medical Deduction ($):</label>
					<input type="number" id="medicalDeduction" bind:value={annual_medical_deduction_1} />
					<br />
					<label for="dentalDeduction">Dental Deduction ($):</label>
					<input type="number" id="dentalDeduction" bind:value={annual_dental_deduction_1} />
					<br />
					<label for="visionDeduction">Vision Deduction ($):</label>
					<input type="number" id="visionDeduction" bind:value={annual_vision_deduction_1} />
					<br />
				</div>
				<div>
					<h3>Person 2</h3>
					<label for="yearlySalary2">Yearly Salary:</label>
					<input type="number" id="yearlySalary2" bind:value={yearlySalary2} />
					<br />

					<label for="bonusPercentage2">Expected Bonus (%):</label>
					<input
						type="number"
						id="bonusPercentage2"
						bind:value={bonusPercentage2}
					/>

					<br />
					<label for="contributionPercentage2">401k Contribution (%):</label>
					<input
						type="number"
						id="contributionPercentage2"
						bind:value={_401kContributionPercentage2}
					/>
					<br />
					<label for="healthCareContribution">Healthcare FSA Contribution ($):</label>
					<input
						type="number"
						id="healthCareContribution"
						bind:value={health_care_fsa_contribution_2}
					/>
					<br />
					<label for="dependentCareContribution">Dependent Care FSA Contribution ($):</label>
					<input
						type="number"
						id="dependentCareContribution"
						bind:value={dependent_care_fsa_contribution_2}
					/>
					<br />
					<br />
					<label for="medicalDeduction">Medical Deduction ($):</label>
					<input type="number" id="medicalDeduction" bind:value={annual_medical_deduction_2} />
					<br />
					<label for="dentalDeduction">Dental Deduction ($):</label>
					<input type="number" id="dentalDeduction" bind:value={annual_dental_deduction_2} />
					<br />
					<label for="visionDeduction">Vision Deduction ($):</label>
					<input type="number" id="visionDeduction" bind:value={annual_vision_deduction_2} />
					<br />
				</div>
			</div>
		</section>

		<p>
			<label for="currentYear">Current Year:</label>
			<select id="currentYear" bind:value={currentYear}>
				<option value="">-- Select Year --</option>
				<option value="2023">2023</option>
				<option value="2024">2024</option>
			</select>

			<br />

			<label for="currentState">Current US State:</label>
			<select id="currentState" bind:value={currentState}>
				<option value="">-- Select State --</option>
				<option value="New York">New York (NY)</option>
				<option value="New Jersey">New Jersey (NJ)</option>
				<!-- Add options for other states if needed -->
			</select>
		</p>

		<hr />

		<div class="splitDisplay">
			<br /><b>Bonus:</b>
			{formatAsCurrency(yearlyBonus1)}
			<br /><b>401K Contribution:</b>
			{formatAsCurrency(yearly401kContribution1)}
	
			<p>Gross Monthly Income: {formatAsCurrency(yearlySalary1 / 12 + yearlySalary2 / 12)}</p>
		</div>
		<hr />

		<!-- Gross monthly income -->
		<br />

		<!-- Radio box to switch between annual, monthly, and fortnightly -->
		<label for="interval">Interval:</label>
		<label class="interval" for="annual">
			<input
				class="interval"
				type="radio"
				id="annual"
				name="interval"
				value="annual"
				bind:group={interval}
			/>
			Annual
		</label>
		<label class="interval" for="monthly">
			<input
				class="interval"
				type="radio"
				id="monthly"
				name="interval"
				value="monthly"
				bind:group={interval}
			/>
			Monthly
		</label>
		<label class="interval" for="fortnightly">
			<input
				class="interval"
				type="radio"
				id="fortnightly"
				name="interval"
				value="fortnightly"
				bind:group={interval}
			/>
			Fortnightly
		</label>

		<div id="taxDisplay">
			<div>
				<TaxesByState
					{currentState}
					{currentYear}
					{taxableIncome}
					health_care_fsa_contributions={[health_care_fsa_contribution_1, health_care_fsa_contribution_2]}
					dependent_care_fsa_contributions={[dependent_care_fsa_contribution_1, dependent_care_fsa_contribution_2]}
					yearlySalaries={[yearlySalary1,yearlySalary2]}
					contributionPercentages={[_401kContributionPercentage1, _401kContributionPercentage2]}
					{interval}
					monthlyDentalContributions={[annual_dental_deduction_1 / 12, annual_dental_deduction_2 / 12]}
					monthlyMedicalContributions={[annual_medical_deduction_1 / 12, annual_medical_deduction_2 / 12]}
					monthlyVisionContributions={[annual_vision_deduction_1 / 12, annual_vision_deduction_2 / 12]}
				/>
			</div>
			<!-- <div>
			<TaxesByState
				currentState={'New Jersey'}
				{taxableIncome}
				bonusPercentage={bonusPercentage1 + bonusPercentage2}
				yearlySalary={yearlySalary1 + yearlySalary2}
				contributionPercentage={_401kContributionPercentage1 + _401kContributionPercentage2}
				{interval}
			/>
		</div> -->
		</div>
		<section style="display: none;">
			<h3>Expenses</h3>
			<button on:click={addExpense}>Add Expense</button>

			{#each expenses as expense, index}
				<div>
					<input type="text" bind:value={expense.label} placeholder="Expense Label" />
					<input type="number" bind:value={expense.amount} placeholder="Expense Amount" />
					<button on:click={() => removeExpense(index)}>Remove</button>
				</div>
			{/each}
		</section>
	</section>
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.interval {
		cursor: pointer;
	}

	#taxDisplay {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.splitDisplay
	 {
		display: flex;
		gap: 1em;
		flex-direction: column;
	}

	@media (min-width: 768px) {
		.splitDisplay {
			flex-direction: row;
		}
	}
</style>
