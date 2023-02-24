import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI48CgBDFTakc2wPbwFe2hbkdUeXRdCWQ",
  authDomain: "todo-list-e7202.firebaseapp.com",
  projectId: "todo-list-e7202",
  storageBucket: "todo-list-e7202.appspot.com",
  messagingSenderId: "527408402794",
  appId: "1:527408402794:web:8a351303085e1432d5d513"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};
export { db };
