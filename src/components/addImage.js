import { storage, storageRef } from "../firebase";
import { uploadBytes } from "firebase/storage";

function addImage(){

uploadBytes(storageRef).then ((snapshot) => {
    console.log("Uploaded a file")
})
}

export default addImage
