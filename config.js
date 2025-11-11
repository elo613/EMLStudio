// Initialize Firebase
const firebaseConfig = {
    apiKey: "[YOUR_API_KEY_HERE]",
    authDomain: "[YOUR_PROJECT_ID].firebaseapp.com",
    projectId: "[YOUR_PROJECT_ID]",
    storageBucket: "[YOUR_PROJECT_ID].appspot.com",
    messagingSenderId: "[YOUR_SENDER_ID]",
    appId: "[YOUR_APP_ID]"
};

firebase.initializeApp(firebaseConfig);

// The firebase variables (auth and db) are now available globally 
// and used in the other scripts (auth.js and home.js)
