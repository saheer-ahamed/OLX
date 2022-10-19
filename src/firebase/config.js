import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDAG1gM4g1PeYnz_fFk3uoxkqZ6IdaHVXQ",
    authDomain: "fir-eba2e.firebaseapp.com",
    projectId: "fir-eba2e",
    storageBucket: "fir-eba2e.appspot.com",
    messagingSenderId: "289135728711",
    appId: "1:289135728711:web:43dc8bc392cfa27bf73962",
    measurementId: "G-DS1DF6ESV0"
  };

export default firebase.initializeApp(firebaseConfig) 