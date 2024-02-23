// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_eirYlWUUP1AdNxRSvtVA95qS9b8YTQQ",
  authDomain: "test-phone-e1347.firebaseapp.com",
  projectId: "test-phone-e1347",
  storageBucket: "test-phone-e1347.appspot.com",
  messagingSenderId: "535797840264",
  appId: "1:535797840264:web:d1a9085e5a8683d91f223d",
  measurementId: "G-YFY62HDM7V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
