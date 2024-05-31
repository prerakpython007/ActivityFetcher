// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZxvrARpZ6Ijt34PNU_4IIFvBvWEo8Df0",
  authDomain: "activity-fetcher-4995e.firebaseapp.com",
  projectId: "activity-fetcher-4995e",
  storageBucket: "activity-fetcher-4995e.appspot.com",
  messagingSenderId: "85704663636",
  appId: "1:85704663636:web:e069016d9d4a54e3a983c1",
  measurementId: "G-CTCY5VTP30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);