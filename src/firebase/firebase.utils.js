import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAEcZDC4sVxeBD2ovf1ib7t32AR7notWwc",
  authDomain: "ecom-cloth-db.firebaseapp.com",
  projectId: "ecom-cloth-db",
  storageBucket: "ecom-cloth-db.appspot.com",
  messagingSenderId: "428337650397",
  appId: "1:428337650397:web:81f46bf133dcf800ff9934",
  measurementId: "G-SMRWQ3DYK2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
