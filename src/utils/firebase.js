// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {firebaseConfig} from "./config";

// import { getAnalytics } from "firebase/analytics";
import { getAuth,} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDampRY8TN44b7fVAKADOgDDw6NmdcnacE",
  authDomain: "netflixgpt-9a49b.firebaseapp.com",
  projectId: "netflixgpt-9a49b",
  storageBucket: "netflixgpt-9a49b.appspot.com",
  messagingSenderId: "1023071151435",
  appId: "1:1023071151435:web:e62899d7809dae371174ce",
  measurementId: "G-YCTY439LM1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };