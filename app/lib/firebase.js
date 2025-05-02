// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your NEW Firebase project configuration
// You must replace these placeholder values with the config from YOUR new Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyCkmuikES9HqBe7KFSHfOJPTS60wX1LOHo",
  authDomain: "prequalification-form-e1360.firebaseapp.com",
  databaseURL:
    "https://prequalification-form-e1360-default-rtdb.firebaseio.com",
  projectId: "prequalification-form-e1360",
  storageBucket: "prequalification-form-e1360.firebasestorage.app",
  messagingSenderId: "485907865379",
  appId: "1:485907865379:web:d5a158c7760e2afee6f696",
  measurementId: "G-EVN8SBHZF3",
};

// Initialize Firebase with the new config
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

console.log("Firebase initialized with NEW project:", firebaseConfig.projectId);

// Export the initialized instances
export { firebaseApp as app, firebaseAuth as auth };
