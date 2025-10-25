// Firebase Configuration for GitHub Pages
// Replace with your actual Firebase config
const FIREBASE_CONFIG = {
    apiKey: "your-api-key-here",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};

// Make it globally available
window.__firebase_config = JSON.stringify(FIREBASE_CONFIG);
window.__app_id = 'bongo-token-hunter';
window.__initial_auth_token = null; // Set this if you have custom auth
