<script>
    import dayjs from 'dayjs';
    import { initializeApp } from 'firebase/app';
    import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
    import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

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

    let currentUser = null;
    let email = '';
    let password = '';

    let editingIndex = null;
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
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                if (userData.transactions) {
                    transactions = userData.transactions.map(transaction => ({
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
            await setDoc(doc(db, 'users', currentUser.uid), { transactions: serializedTransactions });
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

    function editTransaction(index) {
        const transaction = transactions[index];
        amount = transaction.amount.toString();
        date = new Date(transaction.date.getTime() + transaction.date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
        type = transaction.type;
        title = transaction.title || '';
        editingIndex = index; // Ensure editingIndex is set correctly
    }

    function saveTransaction() {
        if (amount && date && title) {
            const transaction = {
                amount: parseFloat(amount),
                date: new Date(date),
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

    function setShortcut(amountValue, dateValue) {
        amount = amountValue;
        date = dateValue;
    }

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

    function formatDate(date) {
        return dayjs(date).format('MMMM D, YYYY'); // Updated to a more human-friendly format
    }

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
            transactions = JSON.parse(storedTransactions).map(transaction => ({
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
    }

    button:hover {
        background-color: #e0e0e0;
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

    .suggestion {
        margin-top: 1rem;
        padding: 1rem;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 4px;
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
        <button on:click={() => { setShortcut('3445', getUpcomingDate(1)); type = 'debit'; title = 'Rent'; }}>Rent</button>
        <button on:click={() => { setShortcut('723.5', getUpcomingDate(8)); type = 'debit'; title = 'Auto Loan'; }}>Auto Loan</button>
        <button on:click={() => { setShortcut('', getUpcomingDate(8)); type = 'debit'; title = 'Chase Credit Card'; }}>Chase Credit Card</button>
        <button on:click={() => { setShortcut('', getUpcomingDate(8)); type = 'debit'; title = 'Target Credit Card'; }}>Target Credit Card</button>
        <button on:click={() => { setShortcut('', getUpcomingDate(8)); type = 'debit'; title = 'Amazon Store Card'; }}>Amazon Store Card</button>
        <button on:click={() => { setShortcut('1242.5', getUpcomingDate(1)); type = 'debit'; title = 'Anshei Tuition'; }}>Anshei Tuition</button>
        <button on:click={() => { setShortcut('65', getUpcomingDate(1)); type = 'debit'; title = 'Anshei Registration'; }}>Anshei Registration</button>
    </div>

    <h2>Transactions</h2>
    <ul>
        {#each transactions as { amount, date, type, title, runningTotal }, index}
            <li>
                {formatDate(date)}: {type} of {formatCurrency(amount)}{title ? ` - ${title}` : ''}
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