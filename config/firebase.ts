// /config/firebase.js

import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLnPkMQVi7MisGDe3BV65pS7tlTnY-5bo",
  authDomain: "devstory-b0f38.firebaseapp.com",
  projectId: "devstory-b0f38",
  storageBucket: "devstory-b0f38.appspot.com",
  messagingSenderId: "999265466597",
  appId: "1:999265466597:web:3e3b16a644b08a911afc0c",
  measurementId: "G-RSYT6Y39DP",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
