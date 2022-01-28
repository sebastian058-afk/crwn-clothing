import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAlqyYnZIjKpwb8LdQh6plQoxSybh6ZuHQ",
  authDomain: "crwn-db-e8e3c.firebaseapp.com",
  projectId: "crwn-db-e8e3c",
  storageBucket: "crwn-db-e8e3c.appspot.com",
  messagingSenderId: "702599137686",
  appId: "1:702599137686:web:fbff760c07482f447135b7",
  measurementId: "G-27TVH5GJY6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;