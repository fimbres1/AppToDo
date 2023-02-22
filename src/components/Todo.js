import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function ToDo({
    ToDo,
    toggleComplete,
    handleDelete,
    handelEdit,
}){
    const[newTitle, setNewTitle] = React.useState(ToDo.title);

    const handleChange = (e) => {
        e.preventDefault();
        if (ToDo.complete === true){
           setNewTitle(ToDo.title); 
        }else{
            ToDo.title = "";
            setNewTitle(e.target.value);
        }
    };
    return(
        <div className="ToDo">
            <input
                style={{textDecoration: ToDo.completed && "line-through"}}
                type="text"
                value={ToDo.title === "" ? newTitle : ToDo.title}
                className="list"
                onChange={handleChange}
            />
            <div>
                <button
                className="button-complete"
                onClick={() => toggleComplete(ToDo)}
                >
                    <CheckCircleIcon id="i"/>
                </button>
                <button
                className="button-edit"
                onClick={() => handelEdit(ToDo, newTitle)}
                >
                    <EditIcon id="i" />
                </button>
                <button
                className="button-delete"
                onClick={() => handleDelete(ToDo.id)}
                >
                    <DeleteIcon id="i" />
                </button>
            </div>
        </div>
    );
}