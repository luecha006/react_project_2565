import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB34lmY8DvihotqA7jIX1cMEKRNWE-VNAk",
  authDomain: "cuctus2022.firebaseapp.com",
  projectId: "cuctus2022",
  storageBucket: "cuctus2022.appspot.com",
  messagingSenderId: "287149379102",
  appId: "1:287149379102:web:fde57dd98655b75aaba80f",
  measurementId: "G-YJP90924FY",
});

export default firebaseConfig;
