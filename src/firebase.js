import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_AUTH_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_AUTH_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_AUTH_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_AUTH_APP_ID
})

export const auth = app.auth()
export default app