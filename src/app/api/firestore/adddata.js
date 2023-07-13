import firebase_app from "../firebase/config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();

const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

const db = getFirestore(firebase_app)
const docRef = doc(db, dateString, "CCS" );


export default async function addData(data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(docRef, data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}