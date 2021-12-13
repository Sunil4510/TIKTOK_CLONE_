// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBILorVbmwum9Lo9hV5IgNlHNfrYiLvKHY",
  authDomain: "tiktok-7730b.firebaseapp.com",
  projectId: "tiktok-7730b",
  storageBucket: "tiktok-7730b.appspot.com",
  messagingSenderId: "708448891544",
  appId: "1:708448891544:web:483cf03608fc328791d6ed",
  measurementId: "G-4Q62QN018B"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;