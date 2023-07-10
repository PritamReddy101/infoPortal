import firebase from "firebase";

var firebaseApp = firebase.initializeApp({

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  apiKey: "AIzaSyCjXRNGeWeKp_THCg5Jf5F0W2yQK-Csas0",
  authDomain: "tworks-6ac01.firebaseapp.com",
  projectId: "tworks-6ac01",
  storageBucket: "tworks-6ac01.appspot.com",
  messagingSenderId: "912113333051",
  appId: "1:912113333051:web:7b3a633b2430ea42ac7d1e",
  measurementId: "G-YM14Y0TYE9"

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

});

var db = firebaseApp.firestore();

export { db };
