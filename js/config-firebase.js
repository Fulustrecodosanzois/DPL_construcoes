// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBTfMoeepVT7y6Ttn8wyiJIFpc2FvKXFI",
    authDomain: "dpl-bd.firebaseapp.com",
    projectId: "dpl-bd",
    storageBucket: "dpl-bd.appspot.com",
    messagingSenderId: "322306742100",
    appId: "1:322306742100:web:e56e0af1b4c58310791ac1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

