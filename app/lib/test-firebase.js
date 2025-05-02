"use client";

import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";

// This component directly tests Firebase authentication without our abstraction layer
export default function TestFirebase() {
  const [status, setStatus] = useState("Initializing...");
  const [error, setError] = useState(null);

  useEffect(() => {
    const testFirebase = async () => {
      try {
        // Direct Firebase config from environment variables
        const firebaseConfig = {
          apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
          authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
          messagingSenderId:
            process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        };

        setStatus(
          "Config loaded: " +
            JSON.stringify(
              Object.fromEntries(
                Object.entries(firebaseConfig).map(([key, value]) => [
                  key,
                  value ? `${value.substring(0, 3)}...` : "missing",
                ])
              )
            )
        );

        // Initialize Firebase directly
        const app = initializeApp(firebaseConfig, "directTest");
        setStatus("Firebase initialized successfully");

        // Get auth
        const auth = getAuth(app);
        setStatus("Auth obtained");

        // Try a basic Firebase operation - anonymous sign in
        try {
          await signInAnonymously(auth);
          setStatus("Firebase authentication working! 🎉");
        } catch (authError) {
          setStatus(`Firebase auth test failed: ${authError.code}`);
          setError(authError);
        }
      } catch (initError) {
        setStatus("Firebase initialization failed");
        setError(initError);
      }
    };

    testFirebase();
  }, []);

  return (
    <div className="hidden">
      {/* Hidden from UI but visible in console */}
      <pre>{JSON.stringify({ status, error: error?.message }, null, 2)}</pre>
    </div>
  );
}
