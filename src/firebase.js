import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDM061PTw27kAWMvZnGFguQI0fniV2D190",
    authDomain: "clone-f6676.firebaseapp.com",
    databaseURL: "https://clone-f6676.firebaseio.com",
    projectId: "clone-f6676",
    storageBucket: "clone-f6676.appspot.com",
    messagingSenderId: "428218446525",
    appId: "1:428218446525:web:8d4dca8293523d0e3c3dd4",
    measurementId: "G-BNCX6QGNF4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};