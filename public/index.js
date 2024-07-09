// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA34L0BtbPm0EGnJkOSJ97farFblZrfMCI",
  authDomain: "jain-project-39725.firebaseapp.com",
  databaseURL: "https://jain-project-39725-default-rtdb.firebaseio.com",
  projectId: "jain-project-39725",
  storageBucket: "jain-project-39725.appspot.com",
  messagingSenderId: "900081551595",
  appId: "1:900081551595:web:623004a5756a39b88516ae",
  measurementId: "G-MEJRCKVD4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);