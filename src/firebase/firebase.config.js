// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPdJubeu_xp-M8LYQ_aoHwDM0izOD8fyE",
  authDomain: "dragon-news-auth-firebase.firebaseapp.com",
  projectId: "dragon-news-auth-firebase",
  storageBucket: "dragon-news-auth-firebase.appspot.com",
  messagingSenderId: "18786365734",
  appId: "1:18786365734:web:aa8495ee7fb70f263b51e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
