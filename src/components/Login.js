import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";



function Login({setIsAuth}){

var uid = ''

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
        })

        onAuthStateChanged(auth, (user) => {
            if(user) {
             alert("Bienvenido " + user.displayName)
            } 
         });


    };

console.log(uid)

    return <div className="loginPage">
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
        <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt="Trees"
              height="10"
            />
            Iniciar Sesión con Google
        </button>
    </div>;
}

// onAuthStateChanged(auth, (user) => {
//     if(user) {
//      var uid=(user.uid);
//      console.log(uid)
//     }
//  });

export default Login;