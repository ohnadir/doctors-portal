// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfPTWJNH7H0wpk3gvjIWQfDHoQQAUnm2I",
  authDomain: "doctor-portals-c4e73.firebaseapp.com",
  projectId: "doctor-portals-c4e73",
  storageBucket: "doctor-portals-c4e73.appspot.com",
  messagingSenderId: "999081887997",
  appId: "1:999081887997:web:4b12bd314b4a3b3f0a9694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;