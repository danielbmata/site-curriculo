// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_lXpYwHD2ex5VTAlhXsYp4JZYPNM6qGA",
    authDomain: "site-curriculo-51e44.firebaseapp.com",
    projectId: "site-curriculo-51e44",
    storageBucket: "site-curriculo-51e44.firebasestorage.app",
    messagingSenderId: "709249645461",
    appId: "1:709249645461:web:14c0fe904a35b05987549c",
    measurementId: "G-FR6EW8NJRV"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
