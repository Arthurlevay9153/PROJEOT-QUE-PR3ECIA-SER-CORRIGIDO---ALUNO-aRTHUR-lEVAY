import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYDio1-we4Bps9uxItU242LBjclSuxvUs",
  authDomain: "biblioteca-bancodedados.firebaseapp.com",
  databaseURL: "https://biblioteca-bancodedados-default-rtdb.firebaseio.com",
  projectId: "biblioteca-bancodedados",
  storageBucket: "biblioteca-bancodedados.appspot.com",
  messagingSenderId: "490469234676",
  appId: "1:490469234676:web:4c2018ce2106b3e00d8ba1",
};

firebase.initializeApp(firebaseConfig);
