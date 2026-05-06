import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyC_wqKaOmHf0Nq31JOZtCt3pSQN_m1FOLk',
	authDomain: 'budget-e231f.firebaseapp.com',
	projectId: 'budget-e231f',
	storageBucket: 'budget-e231f.appspot.com',
	messagingSenderId: '324153005171',
	appId: '1:324153005171:web:1a3196daf6a3b148b94606'
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
