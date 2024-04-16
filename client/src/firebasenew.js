// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-vite-blog-bootcamp.firebaseapp.com",
  projectId: "mern-vite-blog-bootcamp",
  storageBucket: "mern-vite-blog-bootcamp.appspot.com",
  messagingSenderId: "536472528128",
  appId: "1:536472528128:web:f14fde83259096cea53fe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);