import firebaseClient from "$configuration/firebase.ts";
import firebase from "firebase";

class FirestoreManager {
    database = firebaseClient;
    public addExam = (exam: Exam) => {
        const result = this.database
            .firestore()
            .collection("winter2020")
            .doc("daStudniaWarszawa")
            .collection("exams")
            .doc(exam.id)
            .set(exam);
        result
            .then(() => {
                //console.log("success");
            })
            .catch(error => console.error(error));
    };
    public deleteExam = (examId: string) => {
        const result = this.database
            .firestore()
            .collection("winter2020")
            .doc("daStudniaWarszawa")
            .collection("exams")
            .doc(examId)
            .delete();
        result
            .then(() => {
                // console.log("success");
            })
            .catch(error => console.error(error));
    };
    public signForExam = (examId: string, fullName: string) => {
        const result = this.database
            .firestore()
            .collection("winter2020")
            .doc("daStudniaWarszawa")
            .collection("exams")
            .doc(examId)
            .update({
                support: firebase.firestore.FieldValue.arrayUnion(fullName),
            });
        result
            .then(() => {
                console.log("success");
            })
            .catch(error => console.error(error));
    };
    public resignFromExam = (examId: string, fullName: string) => {
        const result = this.database
            .firestore()
            .collection("winter2020")
            .doc("daStudniaWarszawa")
            .collection("exams")
            .doc(examId)
            .update({
                support: firebase.firestore.FieldValue.arrayRemove(fullName),
            });
        result
            .then(() => {
                console.log("success");
            })
            .catch(error => console.error(error));
    };
}
export default new FirestoreManager();
