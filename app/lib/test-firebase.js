"use client";

import { useEffect, useState } from "react";
import { auth } from "./firebase";
import {
  signInAnonymously,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

// This component tests Firebase authentication using our shared instance
export default function TestFirebase() {
  const [status, setStatus] = useState("Initializing...");
  const [error, setError] = useState(null);
  const [authDetails, setAuthDetails] = useState({});

  useEffect(() => {
    const testFirebase = async () => {
      try {
        // Print Firebase configuration information (without sensitive details)
        setStatus("Checking Firebase configuration...");

        if (!auth) {
          setStatus("Error: Firebase auth is not initialized");
          return;
        }

        // Display Firebase auth details
        setAuthDetails({
          authDomain: auth.config?.authDomain || "Not available",
          apiKey: auth.app.options.apiKey ? "Configured" : "Not configured",
          projectId: auth.app.options.projectId || "Not available",
        });

        setStatus("Testing anonymous authentication...");

        // Try a basic Firebase operation - anonymous sign in
        try {
          const userCredential = await signInAnonymously(auth);
          setStatus(
            `Firebase authentication working! Anonymous user created with ID: ${userCredential.user.uid}`
          );

          // Sign out the anonymous user
          await signOut(auth);
          setStatus("Anonymous authentication successful, user signed out");
        } catch (authError) {
          console.error("Auth test error:", authError);
          setStatus(`Firebase auth test failed: ${authError.code}`);
          setError(authError);

          // Provide specific guidance for common errors
          if (authError.code === "auth/admin-restricted-operation") {
            setStatus(
              "Error: Anonymous sign-in is disabled. Please enable Anonymous authentication in your Firebase project."
            );
          }
        }
      } catch (error) {
        console.error("Test failed:", error);
        setStatus("Firebase test failed with unexpected error");
        setError(error);
      }
    };

    testFirebase();
  }, []);

  return (
    <div className="mb-6 p-3 bg-amber-100 text-amber-900 rounded-md">
      <h3 className="font-bold">Firebase Connection Status</h3>
      <p>{status}</p>

      {Object.keys(authDetails).length > 0 && (
        <div className="mt-2 text-sm">
          <p>
            <strong>Firebase Settings:</strong>
          </p>
          <ul className="list-disc list-inside pl-2">
            <li>Project ID: {authDetails.projectId}</li>
            <li>Auth Domain: {authDetails.authDomain}</li>
            <li>API Key: {authDetails.apiKey}</li>
          </ul>
        </div>
      )}

      {error && (
        <div className="mt-2">
          <p className="text-red-500 font-semibold">
            Error: {error.code || "Unknown error"}
          </p>
          <p className="text-red-500 text-sm">{error.message}</p>
          <p className="mt-2 text-sm">
            <strong>Troubleshooting:</strong> Ensure you've created a new
            Firebase project and enabled both Email/Password and Anonymous
            authentication in the Firebase Console.
          </p>
        </div>
      )}
    </div>
  );
}
