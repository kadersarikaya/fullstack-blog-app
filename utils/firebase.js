// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-e0d45.firebaseapp.com",
  projectId: "blog-e0d45",
  storageBucket: "blog-e0d45.appspot.com",
  messagingSenderId: "776714056007",
  appId: "1:776714056007:web:828b95438a81af55b71c62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);