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
            // 3. Display success message then redirect.
            errorMessageElement.innerHTML = '<span class="success">User created! Redirecting...</span>';
            errorMessageElement.style.display = 'block';
            setTimeout(() => {
                window.location.href = "home";
            }, 1500); // Wait 1.5 seconds before redirecting
        })
        .catch((error) => {
            // Handle registration errors (e.g., weak password, email already in use)
            // Use specific error message but fall back to Firebase's if not caught.
            if (error.code === 'auth/email-already-in-use') {
                 displayError("Registration Failed: This email is already in use.");
            } else if (error.code === 'auth/weak-password') {
                 displayError("Registration Failed: Password must be at least 6 characters.");
            } else {
                 displayError("Registration Failed: " + error.message);
            }
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
            // Handle login errors (e.g., wrong password, user not found)
            // Use the user-requested message for login failure
            displayError("Invalid Login details");
        });
});
