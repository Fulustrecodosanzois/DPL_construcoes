// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBB1mXOMsMMx663z12CKgCwdIx-0GiAvFw",
    authDomain: "dpl2-6b754.firebaseapp.com",
    projectId: "dpl2-6b754",
    storageBucket: "dpl2-6b754.appspot.com",
    messagingSenderId: "332668407845",
    appId: "1:332668407845:web:b368b4987cf9a281b02fcc"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

