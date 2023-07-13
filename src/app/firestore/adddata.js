import firebase_app from "../firebase/config";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function addData(data) {
    let result = null;
    let error = null;

    try {
        result = await addDoc(collection(db, "users"), data);
          //console.log("Document written with ID: ", docRef.id);
} catch (e) {
  //console.error("Error adding document: ", e);
}

    return { result, error };
}