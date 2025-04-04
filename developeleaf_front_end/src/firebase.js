// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSaX4x9eD52LAe51GXEEPCNSkAGF0b_l0",
  authDomain: "developleaf-e0db7.firebaseapp.com",
  projectId: "developleaf-e0db7",
  storageBucket: "developleaf-e0db7.firebasestorage.app",
  messagingSenderId: "718018624730",
  appId: "1:718018624730:web:977536e38a989c6dcb79e3",
  measurementId: "G-7BDC235JJW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
