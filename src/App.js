import "./App.css";
import React, { useState, useRef } from "react";
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
import { auth, db } from "./firebase";
import Login from "./components/Login";
import { signOut } from "firebase/auth";
// import AddImage from "./components/AddImage";



function App() {


  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then (() => {
      localStorage.clear()
      setIsAuth(false)
      alert("Se ha cerrado la sesión")
    })
  };
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
    alert("Tarea actualizada")
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    alert("Tarea eliminada")
  };
  // const handleImage = async (id) => {
  //   await addImage(File())
  // };


  return (
    <div className="App">
      {!isAuth ? <Login 
        setIsAuth={setIsAuth}
      /> : <button className="signUserOut" onClick={signUserOut}> Cerrar Sesión</button>}
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      {/* <div>
        <AddImage />
      </div> */}
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
