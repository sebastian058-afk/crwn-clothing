import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { getFirestorem, doc, setDoc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8nFeIVweHIrtxhbSwFArsrBwp6ik_FEc",
  authDomain: "crown-clothing-a36ad.firebaseapp.com",
  projectId: "crown-clothing-a36ad",
  storageBucket: "crown-clothing-a36ad.appspot.com",
  messagingSenderId: "690303446108",
  appId: "1:690303446108:web:122c21ae5d88ab13038a99",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  propmt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentAuth = async(userAuth, addiitonalInfo = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName, email } = userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...addiitonalInfo,
        })
      }catch(error){
        console.log('Error creating user', error)
      }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return; 
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return; 
  return await signInWithEmailAndPassword(auth, email, password);
}