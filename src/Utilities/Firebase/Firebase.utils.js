import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithRedirect,
} from 'firebase/auth'
// firebase authentication options

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// fireStore to set the database

const firebaseConfig = {
  apiKey: 'AIzaSyCT8Ks6S7ZMg6QXdJUbXWXJTqyR_j3yLAA',
  authDomain: 'brookeazon.firebaseapp.com',
  projectId: 'brookeazon',
  storageBucket: 'brookeazon.appspot.com',
  messagingSenderId: '724662166288',
  appId: '1:724662166288:web:03c6d345191083e07f7b95',
}

const FirebaseApx = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()

export const signInWithGoooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGooogleRedirect = () =>
  signInWithRedirect(auth, provider)

// firebase config is used to initializeApp and is called as FirebaseApx
// a provider is created as a new GoogleAuthProvider  & auth is created with getAuth both are taken from firebase authentication
// now atlast from same firebase authentication
// we get signInWithPopup which takes both 'auth and provider' and are used as signInWithGoooglePopup to be exported

export const db = getFirestore()

export const createUserDocFromAuth = async (brokeAuth, additionalInfo = {}) => {
  if (!brokeAuth) return

  const userDocRef = doc(db, 'brokes', brokeAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { name, email } = brokeAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        name,
        email,
        createdAt,
        ...additionalInfo,
      })
    } catch (error) {
      console.log('error ', error.message)
    }
  }
}

// a database is created as db from firestore database
// a function createUserDocFromAuth which takes in a user asycnronously
// creates doc collection using database name ,collection name, and uid and is stored as a userDocRef
// a const userSnapshot is where the doc userDocRef is stored

export const createAuthUserEmailandPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}
