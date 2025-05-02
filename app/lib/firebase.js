// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if Firebase config is properly loaded
const isFirebaseConfigValid = () => {
  const requiredFields = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ];

  const missingFields = requiredFields.filter(
    (field) => !firebaseConfig[field]
  );

  if (missingFields.length > 0) {
    console.error(
      `Missing Firebase config fields: ${missingFields.join(", ")}`
    );
    return false;
  }

  return true;
};

// Initialize Firebase - properly handle SSR
let app;
let auth;

// Only initialize in client-side environment
if (typeof window !== "undefined") {
  // Log the Firebase config for debugging (don't do this in production)
  console.log(
    "Initializing Firebase with config:",
    Object.keys(firebaseConfig).reduce((acc, key) => {
      acc[key] = firebaseConfig[key]
        ? `${firebaseConfig[key].substring(0, 5)}...`
        : "missing";
      return acc;
    }, {})
  );

  if (!getApps().length && isFirebaseConfigValid()) {
    try {
      app = initializeApp(firebaseConfig);
      auth = getAuth(app);
      console.log("Firebase initialized successfully");
    } catch (error) {
      console.error("Firebase initialization error:", error);
    }
  } else if (getApps().length) {
    app = getApps()[0]; // if already initialized, use that one
    auth = getAuth(app);
    console.log("Firebase already initialized, reusing existing app");
  } else {
    console.error("Unable to initialize Firebase - invalid config");
  }
}

export { app, auth };
