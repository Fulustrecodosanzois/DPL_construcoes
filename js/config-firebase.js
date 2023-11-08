// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyBaBxjes8WW3j73nb-5WJ80-6B04E2jzBo",
    authDomain: "dpl-construcao.firebaseapp.com",
    projectId: "dpl-construcao",
    storageBucket: "dpl-construcao.appspot.com",
    messagingSenderId: "255758191091",
    appId: "1:255758191091:web:38481488797c29265caa86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

