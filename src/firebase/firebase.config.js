// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyB-s6O9bGV7Yq3FPjifhXxe2vUHj_xrlXY",
  //   authDomain: "visa-navigator-7506c.firebaseapp.com",
  //   projectId: "visa-navigator-7506c",
  //   storageBucket: "visa-navigator-7506c.firebasestorage.app",
  //   messagingSenderId: "73800350490",
  //   appId: "1:73800350490:web:24ed5ee1e3c8bbf310caa3",

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
