// Import the functions you need from the SDKs you need
import  {initializeApp} from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD--TR_s45NGbNd_8YUug23f6Xhtx9Vnyk",
  authDomain: "auth-264e9.firebaseapp.com",
  projectId: "auth-264e9",
  storageBucket: "auth-264e9.appspot.com",
  messagingSenderId: "769287083181",
  appId: "1:769287083181:web:cd14664a491c906a4c2224",
  measurementId: "G-T3L0HD2BYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app) 
const provider = new GoogleAuthProvider(auth);  
export {auth , provider};