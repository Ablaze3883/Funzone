import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyC6JDbmiqkFabp5Jz5FExLVa9v5vHN8nhc",
  authDomain: "funzone-f658c.firebaseapp.com",
  projectId: "funzone-f658c",
  storageBucket: "funzone-f658c.appspot.com",
  messagingSenderId: "908588821842",
  appId: "1:908588821842:web:666264249077f2c3bf9e8b",
  measurementId: "G-48T9YEF5TR"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth }
