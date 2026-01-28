<script>
    import dayjs from 'dayjs';
    import { initializeApp } from 'firebase/app';
    import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
    import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
    import ChaseLogo from '$lib/ChaseLogo.svelte';
    import TargetLogo from '$lib/TargetLogo.svelte';
    import AmazonLogo from '$lib/AmazonLogo.svelte';
    import PSEGLogo from '$lib/PSEGLogo.svelte';
    import VerizonLogo from '$lib/VerizonFiosLogo.svelte';

    const easternTimezone = 'America/New_York'; // Set timezone to Eastern

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

    /**
	 * @type {import("firebase/auth").User | null}
	 */
    let currentUser = null;
    let email = '';
    let password = '';

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
    let amount = '';
    let date = '';
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
                    checkingTransactions = userData.transactions.map((/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction) => ({
                        ...transaction,
                        date: dayjs(transaction.date)
                    }));
                    savingsTransactions = [];
                    // Save in new format
                    syncTransactionsToFirebase();
                } else {
                    // New format
                    if (userData.checkingTransactions) {
                        checkingTransactions = userData.checkingTransactions.map((/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction) => ({
                            ...transaction,
                            date: dayjs(transaction.date)
                        }));
                    } else {
                        checkingTransactions = []; // Initialize as an empty array if transactions are undefined
                    }
                    if (userData.savingsTransactions) {
                        savingsTransactions = userData.savingsTransactions.map((/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction) => ({
                            ...transaction,
                            date: dayjs(transaction.date)
                        }));
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
            const serializedCheckingTransactions = checkingTransactions.map(transaction => ({
                ...transaction,
                date: transaction.date instanceof dayjs ? transaction.date.toISOString() : transaction.date instanceof Date ? transaction.date.toISOString() : transaction.date
            }));
            const serializedSavingsTransactions = savingsTransactions.map(transaction => ({
                ...transaction,
                date: transaction.date instanceof dayjs ? transaction.date.toISOString() : transaction.date instanceof Date ? transaction.date.toISOString() : transaction.date
            }));
            await setDoc(doc(db, 'transactions', currentUser.uid), { 
                checkingTransactions: serializedCheckingTransactions,
                savingsTransactions: serializedSavingsTransactions
            });
        }
    }

    function signIn() {
        if (!email || !password) return alert('Email and password are required');
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                currentUser = userCredential.user;
            })
            .catch((err) => {
                console.error(err);
                alert('Failed to sign in');
            });
    }

    function logOut() {
        auth.signOut()
            .then(() => {
                currentUser = null;
                console.log('User signed out successfully');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
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
        amount = transaction.amount.toString();
        const transactionDate = transaction.date instanceof dayjs ? transaction.date.toDate() : new Date(transaction.date);
        date = dayjs(transactionDate).format('YYYY-MM-DD');
        type = transaction.type;
        title = transaction.title || '';
        account = accountType;
        transferTo = transaction.transferTo || '';
        editingIndex = index; // Ensure editingIndex is set correctly
    }

    function saveTransaction() {
        if (amount && date && title) {
            if (editingIndex !== null) {
                // When editing, if changing to a transfer, we need to handle it specially
                if (type === 'transfer') {
                    // Ensure transferTo has a value - default based on current account
                    if (!transferTo) {
                        transferTo = account === 'checking' ? 'savings' : 'checking';
                    }
                    
                    // Create new transfer transactions with linked ID
                    const transferId = Date.now().toString();
                    const newCheckingTransaction = account === 'checking' && transferTo === 'savings' 
                        ? { amount: parseFloat(amount), date: dayjs(date), type: 'debit', title: 'Transfer to Savings', transferId }
                        : { amount: parseFloat(amount), date: dayjs(date), type: 'credit', title: 'Transfer from Savings', transferId };
                    
                    const newSavingsTransaction = account === 'savings' && transferTo === 'checking'
                        ? { amount: parseFloat(amount), date: dayjs(date), type: 'debit', title: 'Transfer to Checking', transferId }
                        : { amount: parseFloat(amount), date: dayjs(date), type: 'credit', title: 'Transfer from Checking', transferId };
                    
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
                        amount: parseFloat(amount),
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
                        checkingTransactions = [...checkingTransactions, { amount: parseFloat(amount), date: dayjs(date), type: 'debit', title: 'Transfer to Savings', transferId }];
                        savingsTransactions = [...savingsTransactions, { amount: parseFloat(amount), date: dayjs(date), type: 'credit', title: 'Transfer from Checking', transferId }];
                    } else if (account === 'savings' && transferTo === 'checking') {
                        savingsTransactions = [...savingsTransactions, { amount: parseFloat(amount), date: dayjs(date), type: 'debit', title: 'Transfer to Checking', transferId }];
                        checkingTransactions = [...checkingTransactions, { amount: parseFloat(amount), date: dayjs(date), type: 'credit', title: 'Transfer from Savings', transferId }];
                    }
                } else {
                    // Regular transaction - no undefined fields
                    const transaction = {
                        amount: parseFloat(amount),
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
            amount = '';
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
                savingsTransactions = savingsTransactions.filter(t => t.transferId !== transferId);
            } else {
                checkingTransactions = checkingTransactions.filter(t => t.transferId !== transferId);
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
        if (amount && date && title) {
            // Handle transfers between accounts
            if (type === 'transfer') {
                // Create linked transfer transactions
                const transferId = Date.now().toString();
                if (account === 'checking' && transferTo === 'savings') {
                    checkingTransactions = [...checkingTransactions, { amount: parseFloat(amount), date: dayjs(date), type: 'debit', title: 'Transfer to Savings', transferId }];
                    savingsTransactions = [...savingsTransactions, { amount: parseFloat(amount), date: dayjs(date), type: 'credit', title: 'Transfer from Checking', transferId }];
                } else if (account === 'savings' && transferTo === 'checking') {
                    savingsTransactions = [...savingsTransactions, { amount: parseFloat(amount), date: dayjs(date), type: 'debit', title: 'Transfer to Checking', transferId }];
                    checkingTransactions = [...checkingTransactions, { amount: parseFloat(amount), date: dayjs(date), type: 'credit', title: 'Transfer from Savings', transferId }];
                }
            } else {
                // Regular transaction - no undefined fields
                const transaction = {
                    amount: parseFloat(amount),
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
            amount = '';
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
        
        checkingTransactions = checkingTransactions.map(transaction => {
            checkingRunningTotal += transaction.type === 'credit' ? transaction.amount : -transaction.amount;
            return {
                ...transaction,
                runningTotal: checkingRunningTotal
            };
        });
        checkingBalance = checkingRunningTotal;
        
        savingsTransactions = savingsTransactions.map(transaction => {
            savingsRunningTotal += transaction.type === 'credit' ? transaction.amount : -transaction.amount;
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
            checkingTransactions: checkingTransactions.map(t => ({
                ...t,
                date: t.date instanceof dayjs ? t.date.toISOString() : t.date
            })),
            savingsTransactions: savingsTransactions.map(t => ({
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
                    checkingTransactions = backup.checkingTransactions.map((/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ t) => ({
                        ...t,
                        date: dayjs(t.date)
                    }));
                }
                if (backup.savingsTransactions) {
                    savingsTransactions = backup.savingsTransactions.map((/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ t) => ({
                        ...t,
                        date: dayjs(t.date)
                    }));
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
        amount = amountValue;
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

    // Reactive declarations for each button state - force dependency on checkingTransactions
    $: hasRent = checkingTransactions.some(t => t.title === 'Rent');
    $: hasAutoLoan = checkingTransactions.some(t => t.title === 'Auto Loan');
    $: hasChaseCreditCard = checkingTransactions.some(t => t.title === 'Chase Credit Card');
    $: hasTargetCreditCard = checkingTransactions.some(t => t.title === 'Target Credit Card');
    $: hasAmazonStoreCard = checkingTransactions.some(t => t.title === 'Amazon Store Card');
    $: hasAnsheiTuition = checkingTransactions.some(t => t.title === 'Anshei Tuition');
    $: hasAnsheiRegistration = checkingTransactions.some(t => t.title === 'Anshei Registration');
    $: hasPSEG = checkingTransactions.some(t => t.title === 'PSEG');
    $: hasVerizon = checkingTransactions.some(t => t.title === 'Verizon');

    /**
	 * @param {string | number | bigint} amount
	 */
    function formatCurrency(amount) {
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    }

    function suggestCredit() {
        const minimumBalance = 200;
        const belowZeroTransaction = checkingTransactions.find(transaction => transaction.runningTotal < 0);
        if (belowZeroTransaction) {
            const suggestedAmount = (minimumBalance - belowZeroTransaction.runningTotal).toFixed(2);
            const suggestedDate = new Date(belowZeroTransaction.date.getTime() + belowZeroTransaction.date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
            return { amount: suggestedAmount, date: suggestedDate, fromSavings: savingsBalance >= parseFloat(suggestedAmount) };
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
            checkingTransactions = JSON.parse(oldTransactions).map((/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction) => ({
                ...transaction,
                date: dayjs(transaction.date)
            }));
            savingsTransactions = [];
            // Save in new format
            localStorage.setItem('checkingTransactions', JSON.stringify(checkingTransactions));
            localStorage.setItem('savingsTransactions', JSON.stringify(savingsTransactions));
            // Remove old format
            localStorage.removeItem('transactions');
        } else {
            // New format
            if (storedCheckingTransactions) {
                checkingTransactions = JSON.parse(storedCheckingTransactions).map((/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction) => ({
                    ...transaction,
                    date: dayjs(transaction.date) // Convert date strings back to Date objects
                }));
            }
            if (storedSavingsTransactions) {
                savingsTransactions = JSON.parse(storedSavingsTransactions).map((/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction) => ({
                    ...transaction,
                    date: dayjs(transaction.date) // Convert date strings back to Date objects
                }));
            }
        }
        updateBalance();
    });
</script>

<style>
    .negative {
        color: red;
    }
    .flag {
        color: orange;
    }

    .button-group {
        margin-bottom: 1rem;
    }

    .shortcut-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    button {
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    button :global(svg) {
        vertical-align: middle;
        flex-shrink: 0;
    }

    button:hover {
        background-color: #e0e0e0;
    }

    button.addressed {
        opacity: 0.4;
        background-color: #d3d3d3;
        color: #666;
        position: relative;
    }

    button.addressed:hover {
        opacity: 0.5;
        background-color: #c0c0c0;
    }

    .clear-button {
        background-color: #ffcccc;
        border: 1px solid #ff9999;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .clear-button:hover {
        background-color: #ffb3b3;
    }
    
    .backup-button {
        background-color: #cce5ff;
        border: 1px solid #99ccff;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .backup-button:hover {
        background-color: #b3d9ff;
    }
    
    .import-file-input {
        display: none;
    }

    form {
        margin-bottom: 1rem;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    ul li {
        margin-bottom: 0.5rem;
    }

    .transaction-title {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
    }

    .transaction-title :global(svg) {
        vertical-align: middle;
        flex-shrink: 0;
    }

    .suggestion {
        margin-top: 1rem;
        padding: 1rem;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .credit-button {
            background-color: #e6f9e6;
            border: 1px solid #8fd88f;
            color: #217821;
        }
        .credit-button:hover {
            background-color: #d0f5d0;
        }
    
    .accounts-container {
        display: flex;
        gap: 2rem;
        margin-bottom: 2rem;
    }
    
    .account-summary {
        flex: 1;
        padding: 1rem;
        border: 2px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
    }
    
    .account-summary.checking {
        border-color: #4a90e2;
    }
    
    .account-summary.savings {
        border-color: #50c878;
    }
    
    .account-section {
        margin-bottom: 2rem;
    }
</style>

<main>
    <h1>Account Balance Tracker</h1>
    
    <div class="accounts-container">
        <div class="account-summary checking">
            <h2>Checking Account</h2>
            <p><strong>Balance:</strong> <span class={checkingBalance < 0 ? 'negative' : ''}>{formatCurrency(checkingBalance)}</span></p>
        </div>
        <div class="account-summary savings">
            <h2>Savings Account</h2>
            <p><strong>Balance:</strong> <span class={savingsBalance < 0 ? 'negative' : ''}>{formatCurrency(savingsBalance)}</span></p>
        </div>
    </div>

    {#if !currentUser}
    <div>
        <h2>Sign In</h2>
        <form on:submit|preventDefault={signIn}>
            <label>
                Email:
                <input type="email" bind:value={email} required />
            </label>
            <label>
                Password:
                <input type="password" bind:value={password} required />
            </label>
            <button type="submit">Sign In</button>
        </form>
    </div>
    {/if}

    {#if currentUser}
        <button on:click={logOut}>Log Out</button>
    {/if}

    {#if suggestCredit()}
        <div class="suggestion">
            <p>To maintain a minimum balance of $200, consider crediting {formatCurrency(suggestCredit().amount)} on {formatDate(suggestCredit().date)}.
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
            <input type="number" bind:value={amount} step="0.01" required />
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
        <button class="backup-button" on:click={() => document.getElementById('importFile').click()}>📂 Import Backup</button>
        <input type="file" id="importFile" class="import-file-input" accept=".json" on:change={importBackup} />
        <button class="clear-button" on:click={clearAllTransactions}>Clear All Transactions</button>
    </div>

    <div class="shortcut-buttons">
        <button class="credit-button" on:click={() => { setShortcut('', getUpcomingDate(1)); type = 'credit'; account = 'savings'; title = 'Deposit to Savings'; }}>💰 Deposit to Savings</button>
        <button class="credit-button" on:click={() => { setShortcut('', getUpcomingDate(1)); type = 'transfer'; transferTo = 'checking'; account = 'savings'; title = 'Transfer from Savings'; }}>🔄 Transfer from Savings</button>
        <button class:addressed={hasRent} on:click={() => { setShortcut('3445', getUpcomingDate(1)); type = 'debit'; title = 'Rent'; }}>Rent</button>
        <button class:addressed={hasAutoLoan} on:click={() => { setShortcut('723.5', getUpcomingDate(8)); type = 'debit'; title = 'Auto Loan'; }}>🚗 Auto Loan</button>
        <button class:addressed={hasChaseCreditCard} on:click={() => { setShortcut('', getUpcomingDate(8)); type = 'debit'; title = 'Chase Credit Card'; }}><ChaseLogo /> Chase Credit Card</button>
        <button class:addressed={hasTargetCreditCard} on:click={() => { setShortcut('', getUpcomingDate(8)); type = 'debit'; title = 'Target Credit Card'; }}><TargetLogo /> Target Credit Card</button>
        <button class:addressed={hasAmazonStoreCard} on:click={() => { setShortcut('', getUpcomingDate(8)); type = 'debit'; title = 'Amazon Store Card'; }}><AmazonLogo /> Amazon Store Card</button>
        <button class:addressed={hasPSEG} on:click={() => { setShortcut('269', getUpcomingDate(8)); type = 'debit'; title = 'PSEG'; }}><PSEGLogo /> PSEG</button>
        <button class:addressed={hasVerizon} on:click={() => { setShortcut('49.99', getUpcomingDate(18)); type = 'debit'; title = 'Verizon'; }}><VerizonLogo /> Verizon</button>
        <button class:addressed={hasAnsheiTuition} on:click={() => { setShortcut('1297', getUpcomingDate(1)); type = 'debit'; title = 'Anshei Tuition'; }}>🎓 Anshei Tuition</button>
        <button class:addressed={hasAnsheiRegistration} on:click={() => { setShortcut('50', getUpcomingDate(1)); type = 'debit'; title = 'Anshei Registration'; }}>Anshei Registration</button>
    </div>

    <div class="account-section">
        <h2>Checking Account Transactions</h2>
        <ul>
            {#each checkingTransactions as { amount, date, type, title, runningTotal }, index}
                <li>
                    {formatDate(date)}: {type} of {formatCurrency(amount)}
                    {#if title}
                        <span class="transaction-title">
                            - 
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
                            {/if}
                            {title}
                        </span>
                    {/if}
                    <button on:click={() => editTransaction(index, 'checking')}>Edit</button>
                    <button on:click={() => removeTransaction(index, 'checking')}>Remove</button>
                    {#if runningTotal < 0}
                        <span class="flag">⚠️</span>
                    {/if}
                    <span>{formatCurrency(runningTotal)}</span>
                </li>
            {/each}
        </ul>
    </div>

    <div class="account-section">
        <h2>Savings Account Transactions</h2>
        <ul>
            {#each savingsTransactions as { amount, date, type, title, runningTotal }, index}
                <li>
                    {formatDate(date)}: {type} of {formatCurrency(amount)}
                    {#if title}
                        - {title}
                    {/if}
                    <button on:click={() => editTransaction(index, 'savings')}>Edit</button>
                    <button on:click={() => removeTransaction(index, 'savings')}>Remove</button>
                    {#if runningTotal < 0}
                        <span class="flag">⚠️</span>
                    {/if}
                    <span>{formatCurrency(runningTotal)}</span>
                </li>
            {/each}
        </ul>
    </div>
</main>