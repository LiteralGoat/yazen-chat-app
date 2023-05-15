import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyByaJx2XJdpSOCSmlcH3ISqq8MRh5GZdMY",
  authDomain: "yazen-chat-app.firebaseapp.com",
  projectId: "yazen-chat-app",
  storageBucket: "yazen-chat-app.appspot.com",
  messagingSenderId: "382922825632",
  appId: "1:382922825632:web:2bb9ac0d56780e49338ec5"
}

const FIREBASE_APP = initializeApp(firebaseConfig)
const FIREBASE_DB = getFirestore(FIREBASE_APP)
const FIREBASE_AUTH = getAuth(FIREBASE_APP)

export {
  FIREBASE_APP,
  FIREBASE_DB,
  FIREBASE_AUTH
}