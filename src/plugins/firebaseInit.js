import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAMdEcodGkgHZe6JVpfDbjVP_go7vIS87E",
    authDomain: "project350-95168.firebaseapp.com",
    projectId: "project350-95168",
    storageBucket: "project350-95168.appspot.com",
    messagingSenderId: "804268754287",
    appId: "1:804268754287:web:cfa9e43dcf8c0649f7149a",
    measurementId: "G-ZV5DP1XC5C"
});

const auth = getAuth(firebaseApp); 
const db = getFirestore(firebaseApp);

export { db, auth };