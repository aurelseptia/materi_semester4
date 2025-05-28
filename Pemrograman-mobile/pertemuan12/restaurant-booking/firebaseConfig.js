import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBz8RVX5c5GHgMiL78fq8fzHOgydp3BVsw",//current_key
    authDomain: "booking-restaurant-e174b.firebaseapp.com",//project_id + ".firebaseapp.com"
    projectId: "booking-restaurant-e174b", //project_id
    storageBucket: "booking-restaurant-e174b.firebasestorage.app", //project_id + ".firebasestorage.googleapis.com"
    messagingSenderId: "1037054754053", //project_number
    appId: "1:1037054754053:android:43e3e0c502e694924e8b6c", //app_id
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
