<script>
    import dayjs from 'dayjs';
    import { initializeApp } from 'firebase/app';
    import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
    import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
    import ChaseLogo from '$lib/ChaseLogo.svelte';
    import TargetLogo from '$lib/TargetLogo.svelte';
    import AmazonLogo from '$lib/AmazonLogo.svelte';
    import PSEGLogo from '$lib/PSEGLogo.svelte';

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
    let transactions = [];
    let balance = 0;
    let amount = '';
    let date = '';
    let type = 'credit';
    let title = '';
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
                if (userData.transactions) {
                    transactions = userData.transactions.map((/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction) => ({
                        ...transaction,
                        date: dayjs(transaction.date)
                    }));
                } else {
                    transactions = []; // Initialize as an empty array if transactions are undefined
                }
                updateBalance();
            }
        } else {
            currentUser = null;
        }
    });

    async function syncTransactionsToFirebase() {
        if (currentUser) {
            const serializedTransactions = transactions.map(transaction => ({
                ...transaction,
                date: transaction.date instanceof dayjs ? transaction.date.toISOString() : transaction.date instanceof Date ? transaction.date.toISOString() : transaction.date
            }));
            await setDoc(doc(db, 'transactions', currentUser.uid), { transactions: serializedTransactions });
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
	 */
    function editTransaction(index) {
        const transaction = transactions[index];
        amount = transaction.amount.toString();
        const transactionDate = transaction.date instanceof dayjs ? transaction.date.toDate() : new Date(transaction.date);
        date = dayjs(transactionDate).format('YYYY-MM-DD');
        type = transaction.type;
        title = transaction.title || '';
        editingIndex = index; // Ensure editingIndex is set correctly
    }

    function saveTransaction() {
        if (amount && date && title) {
            const transaction = {
                amount: parseFloat(amount),
                date: dayjs(date), // Use dayjs instead of Date
                type,
                title
            };
            if (editingIndex !== null) {
                transactions[editingIndex] = transaction;
                editingIndex = null;
            } else {
                transactions = [...transactions, transaction];
            }
            sortTransactions();
            updateBalance();
            syncTransactionsToFirebase();
            amount = '';
            date = '';
            title = '';
        }
    }

    /**
	 * @param {number} index
	 */
    function removeTransaction(index) {
        transactions = transactions.filter((_, i) => i !== index);
        sortTransactions();
        updateBalance();
        syncTransactionsToFirebase();
    }

    function addTransaction() {
        if (amount && date && title) {
            const transaction = {
                amount: parseFloat(amount),
                date: dayjs(date),
                type,
                title
            };
            transactions = [...transactions, transaction];
            sortTransactions();
            updateBalance();
            syncTransactionsToFirebase();
            amount = '';
            date = '';
            title = '';
        }
    }

    function sortTransactions() {
        transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    function updateBalance() {
        balance = 0;
        runningTotal = 0;
        belowZeroFlag = false;
        belowZeroTransactions = [];
        transactions = transactions.map(transaction => {
            runningTotal += transaction.type === 'credit' ? transaction.amount : -transaction.amount;
            return {
                ...transaction,
                runningTotal
            };
        });
        balance = runningTotal;
    }

    function clearAllTransactions() {
        transactions = [];
        updateBalance();
        syncTransactionsToFirebase();
    }

    /**
	 * @param {string} amountValue
	 * @param {string} dateValue
	 */
    function setShortcut(amountValue, dateValue) {
        amount = amountValue;
        date = dateValue;
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

    // Reactive declarations for each button state - force dependency on transactions
    $: hasRent = transactions.some(t => t.title === 'Rent');
    $: hasAutoLoan = transactions.some(t => t.title === 'Auto Loan');
    $: hasChaseCreditCard = transactions.some(t => t.title === 'Chase Credit Card');
    $: hasTargetCreditCard = transactions.some(t => t.title === 'Target Credit Card');
    $: hasAmazonStoreCard = transactions.some(t => t.title === 'Amazon Store Card');
    $: hasAnsheiTuition = transactions.some(t => t.title === 'Anshei Tuition');
    $: hasAnsheiRegistration = transactions.some(t => t.title === 'Anshei Registration');
    $: hasPSEG = transactions.some(t => t.title === 'PSEG');

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
        const belowZeroTransaction = transactions.find(transaction => transaction.runningTotal < 0);
        if (belowZeroTransaction) {
            const suggestedAmount = (minimumBalance - belowZeroTransaction.runningTotal).toFixed(2);
            const suggestedDate = new Date(belowZeroTransaction.date.getTime() + belowZeroTransaction.date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
            return { amount: suggestedAmount, date: suggestedDate };
        }
        return null;
    }

    import { onMount } from 'svelte';

    onMount(() => {
        const storedTransactions = localStorage.getItem('transactions');
        if (storedTransactions) {
            transactions = JSON.parse(storedTransactions).map((/** @type {{ date: string | number | Date | dayjs.Dayjs | null | undefined; }} */ transaction) => ({
                ...transaction,
                date: dayjs(transaction.date) // Convert date strings back to Date objects
            }));
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
</style>

<main>
    <h1>Checking Account Balance Tracker</h1>
    <p>Current Balance: <span class={balance < 0 ? 'negative' : ''}>{formatCurrency(balance)}</span></p>

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
            <p>To maintain a minimum balance of $200, consider crediting {formatCurrency(suggestCredit().amount)} on {formatDate(suggestCredit().date)}.</p>
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
            Type:
            <select bind:value={type}>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
            </select>
        </label>
        <label>
            Title:
            <input type="text" bind:value={title} required />
        </label>
        <button type="submit">{editingIndex !== null ? 'Save Transaction' : 'Add Transaction'}</button>
    </form>

    <div class="button-group">
        <button class="clear-button" on:click={clearAllTransactions}>Clear All Transactions</button>
    </div>

    <div class="shortcut-buttons">
        <button class="credit-button" on:click={() => { setShortcut('', getUpcomingDate(1)); type = 'credit'; title = 'Transfer'; }}>Transfer</button>
        <button class:addressed={hasRent} on:click={() => { setShortcut('3445', getUpcomingDate(1)); type = 'debit'; title = 'Rent'; }}>Rent</button>
        <button class:addressed={hasAutoLoan} on:click={() => { setShortcut('723.5', getUpcomingDate(8)); type = 'debit'; title = 'Auto Loan'; }}>🚗 Auto Loan</button>
        <button class:addressed={hasChaseCreditCard} on:click={() => { setShortcut('', getUpcomingDate(8)); type = 'debit'; title = 'Chase Credit Card'; }}><ChaseLogo /> Chase Credit Card</button>
        <button class:addressed={hasTargetCreditCard} on:click={() => { setShortcut('', getUpcomingDate(8)); type = 'debit'; title = 'Target Credit Card'; }}><TargetLogo /> Target Credit Card</button>
        <button class:addressed={hasAmazonStoreCard} on:click={() => { setShortcut('', getUpcomingDate(8)); type = 'debit'; title = 'Amazon Store Card'; }}><AmazonLogo /> Amazon Store Card</button>
        <button class:addressed={hasPSEG} on:click={() => { setShortcut('269', getUpcomingDate(8)); type = 'debit'; title = 'PSEG'; }}><PSEGLogo /> PSEG</button>
        <button class:addressed={hasAnsheiTuition} on:click={() => { setShortcut('1297', getUpcomingDate(1)); type = 'debit'; title = 'Anshei Tuition'; }}>🎓 Anshei Tuition</button>
        <button class:addressed={hasAnsheiRegistration} on:click={() => { setShortcut('50', getUpcomingDate(1)); type = 'debit'; title = 'Anshei Registration'; }}>Anshei Registration</button>
    </div>

    <h2>Transactions</h2>
    <ul>
        {#each transactions as { amount, date, type, title, runningTotal }, index}
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
                <button on:click={() => editTransaction(index)}>Edit</button>
                <button on:click={() => removeTransaction(index)}>Remove</button>
                {#if runningTotal < 0}
                    <span class="flag">⚠️</span>
                    {/if}
                    <span>{formatCurrency(runningTotal)}</span>
            </li>
        {/each}
    </ul>
</main>