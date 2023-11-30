import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwTJYq1zrjFKiIGR8Sh00vRi-NBQ1TBes",
  authDomain: "com-agendame-cl.firebaseapp.com",
  projectId: "com-agendame-cl",
  storageBucket: "com-agendame-cl.appspot.com",
  messagingSenderId: "184155197723",
  appId: "1:184155197723:web:27b2832fcc88fd876383be",
  measurementId: "G-G3MVEK5Z00",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
