import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import { storage } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import AddImage from "../components/AddImage"


export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
  const [file, setFile] = React.useState("");
  const [percent, setPercent] = React.useState(0);

  function handleImage(event) {
    setFile(event.target.files[0]);
}
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image");
    }
  }

  const storageRef = ref(storage, `/files/${file.name}`);

  const uploadTask = uploadBytesResumable(storageRef, file)

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setPercent(percent);
    },
    (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((URL) => {
        console.log(URL);
      });
    }
  )

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        {/* <button
          className="button-add-image"
        >
            <ImageIcon id="i"/>
        </button> */}
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}
