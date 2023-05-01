import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAnqsJkhuGrzE5bmawRAIRm3Fw0Nf1Nxcs",
  authDomain: "aluratube-42.firebaseapp.com",
  projectId: "aluratube-42",
  storageBucket: "aluratube-42.appspot.com",
  messagingSenderId: "376228157016",
  appId: "1:376228157016:web:968639cf13a0b54adf1c2d",
};


const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);



