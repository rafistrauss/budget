<script>
	import dayjs from 'dayjs';
	import { onAuthStateChanged } from 'firebase/auth';
	import { doc, setDoc, getDoc } from 'firebase/firestore';
	import { auth, db } from '$lib/firebase.js';
	import { darkMode } from '$lib/darkModeStore.js';
	import AuthBar from '$lib/AuthBar.svelte';
	import ChaseLogo from '$lib/ChaseLogo.svelte';
	import TargetLogo from '$lib/TargetLogo.svelte';
	import AmazonLogo from '$lib/AmazonLogo.svelte';
	import PSEGLogo from '$lib/PSEGLogo.svelte';
	import VerizonLogo from '$lib/VerizonFiosLogo.svelte';
	import Nav from '$lib/Nav.svelte';

	const easternTimezone = 'America/New_York'; // Set timezone to Eastern

	/**
	 * @type {import("firebase/auth").User | null}
	 */
	let currentUser = null;

	/**
	 * @type {string | number | null}
	 */
	let editingIndex = null;
	/**
	 * @type {any[]}
	 */
	let checkingTransactions = [];
	/**
	 * @type {any[]}
	 */
	let savingsTransactions = [];
	let checkingBalance = 0;
	let savingsBalance = 0;
	let amountCents = 0;
	let date = '';

	/** @param {KeyboardEvent} e */
	function handleAmountKeydown(e) {
		if (e.key >= '0' && e.key <= '9') {
			e.preventDefault();
			const next = amountCents * 10 + parseInt(e.key);
			if (next <= 9999999) amountCents = next;
		} else if (e.key === 'Backspace') {
			e.preventDefault();
			amountCents = Math.floor(amountCents / 10);
		} else if (e.key === 'Delete') {
			e.preventDefault();
			amountCents = 0;
		}
		// Mobile fires 'Unidentified' — let it fall through to on:input
	}

	/** @param {Event} e */
	function handleAmountInput(e) {
		// Only runs on mobile (desktop keydown calls preventDefault, so input never fires)
		const ie = /** @type {InputEvent} */ (e);
		const target = /** @type {HTMLInputElement} */ (e.target);
		if (ie.inputType === 'deleteContentBackward' || ie.inputType === 'deleteContentForward') {
			amountCents = Math.floor(amountCents / 10);
		} else if (ie.data && ie.data >= '0' && ie.data <= '9') {
			const next = amountCents * 10 + parseInt(ie.data);
			if (next <= 9999999) amountCents = next;
		}
		// Restore formatted value so the raw digit doesn't linger
		target.value = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amountCents / 100);
	}

	/** @param {string} text */
	function parseAmountTextToCents(text) {
		const normalized = text.replace(/[^\d.]/g, '');
		if (!normalized) return 0;
		const parsed = Number.parseFloat(normalized);
		if (!Number.isFinite(parsed) || parsed < 0) return 0;
		return Math.min(Math.round(parsed * 100), 9999999);
	}

	/** @param {ClipboardEvent} e */
	function handleAmountPaste(e) {
		e.preventDefault();
		const pastedText = e.clipboardData?.getData('text') ?? '';
		amountCents = parseAmountTextToCents(pastedText);
		const target = /** @type {HTMLInputElement | null} */ (e.target);
		if (target) {
			target.value = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
				amountCents / 100
			);
		}
	}

	$: amountDisplay = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amountCents / 100);;
	let type = 'credit';
	let title = '';
	let account = 'checking';
	let transferTo = '';
	let runningTotal = 0;
	let belowZeroFlag = false;
	let belowZeroTransactions = [];

	onAuthStateChanged(auth, async (user) => {
		if (user) {
			currentUser = user;
			console.log('User signed in:', user);
			const userDoc = await getDoc(doc(db, 'transactions', user.uid));
			if (userDoc.exists()) {
				const userData = userDoc.data();

				// Backwards compatibility: check for old 'transactions' format
				if (userData.transactions && !userData.checkingTransactions) {
					// Migrate old format: all old transactions go to checking
					console.log('Migrating old transaction format to new format');
					checkingTransactions = userData.transactions.map(
						(
							/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction
						) => ({
							...transaction,
							date: dayjs(transaction.date)
						})
					);
					savingsTransactions = [];
					// Save in new format
					syncTransactionsToFirebase();
				} else {
					// New format
					if (userData.checkingTransactions) {
						checkingTransactions = userData.checkingTransactions.map(
							(
								/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction
							) => ({
								...transaction,
								date: dayjs(transaction.date)
							})
						);
					} else {
						checkingTransactions = []; // Initialize as an empty array if transactions are undefined
					}
					if (userData.savingsTransactions) {
						savingsTransactions = userData.savingsTransactions.map(
							(
								/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction
							) => ({
								...transaction,
								date: dayjs(transaction.date)
							})
						);
					} else {
						savingsTransactions = []; // Initialize as an empty array if transactions are undefined
					}
				}
				updateBalance();
			}
		} else {
			currentUser = null;
		}
	});

	async function syncTransactionsToFirebase() {
		if (currentUser) {
			const serializedCheckingTransactions = checkingTransactions.map((transaction) => ({
				...transaction,
				date:
					transaction.date instanceof dayjs
						? transaction.date.toISOString()
						: transaction.date instanceof Date
						? transaction.date.toISOString()
						: transaction.date
			}));
			const serializedSavingsTransactions = savingsTransactions.map((transaction) => ({
				...transaction,
				date:
					transaction.date instanceof dayjs
						? transaction.date.toISOString()
						: transaction.date instanceof Date
						? transaction.date.toISOString()
						: transaction.date
			}));
			await setDoc(doc(db, 'transactions', currentUser.uid), {
				checkingTransactions: serializedCheckingTransactions,
				savingsTransactions: serializedSavingsTransactions
			});
		}
	}



	/**
	 * @param {number} index
    /**
	 * @param {number} index
	 * @param {string} accountType
	 */
	function editTransaction(index, accountType) {
		const transactions = accountType === 'checking' ? checkingTransactions : savingsTransactions;
		const transaction = transactions[index];
		amountCents = Math.round(transaction.amount * 100);
		const transactionDate =
			transaction.date instanceof dayjs ? transaction.date.toDate() : new Date(transaction.date);
		date = dayjs(transactionDate).format('YYYY-MM-DD');
		type = transaction.type;
		title = transaction.title || '';
		account = accountType;
		transferTo = transaction.transferTo || '';
		editingIndex = index; // Ensure editingIndex is set correctly
	}

	function saveTransaction() {
		if (amountCents > 0 && date && title) {
			if (editingIndex !== null) {
				// When editing, if changing to a transfer, we need to handle it specially
				if (type === 'transfer') {
					// Ensure transferTo has a value - default based on current account
					if (!transferTo) {
						transferTo = account === 'checking' ? 'savings' : 'checking';
					}

					// Create new transfer transactions with linked ID
					const transferId = Date.now().toString();
					const newCheckingTransaction =
						account === 'checking' && transferTo === 'savings'
							? {
									amount: amountCents / 100,
									date: dayjs(date),
									type: 'debit',
									title: 'Transfer to Savings',
									transferId
							  }
							: {
									amount: amountCents / 100,
									date: dayjs(date),
									type: 'credit',
									title: 'Transfer from Savings',
									transferId
							  };

					const newSavingsTransaction =
						account === 'savings' && transferTo === 'checking'
							? {
									amount: amountCents / 100,
									date: dayjs(date),
									type: 'debit',
									title: 'Transfer to Checking',
									transferId
							  }
							: {
									amount: amountCents / 100,
									date: dayjs(date),
									type: 'credit',
									title: 'Transfer from Checking',
									transferId
							  };

					// Remove old transaction and add new ones
					if (account === 'checking') {
						checkingTransactions = [
							...checkingTransactions.filter((_, i) => i !== editingIndex),
							newCheckingTransaction
						];
						savingsTransactions = [...savingsTransactions, newSavingsTransaction];
					} else {
						savingsTransactions = [
							...savingsTransactions.filter((_, i) => i !== editingIndex),
							newSavingsTransaction
						];
						checkingTransactions = [...checkingTransactions, newCheckingTransaction];
					}
					editingIndex = null;
				} else {
					// Regular edit - build transaction without undefined fields
					const transaction = {
						amount: amountCents / 100,
						date: dayjs(date),
						type,
						title
					};

					if (account === 'checking') {
						checkingTransactions[editingIndex] = transaction;
					} else {
						savingsTransactions[editingIndex] = transaction;
					}
					editingIndex = null;
				}
			} else {
				// Adding new transaction
				if (type === 'transfer') {
					// Ensure transferTo has a value - default based on current account
					if (!transferTo) {
						transferTo = account === 'checking' ? 'savings' : 'checking';
					}

					// Create linked transfer transactions
					const transferId = Date.now().toString();
					if (account === 'checking' && transferTo === 'savings') {
						checkingTransactions = [
							...checkingTransactions,
							{
								amount: amountCents / 100,
								date: dayjs(date),
								type: 'debit',
								title: 'Transfer to Savings',
								transferId
							}
						];
						savingsTransactions = [
							...savingsTransactions,
							{
								amount: amountCents / 100,
								date: dayjs(date),
								type: 'credit',
								title: 'Transfer from Checking',
								transferId
							}
						];
					} else if (account === 'savings' && transferTo === 'checking') {
						savingsTransactions = [
							...savingsTransactions,
							{
								amount: amountCents / 100,
								date: dayjs(date),
								type: 'debit',
								title: 'Transfer to Checking',
								transferId
							}
						];
						checkingTransactions = [
							...checkingTransactions,
							{
								amount: amountCents / 100,
								date: dayjs(date),
								type: 'credit',
								title: 'Transfer from Savings',
								transferId
							}
						];
					}
				} else {
					// Regular transaction - no undefined fields
					const transaction = {
						amount: amountCents / 100,
						date: dayjs(date),
						type,
						title
					};

					if (account === 'checking') {
						checkingTransactions = [...checkingTransactions, transaction];
					} else {
						savingsTransactions = [...savingsTransactions, transaction];
					}
				}
			}
			sortTransactions();
			updateBalance();
			syncTransactionsToFirebase();
			amountCents = 0;
			date = '';
			title = '';
			transferTo = '';
		}
	}

	/**
	 * @param {number} index
	 * @param {string} accountType
	 */
	function removeTransaction(index, accountType) {
		const transactions = accountType === 'checking' ? checkingTransactions : savingsTransactions;
		const transaction = transactions[index];

		// Check if this is a transfer transaction with a linked transaction
		if (transaction.transferId) {
			const transferId = transaction.transferId;
			// Remove the linked transaction from the other account
			if (accountType === 'checking') {
				savingsTransactions = savingsTransactions.filter((t) => t.transferId !== transferId);
			} else {
				checkingTransactions = checkingTransactions.filter((t) => t.transferId !== transferId);
			}
		}

		// Remove the transaction from the current account
		if (accountType === 'checking') {
			checkingTransactions = checkingTransactions.filter((_, i) => i !== index);
		} else {
			savingsTransactions = savingsTransactions.filter((_, i) => i !== index);
		}

		sortTransactions();
		updateBalance();
		syncTransactionsToFirebase();
	}

	function addTransaction() {
		if (amountCents > 0 && date && title) {
			// Handle transfers between accounts
			if (type === 'transfer') {
				// Create linked transfer transactions
				const transferId = Date.now().toString();
				if (account === 'checking' && transferTo === 'savings') {
					checkingTransactions = [
						...checkingTransactions,
						{
							amount: amountCents / 100,
							date: dayjs(date),
							type: 'debit',
							title: 'Transfer to Savings',
							transferId
						}
					];
					savingsTransactions = [
						...savingsTransactions,
						{
							amount: amountCents / 100,
							date: dayjs(date),
							type: 'credit',
							title: 'Transfer from Checking',
							transferId
						}
					];
				} else if (account === 'savings' && transferTo === 'checking') {
					savingsTransactions = [
						...savingsTransactions,
						{
							amount: amountCents / 100,
							date: dayjs(date),
							type: 'debit',
							title: 'Transfer to Checking',
							transferId
						}
					];
					checkingTransactions = [
						...checkingTransactions,
						{
							amount: amountCents / 100,
							date: dayjs(date),
							type: 'credit',
							title: 'Transfer from Savings',
							transferId
						}
					];
				}
			} else {
				// Regular transaction - no undefined fields
				const transaction = {
					amount: amountCents / 100,
					date: dayjs(date),
					type,
					title
				};

				if (account === 'checking') {
					checkingTransactions = [...checkingTransactions, transaction];
				} else {
					savingsTransactions = [...savingsTransactions, transaction];
				}
			}
			sortTransactions();
			updateBalance();
			syncTransactionsToFirebase();
			amountCents = 0;
			date = '';
			title = '';
			transferTo = '';
		}
	}

	function sortTransactions() {
		checkingTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
		savingsTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
	}

	function updateBalance() {
		checkingBalance = 0;
		savingsBalance = 0;
		let checkingRunningTotal = 0;
		let savingsRunningTotal = 0;
		belowZeroFlag = false;
		belowZeroTransactions = [];

		checkingTransactions = checkingTransactions.map((transaction) => {
			checkingRunningTotal +=
				transaction.type === 'credit' ? transaction.amount : -transaction.amount;
			return {
				...transaction,
				runningTotal: checkingRunningTotal
			};
		});
		checkingBalance = checkingRunningTotal;

		savingsTransactions = savingsTransactions.map((transaction) => {
			savingsRunningTotal +=
				transaction.type === 'credit' ? transaction.amount : -transaction.amount;
			return {
				...transaction,
				runningTotal: savingsRunningTotal
			};
		});
		savingsBalance = savingsRunningTotal;
	}

	function clearAllTransactions() {
		checkingTransactions = [];
		savingsTransactions = [];
		updateBalance();
		syncTransactionsToFirebase();
	}

	function exportBackup() {
		const backup = {
			exportDate: new Date().toISOString(),
			checkingTransactions: checkingTransactions.map((t) => ({
				...t,
				date: t.date instanceof dayjs ? t.date.toISOString() : t.date
			})),
			savingsTransactions: savingsTransactions.map((t) => ({
				...t,
				date: t.date instanceof dayjs ? t.date.toISOString() : t.date
			})),
			checkingBalance,
			savingsBalance
		};

		const dataStr = JSON.stringify(backup, null, 2);
		const dataBlob = new Blob([dataStr], { type: 'application/json' });
		const url = URL.createObjectURL(dataBlob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `budget-backup-${new Date().toISOString().split('T')[0]}.json`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
		alert('Backup downloaded successfully!');
	}

	function importBackup(event) {
		const file = event.target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			try {
				const backup = JSON.parse(e.target?.result);
				if (backup.checkingTransactions) {
					checkingTransactions = backup.checkingTransactions.map(
						(
							/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ t
						) => ({
							...t,
							date: dayjs(t.date)
						})
					);
				}
				if (backup.savingsTransactions) {
					savingsTransactions = backup.savingsTransactions.map(
						(
							/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ t
						) => ({
							...t,
							date: dayjs(t.date)
						})
					);
				}
				sortTransactions();
				updateBalance();
				syncTransactionsToFirebase();
				alert('Backup imported successfully!');
			} catch (err) {
				alert('Error importing backup: ' + err.message);
			}
		};
		reader.readAsText(file);
	}

	/**
	 * @param {string} amountValue
	 * @param {string} dateValue
	 */
	function setShortcut(amountValue, dateValue) {
		amountCents = amountValue ? Math.round(parseFloat(amountValue) * 100) : 0;
		date = dateValue;
		account = 'checking';
	}

	/**
	 * @param {number | undefined} day
	 */
	function getUpcomingDate(day) {
		const today = new Date();
		const currentMonth = today.getMonth();
		const currentYear = today.getFullYear();
		let targetDate = new Date(currentYear, currentMonth, day);

		if (today.getDate() >= day) {
			targetDate.setMonth(currentMonth + 1);
		}

		targetDate.setHours(0, 0, 0, 0); // Ensure no time offset issues
		return targetDate.toISOString().split('T')[0];
	}

	/**
	 * @param {string | number | Date | dayjs.Dayjs | null | undefined} date
	 */
	function formatDate(date) {
		return dayjs(date).format('MMMM D, YYYY'); // Updated to a more human-friendly format
	}

	// Helper to get balance as of today
	function getCurrentBalance(transactions) {
		const today = dayjs().endOf('day');
		let runningTotal = 0;
		transactions.forEach((transaction) => {
			const txDate = dayjs(transaction.date);
			if (txDate.isBefore(today) || txDate.isSame(today, 'day')) {
				runningTotal += transaction.type === 'credit' ? transaction.amount : -transaction.amount;
			}
		});
		return runningTotal;
	}

	$: currentCheckingBalance = getCurrentBalance(checkingTransactions);
	$: currentSavingsBalance = getCurrentBalance(savingsTransactions);

	// Reactive declarations for each button state - force dependency on checkingTransactions
	$: hasRent = checkingTransactions.some((t) => t.title === 'Rent');
	$: hasAutoLoan = checkingTransactions.some((t) => t.title === 'Auto Loan');
	$: hasChaseCreditCard = checkingTransactions.some((t) => t.title === 'Chase Credit Card');
	$: hasTargetCreditCard = checkingTransactions.some((t) => t.title === 'Target Credit Card');
	$: hasAmazonStoreCard = checkingTransactions.some((t) => t.title === 'Amazon Store Card');
	$: hasAnsheiTuition = checkingTransactions.some((t) => t.title === 'Anshei Tuition');
	$: hasAnsheiRegistration = checkingTransactions.some((t) => t.title === 'Anshei Registration');
	$: hasPSEG = checkingTransactions.some((t) => t.title === 'PSEG');
	$: hasVerizon = checkingTransactions.some((t) => t.title === 'Verizon');

	/**
	 * @param {string | number | bigint} amount
	 */
	function formatCurrency(amount) {
		return new Intl.NumberFormat(undefined, {
			style: 'currency',
			currency: 'USD'
		}).format(amount);
	}

	function suggestCredit() {
		const minimumBalance = 200;
		const belowZeroTransaction = checkingTransactions.find(
			(transaction) => transaction.runningTotal < 0
		);
		if (belowZeroTransaction) {
			const suggestedAmount = (minimumBalance - belowZeroTransaction.runningTotal).toFixed(2);
			const suggestedDate = new Date(
				belowZeroTransaction.date.getTime() + belowZeroTransaction.date.getTimezoneOffset() * 60000
			)
				.toISOString()
				.split('T')[0];
			return {
				amount: suggestedAmount,
				date: suggestedDate,
				fromSavings: savingsBalance >= parseFloat(suggestedAmount)
			};
		}
		return null;
	}

	import { onMount } from 'svelte';

	onMount(() => {
		// Backwards compatibility: check for old 'transactions' format in localStorage
		const oldTransactions = localStorage.getItem('transactions');
		const storedCheckingTransactions = localStorage.getItem('checkingTransactions');
		const storedSavingsTransactions = localStorage.getItem('savingsTransactions');

		if (oldTransactions && !storedCheckingTransactions) {
			// Migrate old format: all old transactions go to checking
			console.log('Migrating old localStorage transaction format to new format');
			checkingTransactions = JSON.parse(oldTransactions).map(
				(
					/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction
				) => ({
					...transaction,
					date: dayjs(transaction.date)
				})
			);
			savingsTransactions = [];
			// Save in new format
			localStorage.setItem('checkingTransactions', JSON.stringify(checkingTransactions));
			localStorage.setItem('savingsTransactions', JSON.stringify(savingsTransactions));
			// Remove old format
			localStorage.removeItem('transactions');
		} else {
			// New format
			if (storedCheckingTransactions) {
				checkingTransactions = JSON.parse(storedCheckingTransactions).map(
					(
						/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction
					) => ({
						...transaction,
						date: dayjs(transaction.date) // Convert date strings back to Date objects
					})
				);
			}
			if (storedSavingsTransactions) {
				savingsTransactions = JSON.parse(storedSavingsTransactions).map(
					(
						/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction
					) => ({
						...transaction,
						date: dayjs(transaction.date) // Convert date strings back to Date objects
					})
				);
			}
		}
		updateBalance();
	});
</script>

<svelte:head>
	<title>Checking | Budget Planner</title>
</svelte:head>

<div class="app" class:dark-mode={$darkMode}>
	<Nav />
	<AuthBar {currentUser} />
	<main>
	<h1>Account Balance Tracker</h1>

	<div class="accounts-container">
		<div class="account-summary checking">
			<h2>Checking Account</h2>
			<p>
				<strong>Current Balance (as of today):</strong>
				<span class={currentCheckingBalance < 0 ? 'negative' : ''}>{formatCurrency(currentCheckingBalance)}</span>
			</p>
			<p>
				<strong>Final Balance (all transactions):</strong>
				<span class={checkingBalance < 0 ? 'negative' : ''}>{formatCurrency(checkingBalance)}</span>
			</p>
		</div>
		<div class="account-summary savings">
			<h2>Savings Account</h2>
			<p>
				<strong>Current Balance (as of today):</strong>
				<span class={currentSavingsBalance < 0 ? 'negative' : ''}>{formatCurrency(currentSavingsBalance)}</span>
			</p>
			<p>
				<strong>Final Balance (all transactions):</strong>
				<span class={savingsBalance < 0 ? 'negative' : ''}>{formatCurrency(savingsBalance)}</span>
			</p>
		</div>
	</div>

	{#if suggestCredit()}
		<div class="suggestion">
			<p>
				To maintain a minimum balance of $200, consider crediting {formatCurrency(
					suggestCredit().amount
				)} on {formatDate(suggestCredit().date)}.
				{#if suggestCredit().fromSavings}
					You have sufficient funds in savings to cover this transfer.
				{:else}
					⚠️ Warning: Savings balance is insufficient for this transfer.
				{/if}
			</p>
		</div>
	{/if}

	<form on:submit|preventDefault={editingIndex !== null ? saveTransaction : addTransaction}>
		<label>
			Amount:
			<input
				type="text"
				inputmode="numeric"
				class="amount-display"
				value={amountDisplay}
				on:keydown={handleAmountKeydown}
				on:input={handleAmountInput}
				on:paste={handleAmountPaste}
				placeholder="$0.00"
			/>
		</label>
		<label>
			Date:
			<input type="date" bind:value={date} required />
		</label>
		<label>
			Account:
			<select bind:value={account}>
				<option value="checking">Checking</option>
				<option value="savings">Savings</option>
			</select>
		</label>
		<label>
			Type:
			<select bind:value={type}>
				<option value="credit">Credit/Deposit</option>
				<option value="debit">Debit/Withdrawal</option>
				<option value="transfer">Transfer</option>
			</select>
		</label>
		{#if type === 'transfer'}
			<label>
				Transfer To:
				<select bind:value={transferTo}>
					{#if account === 'checking'}
						<option value="savings" selected>Savings</option>
					{:else}
						<option value="checking" selected>Checking</option>
					{/if}
				</select>
			</label>
		{/if}
		<label>
			Title:
			<input type="text" bind:value={title} required />
		</label>
		<button type="submit">{editingIndex !== null ? 'Save Transaction' : 'Add Transaction'}</button>
	</form>

	<div class="button-group">
		<button class="backup-button" on:click={exportBackup}>💾 Export Backup</button>
		<button class="backup-button" on:click={() => document.getElementById('importFile').click()}
			>📂 Import Backup</button
		>
		<input
			type="file"
			id="importFile"
			class="import-file-input"
			accept=".json"
			on:change={importBackup}
		/>
		<button class="clear-button" on:click={clearAllTransactions}>Clear All Transactions</button>
	</div>

	<div class="shortcut-buttons">
		<button
			class="credit-button"
			on:click={() => {
				setShortcut('', getUpcomingDate(1));
				type = 'credit';
				account = 'savings';
				title = 'Deposit to Savings';
			}}>💰 Deposit to Savings</button
		>
		<button
			class="credit-button"
			on:click={() => {
				setShortcut('', getUpcomingDate(1));
				type = 'transfer';
				transferTo = 'checking';
				account = 'savings';
				title = 'Transfer from Savings';
			}}>🔄 Transfer from Savings</button
		>
		<button
			class:addressed={hasRent}
			on:click={() => {
				setShortcut('3445', getUpcomingDate(1));
				type = 'debit';
				title = 'Rent';
			}}>Rent</button
		>
		<button
			class:addressed={hasAutoLoan}
			on:click={() => {
				setShortcut('723.5', getUpcomingDate(8));
				type = 'debit';
				title = 'Auto Loan';
			}}>🚗 Auto Loan</button
		>
		<button
			class:addressed={hasChaseCreditCard}
			on:click={() => {
				setShortcut('', getUpcomingDate(8));
				type = 'debit';
				title = 'Chase Credit Card';
			}}><ChaseLogo /> Chase Credit Card</button
		>
		<button
			class:addressed={hasTargetCreditCard}
			on:click={() => {
				setShortcut('', getUpcomingDate(8));
				type = 'debit';
				title = 'Target Credit Card';
			}}><TargetLogo /> Target Credit Card</button
		>
		<button
			class:addressed={hasAmazonStoreCard}
			on:click={() => {
				setShortcut('', getUpcomingDate(8));
				type = 'debit';
				title = 'Amazon Store Card';
			}}><AmazonLogo /> Amazon Store Card</button
		>
		<button
			class:addressed={hasPSEG}
			on:click={() => {
				setShortcut('269', getUpcomingDate(8));
				type = 'debit';
				title = 'PSEG';
			}}><PSEGLogo /> PSEG</button
		>
		<button
			class:addressed={hasVerizon}
			on:click={() => {
				setShortcut('49.99', getUpcomingDate(18));
				type = 'debit';
				title = 'Verizon';
			}}><VerizonLogo /> Verizon</button
		>
		<button
			class:addressed={hasAnsheiTuition}
			on:click={() => {
				setShortcut('1297', getUpcomingDate(1));
				type = 'debit';
				title = 'Anshei Tuition';
			}}>🎓 Anshei Tuition</button
		>
		<button
			class:addressed={hasAnsheiRegistration}
			on:click={() => {
				setShortcut('50', getUpcomingDate(1));
				type = 'debit';
				title = 'Anshei Registration';
			}}>Anshei Registration</button
		>
	</div>

	<div class="accounts-tables-container">
		<div class="account-section">
			<h2>Checking Account Transactions</h2>
			<div class="table-scroll">
			<table class="transactions-table checking-table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Type</th>
						<th>Amount</th>
						<th>Title</th>
						<th>Running Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each checkingTransactions as { amount, date, type, title, runningTotal }, index}
						<tr>
							<td>{formatDate(date)}</td>
							<td>{type}</td>
							<td>{formatCurrency(amount)}</td>
							<td>
								<span class="transaction-title">
									{#if title === 'Chase Credit Card'}
										<ChaseLogo />
									{:else if title === 'Target Credit Card'}
										<TargetLogo />
									{:else if title === 'Amazon Store Card'}
										<AmazonLogo />
									{:else if title === 'Auto Loan'}
										🚗
									{:else if title === 'Anshei Tuition'}
										🎓
									{:else if title === 'PSEG'}
										<PSEGLogo />
                                    {:else if title === 'Verizon'}
                                        <VerizonLogo />
									{/if}
									{title}
								</span>
							</td>
							<td>
								<span class={runningTotal < 0 ? 'negative' : ''}
									>{formatCurrency(runningTotal)}</span
								>
								{#if runningTotal < 0}
									<span class="flag">⚠️</span>
								{/if}
							</td>
							<td>
								<button on:click={() => editTransaction(index, 'checking')}>Edit</button>
								<button on:click={() => removeTransaction(index, 'checking')}>Remove</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			</div>
		</div>
		<div class="account-section">
			<h2>Savings Account Transactions</h2>
			<div class="table-scroll">
			<table class="transactions-table savings-table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Type</th>
						<th>Amount</th>
						<th>Title</th>
						<th>Running Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each savingsTransactions as { amount, date, type, title, runningTotal }, index}
						<tr>
							<td>{formatDate(date)}</td>
							<td>{type}</td>
							<td>{formatCurrency(amount)}</td>
							<td>{title}</td>
							<td>
								<span class={runningTotal < 0 ? 'negative' : ''}
									>{formatCurrency(runningTotal)}</span
								>
								{#if runningTotal < 0}
									<span class="flag">⚠️</span>
								{/if}
							</td>
							<td>
								<button on:click={() => editTransaction(index, 'savings')}>Edit</button>
								<button on:click={() => removeTransaction(index, 'savings')}>Remove</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			</div>
		</div>
	</div>
	</main>
</div>

<style>
	/* ── Layout ── */
	.app {
		display: flex;
		min-height: 100vh;
		background: var(--color-bg);
		color: var(--color-text-primary);
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		transition: background 0.2s, color 0.2s;
	}

	main {
		flex: 1;
		min-width: 0;
		width: 100%;
		padding: 1.5rem 2rem 3rem;
	}

	h1 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-text-primary);
		margin: 0 0 1.25rem;
		transition: color 0.2s;
	}

	h2 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text-primary);
		margin: 0 0 0.75rem;
		transition: color 0.2s;
	}

	/* ── Negative / flag ── */
	.negative {
		color: #e05454;
	}

	:global(.dark-mode) .negative {
		color: #ff6b6b;
	}

	.flag {
		color: orange;
	}

	/* ── Account summary cards ── */
	.accounts-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.account-summary {
		padding: 1rem 1.25rem;
		border-radius: 12px;
		background: var(--color-surface);
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
		border-left: 4px solid transparent;
		transition: background 0.2s;
	}

	:global(.dark-mode) .account-summary {
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	}

	.account-summary.checking { border-left-color: var(--color-accent-blue); }
	.account-summary.savings  { border-left-color: #50c878; }

	.account-summary p {
		margin: 0.25rem 0;
		font-size: 0.9rem;
		color: var(--color-text-secondary);
		transition: color 0.2s;
	}

	.account-summary strong {
		color: var(--color-text-primary);
	}

	/* ── Suggestion ── */
	.suggestion {
		padding: 0.75rem 1rem;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		margin-bottom: 1rem;
		font-size: 0.9rem;
		transition: background 0.2s, border-color 0.2s;
	}

	.suggestion p { margin: 0; }

	/* ── Form ── */
	form {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
		gap: 0.75rem;
		align-items: end;
		background: var(--color-surface);
		padding: 1rem;
		border-radius: 12px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
		margin-bottom: 1rem;
		transition: background 0.2s;
	}

	:global(.dark-mode) form {
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-secondary);
		transition: color 0.2s;
	}

	label input,
	label select {
		padding: 0.45rem 0.7rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		background: var(--color-bg);
		color: var(--color-text-primary);
		font-size: 0.95rem;
		transition: background 0.2s, color 0.2s, border-color 0.2s;
	}

	label input:focus,
	label select:focus {
		outline: none;
		border-color: var(--color-accent-blue);
		box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-accent-blue) 15%, transparent);
	}

	/* ── Amount display ── */
	.amount-display {
		font-size: 1.4rem;
		font-weight: 700;
		font-family: 'Courier New', monospace;
		color: var(--color-text-primary);
		background: var(--color-bg);
		border: 2px solid var(--color-border);
		border-radius: 8px;
		padding: 0.4rem 0.75rem;
		text-align: right;
		width: 100%;
		box-sizing: border-box;
		caret-color: transparent;
		user-select: none;
		outline: none;
		transition: border-color 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
	}

	.amount-display:focus {
		border-color: var(--color-accent-blue);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent-blue) 20%, transparent);
	}

	/* ── Buttons ── */
	button {
		padding: 0.45rem 0.85rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		background: var(--color-surface);
		color: var(--color-text-primary);
		font-size: 0.85rem;
		font-weight: 500;
		cursor: pointer;
		transition: background 0.15s, border-color 0.15s, color 0.15s;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		white-space: nowrap;
	}

	button:hover {
		background: var(--color-bg);
		border-color: var(--color-text-tertiary);
	}

	button :global(svg) {
		vertical-align: middle;
		flex-shrink: 0;
	}

	button.addressed {
		opacity: 0.4;
	}

	button.addressed:hover {
		opacity: 0.55;
	}

	.clear-button {
		background: #ffcccc;
		border-color: #ff9999;
		color: #8b0000;
	}

	.clear-button:hover { background: #ffb3b3; }

	:global(.dark-mode) .clear-button {
		background: #4a1a1a;
		border-color: #7a3030;
		color: #ff9999;
	}

	:global(.dark-mode) .clear-button:hover { background: #5a2020; }

	.backup-button {
		background: #cce5ff;
		border-color: #99ccff;
		color: #1a4a7a;
	}

	.backup-button:hover { background: #b3d9ff; }

	:global(.dark-mode) .backup-button {
		background: #1a3550;
		border-color: #2a5070;
		color: #7ab8f5;
	}

	:global(.dark-mode) .backup-button:hover { background: #234468; }

	.credit-button {
		background: #e6f9e6;
		border-color: #8fd88f;
		color: #217821;
	}

	.credit-button:hover { background: #d0f5d0; }

	:global(.dark-mode) .credit-button {
		background: #1a3a1a;
		border-color: #3a6a3a;
		color: #7dc87d;
	}

	:global(.dark-mode) .credit-button:hover { background: #234a23; }

	.import-file-input { display: none; }

	/* ── Button groups ── */
	.button-group,
	.shortcut-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	/* ── Account tables ── */
	.accounts-tables-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.table-scroll {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		border-radius: 8px;
		border: 1px solid var(--color-border);
		transition: border-color 0.2s;
	}

	.transactions-table {
		width: 100%;
		border-collapse: collapse;
		background: var(--color-surface);
		font-size: 0.875rem;
		transition: background 0.2s;
	}

	.transactions-table th,
	.transactions-table td {
		border-bottom: 1px solid var(--color-border);
		padding: 0.5rem 0.65rem;
		text-align: left;
		transition: border-color 0.2s;
		white-space: nowrap;
	}

	.transactions-table td:last-child,
	.transactions-table th:last-child {
		white-space: nowrap;
	}

	.transactions-table th {
		background: var(--color-bg);
		font-weight: 600;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-secondary);
		transition: background 0.2s, color 0.2s;
		position: sticky;
		top: 0;
	}

	.transactions-table tr:hover td {
		background: color-mix(in srgb, var(--color-surface) 90%, var(--color-accent-blue));
	}

	.transactions-table .flag { margin-left: 0.3rem; }

	.transaction-title {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
	}

	.transaction-title :global(svg) {
		vertical-align: middle;
		flex-shrink: 0;
	}

	/* ── Responsive ── */
	@media (max-width: 900px) {
		.accounts-tables-container {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 767px) {
		main {
			padding: 0.75rem 0.75rem 5rem; /* extra bottom for auth bar */
		}

		h1 { font-size: 1.2rem; }

		.accounts-container {
			grid-template-columns: 1fr 1fr;
			gap: 0.5rem;
		}

		.account-summary {
			padding: 0.75rem;
		}

		.account-summary p {
			font-size: 0.8rem;
		}

		form {
			grid-template-columns: 1fr 1fr;
			padding: 0.75rem;
			gap: 0.6rem;
		}

		.shortcut-buttons button,
		.button-group button {
			font-size: 0.8rem;
			padding: 0.4rem 0.6rem;
		}

		/* Card layout for tables on mobile */
		.table-scroll {
			border: none;
			border-radius: 0;
			overflow-x: visible;
		}

		.transactions-table thead {
			display: none;
		}

		.transactions-table,
		.transactions-table tbody,
		.transactions-table tr {
			display: block;
			width: 100%;
		}

		.transactions-table tr {
			background: var(--color-surface);
			border: 1px solid var(--color-border);
			border-radius: 8px;
			margin-bottom: 0.5rem;
			padding: 0.5rem 0.75rem;
			display: grid;
			grid-template-columns: 1fr auto;
			gap: 0.15rem 0.5rem;
			align-items: start;
		}

		.transactions-table td {
			border: none;
			padding: 0;
			font-size: 0.85rem;
			white-space: normal;
		}

		/* Date — small muted text above title */
		.transactions-table td:nth-child(1) {
			grid-column: 1 / 2;
			font-size: 0.72rem;
			color: var(--color-text-tertiary);
		}

		/* Type — hidden on mobile */
		.transactions-table td:nth-child(2) {
			display: none;
		}

		/* Amount — right column, 2 rows tall */
		.transactions-table td:nth-child(3) {
			grid-column: 2 / 3;
			grid-row: 1 / 3;
			text-align: right;
			font-weight: 600;
			font-size: 0.95rem;
			align-self: center;
		}

		/* Title — main left content */
		.transactions-table td:nth-child(4) {
			grid-column: 1 / 2;
			font-weight: 500;
		}

		/* Running total */
		.transactions-table td:nth-child(5) {
			grid-column: 1 / 3;
			font-size: 0.78rem;
			color: var(--color-text-secondary);
		}

		/* Actions */
		.transactions-table td:nth-child(6) {
			grid-column: 1 / 3;
			display: flex;
			gap: 0.4rem;
		}

		.transactions-table tr:hover td {
			background: transparent;
		}
	}

	@media (max-width: 480px) {
		.accounts-container {
			grid-template-columns: 1fr;
		}

		form {
			grid-template-columns: 1fr;
		}
	}
</style>
