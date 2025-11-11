// **NOTE**: This file requires the Firebase app to be initialized in config.js first.
const auth = firebase.auth();
const db = firebase.firestore();

// --- Logout Logic ---
document.getElementById('logout-button').addEventListener('click', () => {
    auth.signOut()
        .then(() => {
            // Redirect to login page after successful logout
            window.location.href = "/";
        })
        .catch((error) => {
            console.error("Logout Error:", error);
            alert("Error logging out.");
        });
});


// --- Authentication Check and Data Fetch ---
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in. Fetch their profile data securely.
        document.getElementById('user-details').textContent = `Email: ${user.email}`;

        // Fetch user data from Firestore (only allowed by the Security Rules)
        db.collection("users").doc(user.uid).get().then(doc => {
            if (doc.exists) {
                const fullName = doc.data().fullName;
                document.getElementById('welcome-message').textContent = `Welcome, ${fullName}!`;
            } else {
                document.getElementById('welcome-message').textContent = "Welcome! (Full Name Missing)";
            }
        }).catch(error => {
            console.error("Firestore Fetch Error:", error);
            document.getElementById('welcome-message').textContent = "Welcome! (Error fetching data)";
        });

    } else {
        // User is NOT signed in. Redirect them to the login page.
        window.location.href = "/";
    }
});
