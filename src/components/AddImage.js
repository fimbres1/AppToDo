import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { ButtonGroup } from "@mui/material";

// function UploadImage() {
//     // State to store uploaded file
//     const [file, setFile] = useState("");

//     // progress
//     const [percent, setPercent] = useState(0);

//     // Handle file upload event and update state
//     function handleChange(event) {
//         setFile(event.target.files[0]);
//     }

//     const handleUpload = () => {
//         if (!file) {
//             alert("Please upload an image first!");
//         }

//         const storageRef = ref(storage, `/files/${file.name}`);

//         // progress can be paused and resumed. It also exposes progress updates.
//         // Receives the storage reference and the file to upload.
//         const uploadTask = uploadBytesResumable(storageRef, file);

//         uploadTask.on(
//             "state_changed",
//             (snapshot) => {
//                 const percent = Math.round(
//                     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//                 );

//                 // update progress
//                 setPercent(percent);
//             },
//             (err) => console.log(err),
//             () => {
//                 // download url
//                 getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//                     console.log(url);
//                 });
//             }
//         );
//     };

//     return (
//         <div>
//             <ButtonGroup className="add-image-group">
//             <input type="file" onChange={handleChange} accept="/image/*" className="select-image"/>
//             <button onClick={handleUpload} className="upload-to-firebase" >Upload Image</button>
//             </ButtonGroup>
//         </div>
//     );
// }

// export default UploadImage;
