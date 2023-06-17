// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
    authDomain: "todo-padel-5d501.firebaseapp.com",
    projectId: "todo-padel-5d501",
    storageBucket: "todo-padel-5d501.appspot.com",
    messagingSenderId: "482820944773",
    appId: "1:482820944773:web:966ea2a499510e0e4ecaec"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
