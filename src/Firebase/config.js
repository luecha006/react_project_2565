import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyBl5DPP6I-M3TWXlOutY7adRCiu3RfsIkw",
//   authDomain: "project-cactus-abab4.firebaseapp.com",
//   databaseURL: "https://project-cactus-abab4-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "project-cactus-abab4",
//   storageBucket: "project-cactus-abab4.appspot.com",
//   messagingSenderId: "544545408756",
//   appId: "1:544545408756:web:cb1e5804b61000cb1fc0a1"
// });

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB34lmY8DvihotqA7jIX1cMEKRNWE-VNAk",
  authDomain: "cuctus2022.firebaseapp.com",
  projectId: "cuctus2022",
  storageBucket: "cuctus2022.appspot.com",
  messagingSenderId: "287149379102",
  appId: "1:287149379102:web:fde57dd98655b75aaba80f",
  measurementId: "G-YJP90924FY"
});

export default firebaseConfig;