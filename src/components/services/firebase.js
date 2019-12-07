import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "./firebase-config";

const firebaseConfig = config;

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
