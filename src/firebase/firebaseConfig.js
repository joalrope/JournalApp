import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


export const firebaseConfig = {
    apiKey: "AIzaSyDheQzGZeyFhN8-PoHGxgkL0r_rik7XYkc",
    authDomain: "angular-html-eb2c4.firebaseapp.com",
    databaseURL: "https://angular-html-eb2c4.firebaseio.com",
    projectId: "angular-html-eb2c4",
    storageBucket: "angular-html-eb2c4.appspot.com",
    messagingSenderId: "547449227890",
    appId: "1:547449227890:web:118981602ee316f29f90eb",
    measurementId: "G-9MZ1SBN2FY"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }