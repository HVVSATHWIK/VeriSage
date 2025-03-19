import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPiDfrJ9cr8uaHvvYxr7A44oFaznOge9U",
  authDomain: "verisage-cb0dc.firebaseapp.com",
  projectId: "verisage-cb0dc",
  storageBucket: "verisage-cb0dc.firebasestorage.app",
  messagingSenderId: "83139741393",
  appId: "1:83139741393:web:23dad9e3725281fdd7a7f0",
  measurementId: "G-S61JR882L5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);