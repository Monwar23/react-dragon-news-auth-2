// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDleKQWg6hroWLTQMSH3tSov30gcfvmYIE",
  authDomain: "react-dragon-news-auth-a809a.firebaseapp.com",
  projectId: "react-dragon-news-auth-a809a",
  storageBucket: "react-dragon-news-auth-a809a.appspot.com",
  messagingSenderId: "159572635696",
  appId: "1:159572635696:web:bc6033d39e3245079ebdf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app