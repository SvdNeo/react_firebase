import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9ivy_T3zQazi2INfLnSSNcCLG_zOEIEQ",
    authDomain: "react-firebase-4a3dd.firebaseapp.com",
    projectId: "react-firebase-4a3dd",
    storageBucket: "react-firebase-4a3dd.appspot.com",
    messagingSenderId: "909024496419",
    appId: "1:909024496419:web:f0eb4f68fb873808b35a96",
    measurementId: "G-GMNTQYKSMS"
  };
  
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);