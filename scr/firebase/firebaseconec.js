import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAXAM7R4dkZ8G9wHOXXbrA-pPKTqUT-lTs",
    authDomain: "numeric-span-172108.firebaseapp.com",
    databaseURL: "https://numeric-span-172108.firebaseio.com",
    projectId: "numeric-span-172108",
    storageBucket: "numeric-span-172108.appspot.com",
    messagingSenderId: "852181426030",
    appId: "1:852181426030:web:21daccdbfe27d124e4eb7f",
    measurementId: "G-DP0MKSYG15"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    }

export default firebase;