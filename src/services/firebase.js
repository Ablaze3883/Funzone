import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyCpOH0fU61dtuIRDXC_ccWKUErANUO3tBI",
  authDomain: "FunZone-b275f.firebaseapp.com",
  projectId: "FunZone-b275f",
  storageBucket: "FunZone-b275f.appspot.com",
  messagingSenderId: "14952586428",
  appId: "1:14952586428:web:8237f72a645bd0f845c4b9",
  measurementId: "G-EXR5NDV6TP"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth }
