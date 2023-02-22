import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB0mcTj0zWF8nGJDFeu2bzHhHm1kXz-YLI",
    authDomain: "todo-app-e87bc.firebaseapp.com",
    projectId: "todo-app-e87bc",
    storageBucket: "todo-app-e87bc.appspot.com",
    messagingSenderId: "682858553813",
    appId: "1:682858553813:web:9541dc51005c1814e05d5c"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export {auth,provider};
  export {db};