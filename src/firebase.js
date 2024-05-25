// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5P6i2HHBEuX6a1sOuwJsSZHSl9bbHZxY",
  authDomain: "web-kelas-b46da.firebaseapp.com",
  projectId: "web-kelas-b46da",
  storageBucket: "web-kelas-b46da.appspot.com",
  messagingSenderId: "613567661812",
  appId: "1:613567661812:web:fae02f798e42809f63c0a1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();