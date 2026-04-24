// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGMz-0x8xjq2wBQI6X-NAGjll4FhqiGhw",
    authDomain: "portfolio-19e61.firebaseapp.com",
    projectId: "portfolio-19e61",
    storageBucket: "portfolio-19e61.firebasestorage.app",
    messagingSenderId: "524450782039",
    appId: "1:524450782039:web:cbb9a8b175dd123b753c12",
    measurementId: "G-8GHS34E37H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()

export { db }