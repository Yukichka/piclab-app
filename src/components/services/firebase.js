import * as firebase from "firebase";
import config from "./firebase-config";

const firebaseConfig = config;

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
