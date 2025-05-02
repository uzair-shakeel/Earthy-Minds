"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { auth } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#EDE8D0",
    borderRadius: "8px",
    padding: "30px",
    height: "90%",
    width: "90%",
    maxWidth: "900px",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
};

const SignupModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [modalReady, setModalReady] = useState(false);
  const [firebaseStatus, setFirebaseStatus] = useState("initializing");

  // Wait until component is mounted to set the app element
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Use a specific div inside the modal as the app element
      Modal.setAppElement("#__next");
      setModalReady(true);

      // Check Firebase auth status
      if (auth) {
        setFirebaseStatus("ready");
      } else {
        setFirebaseStatus("error");
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (firebaseStatus !== "ready") {
      setError(
        "Firebase authentication is not available. Please try again later."
      );
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Create user with email in Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        generateTempPassword()
      );

      // Send email verification
      await sendEmailVerification(userCredential.user);

      // Show confirmation modal
      setIsConfirmation(true);
    } catch (error) {
      console.error("Error signing up:", error);

      // Handle specific Firebase errors
      if (error.code === "auth/email-already-in-use") {
        setError(
          "This email is already registered. Please use a different email."
        );
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (error.code === "auth/configuration-not-found") {
        setError(
          "Firebase configuration issue. Please check if Firebase is properly configured."
        );
      } else if (error.code === "auth/network-request-failed") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(`An error occurred: ${error.message || "Unknown error"}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate a random temporary password for account creation
  const generateTempPassword = () => {
    return Math.random().toString(36).slice(-12);
  };

  const closeModal = () => {
    setIsConfirmation(false);
    setEmail("");
    setError("");
    onRequestClose();
  };

  // Don't render the modal until we're ready on the client side
  if (!modalReady) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Signup Modal"
      ariaHideApp={false} // This prevents the aria-hidden warning
    >
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        aria-label="Close modal"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {!isConfirmation ? (
        <div className="text-center">
          <h2 className="font-cinzel text-2xl font-bold mb-6">
            Join The Fellowship of
            <br />
            Earthy Minds. Your sign-up
            <br />
            helps to build this
            <br />
            adventure.
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full max-w-[350px] p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
              required
            />

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting || firebaseStatus !== "ready"}
              className="font-cinzel text-black border-2 border-black bg-orange w-[164px] h-[50px] rounded-lg text-[20px] font-bold disabled:opacity-50"
            >
              {isSubmitting ? "Joining..." : "Join Quest"}
            </button>
          </form>

          <p className="text-sm font-lora mt-6">
            We'll only send game updates, early access
            <br />
            and your first quest. No spam, ever.
          </p>

          {firebaseStatus === "error" && (
            <p className="mt-4 text-xs text-red-500">
              Firebase connection issue. Please try again later.
            </p>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="font-cinzel text-2xl font-bold mb-6">
            You're Almost There...
          </h2>

          <div className="mb-6">
            <p className="font-lora mb-6">
              Check your inbox now and confirm your email.
            </p>
            <p className="font-lora">
              This keeps your quest emails out of the spam woods.
            </p>
          </div>

          <button
            onClick={closeModal}
            className="font-cinzel text-black border-2 border-black bg-orange w-[164px] h-[50px] rounded-lg text-[20px] font-bold mt-4"
          >
            Close
          </button>
        </div>
      )}
    </Modal>
  );
};

export default SignupModal;
