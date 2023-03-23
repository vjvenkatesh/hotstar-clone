// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import {getFirestore, collection,getDoc,doc,addDoc,setDoc,updateDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB4i2RNiIMfGQUlNFBNM9bheJ3ogaspZqs",
  authDomain: "hotstar-clone-4c1f7.firebaseapp.com",
  projectId: "hotstar-clone-4c1f7",
  storageBucket: "hotstar-clone-4c1f7.appspot.com",
  messagingSenderId: "79577352849",
  appId: "1:79577352849:web:1d099e58afd6cd397f0d30"
};


const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
// Initialize Firebase

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

export { auth,provider, storage };
export default db;
