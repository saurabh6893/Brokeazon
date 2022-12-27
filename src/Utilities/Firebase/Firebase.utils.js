import { async } from '@firebase/util'
import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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

export const db = getFirestore()

export const createUserDocFromAuth = async (brokeAuth) => {
  const userDocRef = doc(db, 'brokes', brokeAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = brokeAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('error ', error.message)
    }
  }
}
