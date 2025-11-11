// V8 COMPATIBLE FIREBASE CONFIGURATION (Compatible with scripts in index.html and home.html)
// This code initializes the app and makes the global 'firebase' object available.

const firebaseConfig = {
  // Your API Key is passed here:
  apiKey: "AIzaSyCDXSMBQcy5x0SHnUtxbsiKhP5jAoMxu3Q",
  authDomain: "eml-studios.firebaseapp.com",
  projectId: "eml-studios",
  storageBucket: "eml-studios.firebasestorage.app",
  messagingSenderId: "557429328885",
  appId: "1:557429328885:web:8fdb2da1ba7947f52aeebc",
  // measurementId is optional and not needed for Auth/Firestore setup
};

// Initialize Firebase using the V8 global namespace method
firebase.initializeApp(firebaseConfig);

// Set up global references
const auth = firebase.auth();
const db = firebase.firestore();

// Set up global error element (will be referenced in auth.js)
const errorMessageElement = document.getElementById('error-message');
const dbErrorElement = document.getElementById('db-error-message');

function displayError(message, isDbError = false) {
    if (isDbError && dbErrorElement) {
        dbErrorElement.textContent = message;
        dbErrorElement.style.display = 'block';
    } else if (errorMessageElement) {
        errorMessageElement.textContent = message;
        errorMessageElement.style.display = 'block';
    }
}
