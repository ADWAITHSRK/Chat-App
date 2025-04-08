// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPlehkpYc3MEJKpnF_d2BcLKaMkQfs3gQ",
  authDomain: "mern-app-4ce43.firebaseapp.com",
  projectId: "mern-app-4ce43",
  storageBucket: "mern-app-4ce43.firebasestorage.app",
  messagingSenderId: "643951035525",
  appId: "1:643951035525:web:b454c2ee8254cb552595ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);