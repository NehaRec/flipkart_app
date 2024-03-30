// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_storV5rUald2XmiJF3gWouiFT6YNOuI",
  authDomain: "flipkart-app-10e40.firebaseapp.com",
  projectId: "flipkart-app-10e40",
  storageBucket: "flipkart-app-10e40.appspot.com",
  messagingSenderId: "958460695103",
  appId: "1:958460695103:web:41b48c8d0858694254de8a",
  measurementId: "G-DV5MKH8RFF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
