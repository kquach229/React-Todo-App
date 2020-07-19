// Import Firebase
import firebase from "firebase";

// Store the config info in the firebase initializeApp method and store the method in a
// a variable
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCiuyuum19gxMxXZpc6DverYDPUQ8tl2zA",
    authDomain: "todo-app-cp-48269.firebaseapp.com",
    databaseURL: "https://todo-app-cp-48269.firebaseio.com",
    projectId: "todo-app-cp-48269",
    storageBucket: "todo-app-cp-48269.appspot.com",
    messagingSenderId: "442272012515",
    appId: "1:442272012515:web:183a475a47a57661c9cdd6",
    measurementId: "G-D50EY8C2S5"
});

// The firebaseApp config has a firestore method. Store it in a variable
// called db
const db = firebaseApp.firestore();

// Export the db
export default db;