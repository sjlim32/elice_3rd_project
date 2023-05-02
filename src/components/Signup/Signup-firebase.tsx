import firebase ,{ initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCledh9bZLoEDkDP-KVmqNQgY3z2YrU8F4",
    authDomain: "rd-project-10team.firebaseapp.com",
    projectId: "rd-project-10team",
    storageBucket: "rd-project-10team.appspot.com",
    messagingSenderId: "437706185090",
    appId: "1:437706185090:web:c18ca95279cf9fb56e979b",
    measurementId: "G-HNLKT0C1Z2"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});