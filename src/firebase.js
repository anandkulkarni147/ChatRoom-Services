import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOPO5Ig-8eKpbTKcN8bFWlmfulFteXbCo",
    authDomain: "chatroomservices.firebaseapp.com",
    databaseURL: "https://chatroomservices.firebaseio.com",
    projectId: "chatroomservices",
    storageBucket: "chatroomservices.appspot.com",
    messagingSenderId: "279855679045",
    appId: "1:279855679045:web:903002d53f9da3f521452c",
    measurementId: "G-FJF1G1S5NW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;