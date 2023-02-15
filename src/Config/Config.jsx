import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCz43hMLIfCbe8yYxvLbjnWHVXa2RmwU60",
    authDomain: "fir-7f897.firebaseapp.com",
    projectId: "fir-7f897",
    storageBucket: "fir-7f897.appspot.com",
    messagingSenderId: "1010967659061",
    appId: "1:1010967659061:web:b440d6f3be70f873d0e77c",
    measurementId: "G-DQVM48E7ZY"
  };
  
  

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  export { auth,db }