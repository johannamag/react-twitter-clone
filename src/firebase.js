import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHZK5-Tvhv3fyI3ugbNl1V4UAzaclbPU8",
  authDomain: "react-twitter-clone-johannamag.firebaseapp.com",
  databaseURL: "https://react-twitter-clone-johannamag.firebaseio.com",
  projectId: "react-twitter-clone-johannamag",
  storageBucket: "react-twitter-clone-johannamag.appspot.com",
  messagingSenderId: "1002408866334",
  appId: "1:1002408866334:web:86f6d9b0d882a909ebf40f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
