// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-MZD3Y22T72"
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyBYtKBSyCwLLZtmbXUFaB6BLfPsFPQSp5E
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-react-4a21f.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-react-4a21f
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-react-4a21f.appspot.com
// REACT_APP_MESSAGING_SENDER=486533642525
// REACT_APP_APP_ID=1:486533642525:web:6879fe20296b7eecc549f4

// Initialize Firebase
const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);