// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDXSMBQcy5x0SHnUtxbsiKhP5jAoMxu3Q",
  authDomain: "eml-studios.firebaseapp.com",
  projectId: "eml-studios",
  storageBucket: "eml-studios.firebasestorage.app",
  messagingSenderId: "557429328885",
  appId: "1:557429328885:web:8fdb2da1ba7947f52aeebc",
  measurementId: "G-HRXCP4XQWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
