// **NOTE**: This file requires the Firebase app to be initialized in config.js first.
const auth = firebase.auth();
const db = firebase.firestore();
const errorMessageElement = document.getElementById('error-message');

// --- Helper function for error display ---
function displayError(message) {
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
}

// --- Registration Logic ---
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    errorMessageElement.style.display = 'none';

    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const fullName = document.getElementById('register-name').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // 1. User created successfully.
            const user = result.user;
            
            // 2. Securely save Full Name to Firestore using the user's UID as the document ID.
            return db.collection("users").doc(user.uid).set({
                fullName: fullName
            });
        })
        .then(() => {
            // 3. Redirect to the home page after registration and data save.
            window.location.href = "home";
        })
        .catch((error) => {
            // Handle registration errors (e.g., weak password, email already in use)
            displayError("Registration Failed: " + error.message);
        });
});

// --- Login Logic ---
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    errorMessageElement.style.display = 'none';
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // Login successful, redirect to the secure page.
            window.location.href = "home";
        })
        .catch((error) => {
            // Handle login errors (e.g., wrong password)
            displayError("Login Failed: " + error.message);
        });
});
