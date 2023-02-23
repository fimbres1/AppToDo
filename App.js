import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import useFirebaseAuth, { AuthUserProvider } from "./components/googleLogin";




function App() {

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  

  return (
    <AuthUserProvider>
      <div className="App">
        <div className="loginContainer">
          <button className="siG" onClick={useFirebaseAuth}>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt="Trees"
              height="15"
            />
            <p>Iniciar sesión con Google</p>
          </button>
        </div>
        <div>
          <Title />
        </div>
        <div>
          <AddTodo />
        </div>
        {<div className="todo_container">
          {
            todos.map((todo) => (

              <Todo
                key={todo.id}
                todo={todo.title}
                toggleComplete={toggleComplete}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            )
            )
          }
        </div>}
      </div>
    </AuthUserProvider>
  );
}
export default App;