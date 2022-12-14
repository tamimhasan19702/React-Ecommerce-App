import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBc9rnpgI5FKzBWtrM8WQWSi1T2SaYSQMk",
    authDomain: "reactecommerce-9446d.firebaseapp.com",
    projectId: "reactecommerce-9446d",
    storageBucket: "reactecommerce-9446d.appspot.com",
    messagingSenderId: "855757359980",
    appId: "1:855757359980:web:73428ed2268d8b69f70149",
    measurementId: "G-1292HP0ESN"
}

firebase.initializeApp(config);