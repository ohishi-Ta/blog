import { initializeApp } from "firebase/app";

//追記 start
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//追記 end

const firebaseConfig = {
  apiKey: "AIzaSyA_tW8Byi-E0Lc8Mvnx4pt7avLNzTH2A0k",
  authDomain: "blog-b5636.firebaseapp.com",
  projectId: "blog-b5636",
  storageBucket: "blog-b5636.appspot.com",
  messagingSenderId: "524305838457",
  appId: "1:524305838457:web:e0a7f33ca34a2e321a7fa8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//追記 start
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
//追記 end
