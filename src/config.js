// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQbjoJeUXSsLuevFHikax7mTqIeUkhwRs",
  authDomain: "coffee-client-side.firebaseapp.com",
  projectId: "coffee-client-side",
  storageBucket: "coffee-client-side.appspot.com",
  messagingSenderId: "573057423632",
  appId: "1:573057423632:web:b4d2d7669e7a7f86dc2d95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;