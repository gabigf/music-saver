import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBC5VbAt5MpwiljP8BoeirQJIiAvh5K_VY",
  authDomain: "music-saver-7aed4.firebaseapp.com",
  projectId: "music-saver-7aed4",
  storageBucket: "music-saver-7aed4.appspot.com",
  messagingSenderId: "114535918782",
  appId: "1:114535918782:web:7fa78abe2a9152b4ebc2ef"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export { projectFirestore, projectAuth, projectStorage, timestamp }