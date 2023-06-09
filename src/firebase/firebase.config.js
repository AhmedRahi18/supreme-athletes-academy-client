// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbtJSRRBIL01HzY9oABFcVg9P9XYFf3ZY",
  authDomain: "supreme-athletes-academy.firebaseapp.com",
  projectId: "supreme-athletes-academy",
  storageBucket: "supreme-athletes-academy.appspot.com",
  messagingSenderId: "674444157953",
  appId: "1:674444157953:web:b21be67cc09b17c99acc00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;