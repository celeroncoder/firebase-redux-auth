import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDV2dCv757sckxnFobCek0QNGXGEz8zVFM",
  authDomain: "redux-firebaseauth.firebaseapp.com",
  projectId: "redux-firebaseauth",
  storageBucket: "redux-firebaseauth.appspot.com",
  messagingSenderId: "999041673911",
  appId: "1:999041673911:web:06e3f171f7c349f8eb3b32"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }