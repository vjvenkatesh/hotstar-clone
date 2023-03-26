// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import {getFirestore, collection,getDoc,doc,addDoc,setDoc,updateDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCapTSmg7SblyGPScOAPEmIP7fC5qXQ0xI",
  authDomain: "my-first-35dc7.firebaseapp.com",
  projectId: "my-first-35dc7",
  storageBucket: "my-first-35dc7.appspot.com",
  messagingSenderId: "155673630117",
  appId: "1:155673630117:web:028724c1b01c1d2e15444c"
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
