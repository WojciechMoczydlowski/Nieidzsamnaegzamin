import firebaseClient from "$configuration/firebase.ts";
import uuid from "uuid";

class FirestoreManager {
    public addExam = (exam: Exam) => {
        const database = firebaseClient.firestore();
        const result = database
            .collection("winter2020")
            .doc("daStudniaWarszawa")
            .collection("exams")
            .doc(uuid())
            .set(exam);
        result
            .then(() => {
                console.log("success");
            })
            .catch(error => console.error(error));
    };
}

export default new FirestoreManager();
