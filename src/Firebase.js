import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAThzcAyBomVYqIf5nX0YUvpDzouWTYrA0",
  authDomain: "silksaree-104df.firebaseapp.com",
  databaseURL:
    "https://silksaree-104df-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "silksaree-104df",
  storageBucket: "silksaree-104df.appspot.com",
  messagingSenderId: "105504480244",
  appId: "1:105504480244:web:029b3831937ec8d599f7a1",
  measurementId: "G-Z7METD9D29",
});

// Initialize Firebase
var db = firebaseApp.firestore();
export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);
export const storage = getStorage(firebaseApp);
export { db };
