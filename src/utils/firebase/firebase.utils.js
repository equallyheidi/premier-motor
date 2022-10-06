import { initializeApp } from 'firebase/app';

import {
     getAuth, 
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNSDmuGmgyQ0qtAQnzVNIBDrGmepHUhjg",
    authDomain: "premier-motor-db.firebaseapp.com",
    projectId: "premier-motor-db",
    storageBucket: "premier-motor-db.appspot.com",
    messagingSenderId: "1027278319437",
    appId: "1:1027278319437:web:12e852c39f686d78c49104"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
          await setDoc(userDocRef, {
              displayName,
              email,
              createdAt
          });
      } catch (error) {
          console.log('error creating user', error.message);
      }
    }
      return userDocRef;
  };