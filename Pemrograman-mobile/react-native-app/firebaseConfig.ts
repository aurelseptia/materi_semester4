// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGjrIEec-ltQF4p5-aFlzQDGWXdIujMq8",
  authDomain: "project-aurel-5b253.firebaseapp.com",
  projectId: "project-aurel-5b253",
  storageBucket: "project-aurel-5b253.firebasestorage.app",
  messagingSenderId: "1007213945762",
  appId: "1:1007213945762:web:bed9de780c78da1398c8fb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
