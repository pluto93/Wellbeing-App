// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLr1vgBbBeupA0o0jEyIUZ8P5eSjzL-AM",
  authDomain: "project-auth-e5861.firebaseapp.com",
  projectId: "project-auth-e5861",
  storageBucket: "project-auth-e5861.appspot.com",
  messagingSenderId: "113504955748",
  appId: "1:113504955748:web:3f4a08f74d8d4635985e71",
  measurementId: "G-XLH5N5TMKE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);