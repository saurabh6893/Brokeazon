import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
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
 