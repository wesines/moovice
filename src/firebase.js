// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import { doc, getFirestore, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtcrlJ43Q8Xq-BEegZOsnnthj_2nplQ2s",
  authDomain: "moovice-5923e.firebaseapp.com",
  projectId: "moovice-5923e",
  storageBucket: "moovice-5923e.appspot.com",
  messagingSenderId: "957615607365",
  appId: "1:957615607365:web:2f0d2c0374cce4735f5d2c",
  measurementId: "G-YSSZBLRXHR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db =getFirestore(app);
export const storage = getStorage(app);


export async function ajout(film,email){
    //base, nom de la collection,document
    setDoc(doc(db,"moovices",email),film).then((response)=>{
console.log(response);
    })
    .catch((err)=>{
        console.log("erreur",err);
    })
}


export async function signUp(email,password) {
    createUserWithEmailAndPassword(auth,email,password).then((reponse)=>{
        console.log(reponse);
    })
    .catch((err)=>{
        console.log("erreur",err);
    })
}