import * as firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDUxzGWHedfx9T6SqQiFB7kgreFT2PZfMk",
  authDomain: "demologin-b342c.firebaseapp.com",
  databaseURL: "https://demologin-b342c.firebaseio.com",
  projectId: "demologin-b342c",
  storageBucket: "demologin-b342c.appspot.com",
  messagingSenderId: "145335479197",
  appId: "1:145335479197:web:f2d8a490200e380ed71d74",
  measurementId: "G-Z2Z2SP00CZ",
}

firebase.initializeApp(config)

export const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)
