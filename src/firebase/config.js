// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ0o0vguLyApThDJTsgkdUmMK_A_yxOzg",
    authDomain: "zaintea-a4549.firebaseapp.com",
    projectId: "zaintea-a4549",
    storageBucket: "zaintea-a4549.firebasestorage.app",
    messagingSenderId: "700455334776",
    appId: "1:700455334776:web:95eb929469fcbe4be80e8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
