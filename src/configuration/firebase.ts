import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDuDC-HqsY8Twl6mhgXKcHszL66yUUPorU",
    authDomain: "nieidzsamnaegzamin-3d87b.firebaseapp.com",
    databaseURL: "https://nieidzsamnaegzamin-3d87b.firebaseio.com",
    projectId: "nieidzsamnaegzamin-3d87b",
    storageBucket: "",
    messagingSenderId: "453891393309",
    appId: "1:453891393309:web:617c00b087110e20",
};
// Initialize Firebase
const firebaseClient = firebase.initializeApp(firebaseConfig);
export default firebaseClient;
export const firestore = firebaseClient.firestore();
