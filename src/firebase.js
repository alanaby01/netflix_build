import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAiRbpjc246Bs7lcot9Zv3XLRv_x3-PHAg",
    authDomain: "netflix-app-16384.firebaseapp.com",
    projectId: "netflix-app-16384",
    storageBucket: "netflix-app-16384.appspot.com",
    messagingSenderId: "789547820294",
    appId: "1:789547820294:web:bf2872e5784e663450aa87"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, createUserWithEmailAndPassword };
export default db;
