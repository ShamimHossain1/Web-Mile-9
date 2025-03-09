// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsz5deOt06teK6y52Yzr-THK0UwALvFH4",
  authDomain: "dragonnews-d8743.firebaseapp.com",
  projectId: "dragonnews-d8743",
  storageBucket: "dragonnews-d8743.firebasestorage.app",
  messagingSenderId: "602657135716",
  appId: "1:602657135716:web:3f7edbd9d291c241899371"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;