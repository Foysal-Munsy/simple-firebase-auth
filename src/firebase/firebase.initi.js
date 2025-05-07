// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQIydfNFEAuKdHbBUQYKEU0A2S-2t2lXg",
  authDomain: "simple-firebase-auth-dd9f1.firebaseapp.com",
  projectId: "simple-firebase-auth-dd9f1",
  storageBucket: "simple-firebase-auth-dd9f1.firebasestorage.app",
  messagingSenderId: "804335512538",
  appId: "1:804335512538:web:8a828e6c2e8d3dd76a6ee3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
