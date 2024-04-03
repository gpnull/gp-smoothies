import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBd0HcZcf3Xkg4d4Y20uiq_-pW7p6xulIo",
    authDomain: "gp-smoothies.firebaseapp.com",
    databaseURL: "https://gp-smoothies.firebaseio.com",
    projectId: "gp-smoothies",
    storageBucket: "gp-smoothies.appspot.com",
    messagingSenderId: "913504565033",
    appId: "1:913504565033:web:90474c8b124e95bb36a938",
    measurementId: "G-MRE96X2YSW"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
// firebase.analytics();

export default firebaseApp.firestore()