import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4Cd_n4jVrUkAJxoQx-WSEOBm2p0sRQCo",
  authDomain: "clone-fef04.firebaseapp.com",
  databaseURL: "https://clone-fef04.firebaseio.com",
  projectId: "clone-fef04",
  storageBucket: "clone-fef04.appspot.com",
  messagingSenderId: "985975342853",
  appId: "1:985975342853:web:67d76150f5249e1eef996c",
  measurementId: "G-GT7K38BE1M",
});

const auth = firebase.auth();

export { auth };
