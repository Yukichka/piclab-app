import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAO7wsQBRFewVCuyFkGPQxQKH4AN-uug1g",
  authDomain: "piclab-cbe78.firebaseapp.com",
  databaseURL: "https://piclab-cbe78.firebaseio.com",
  projectId: "piclab-cbe78",
  storageBucket: "piclab-cbe78.appspot.com",
  messagingSenderId: "822034909965",
  appId: "1:822034909965:web:87eb6189ad12d7abefbe44",
  measurementId: "G-GGJ6KBSFK4"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database ;
