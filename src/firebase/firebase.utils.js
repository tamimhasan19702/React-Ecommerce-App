import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBc9rnpgI5FKzBWtrM8WQWSi1T2SaYSQMk",
    authDomain: "reactecommerce-9446d.firebaseapp.com",
    projectId: "reactecommerce-9446d",
    storageBucket: "reactecommerce-9446d.appspot.com",
    messagingSenderId: "855757359980",
    appId: "1:855757359980:web:73428ed2268d8b69f70149",
    measurementId: "G-1292HP0ESN"
}


export const createUserProfileDocument = async (userAuth,additionalData) => {
if (!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get()

console.log(snapShot)

if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    }catch(error){
     console.log('error creating user', error.message)
    }
  }
  return userRef;

}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;