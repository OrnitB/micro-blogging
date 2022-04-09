// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJKfFpVTfjgb4BE49kl2ffX5pO6CmrLxM",
  authDomain: "ornit-microblogging-app.firebaseapp.com",
  projectId: "ornit-microblogging-app",
  storageBucket: "ornit-microblogging-app.appspot.com",
  messagingSenderId: "926771316312",
  appId: "1:926771316312:web:5d17977a3ff7026f876c2d",
  measurementId: "G-KTVPZYQ08J",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
// db.settings({ timestampsInSnapshots: true });
// const tweetsRef = db.collection(`tweets`).add({
//   fullName: this.state.fullName,
//   email: this.state.email,
// });
