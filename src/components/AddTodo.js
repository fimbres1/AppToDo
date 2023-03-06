import React from "react";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");
  var uid2=null;
  onAuthStateChanged(auth, (user) => {
    if(user) {
     uid2=(user.uid);
    } else {
      uid2=null;
    }

 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    onAuthStateChanged(auth, (user) => {
      if(!user){
        alert("Inicia sesión para agregar una nueva tarea")
      } else
      {
        console.log("")
      }
    });

    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
        user: uid2
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Ingresa una tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Agregar</button>
      </div>
    </form>
  );
}
