import firebase from "firebase/compat/"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyALJDEZ9Rs_k10luSSwQBsESvkBqS-KPXU",
  authDomain: "react-depth-course-homework.firebaseapp.com",
  projectId: "react-depth-course-homework",
  storageBucket: "react-depth-course-homework.appspot.com",
  messagingSenderId: "936922420407",
  appId: "1:936922420407:web:0f990920dc4bb49bf96932",
  measurementId: "G-9TDQ1CLMNJ",
}

firebase.initializeApp(firebaseConfig)

const apiKey = firebaseConfig.apiKey
const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()
const realtime = firebase.database()

export { auth, apiKey, firestore, storage, realtime }
