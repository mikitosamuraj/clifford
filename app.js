import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBylr8Qgxzw263rInUmln4AYMpibm1t43o",
  authDomain: "clifford-146ae.firebaseapp.com",
  projectId: "clifford-146ae",
  storageBucket: "clifford-146ae.firebasestorage.app",
  messagingSenderId: "655375890963",
  appId: "1:655375890963:web:0153ed600a917c222c9de6",
  measurementId: "G-LH3WS88L5W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

console.log("Firebase initialized");
