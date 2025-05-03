"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
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
    height: "697px",
    width: "100%",
    maxWidth: "90%",
    border: "none",
    display:"flex",
    alignItems:"center",
    justifyContent: "center"
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement("#__next");
      setModalReady(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      console.log("Attempting to create user with Firebase:", email);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        generateTempPassword()
      );

      console.log("User created successfully, sending verification");
      await sendEmailVerification(userCredential.user);
      console.log("Verification email sent");

      setIsConfirmation(true);
    } catch (error) {
      console.error("Error signing up:", error);

      if (error.code === "auth/email-already-in-use") {
        setError(
          "This email is already registered. Please use a different email."
        );
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (error.code === "auth/configuration-not-found") {
        setError(
          "Firebase configuration issue. Please ensure you've set up your Firebase project correctly."
        );
      } else if (error.code === "auth/admin-restricted-operation") {
        setError(
          "This operation is restricted. Make sure Email/Password authentication is enabled in your Firebase project."
        );
      } else if (error.code === "auth/operation-not-allowed") {
        setError(
          "Email/Password sign-up is not enabled. Please enable it in the Firebase Console."
        );
      } else if (error.code === "auth/network-request-failed") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(
          `${error.message || "An error occurred during signup."} (${error.code || "unknown"
          })`
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateTempPassword = () => {
    return Math.random().toString(36).slice(-12);
  };

  const closeModal = () => {
    setIsConfirmation(false);
    setEmail("");
    setError("");
    onRequestClose();
  };

  if (!modalReady) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Signup Modal"
      ariaHideApp={false}
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
              disabled={isSubmitting}
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
