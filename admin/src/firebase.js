// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeHGWav5LLEad_gdeod8R0EiIj3GJcTeo",
  authDomain: "ecommerce-app-6c0e7.firebaseapp.com",
  projectId: "ecommerce-app-6c0e7",
  storageBucket: "ecommerce-app-6c0e7.appspot.com",
  messagingSenderId: "1031434529362",
  appId: "1:1031434529362:web:51a2afdb7ceab072c28d8b",
  measurementId: "G-RS0RZXNSSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export default app;