"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { auth } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { trackSignup, trackErrorOccurred } from "../utils/analytics";

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
    height: "600px",
    width: "100%",
    maxWidth: "90%",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

      // Track successful signup
      trackSignup("email");

      setIsConfirmation(true);
    } catch (error) {
      console.error("Error signing up:", error);

      // Track signup error
      trackErrorOccurred(
        error.code || "unknown",
        error.message || "Unknown error during signup",
        "signup_modal"
      );

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
          `${error.message || "An error occurred during signup."} (${
            error.code || "unknown"
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
          <h2 className="font-cinzel text-[16px] sm:text-[28px] font-bold mb-7">
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
              className="w-full max-w-[350px] pb-1 px-4 h-[50px] mb-4 border border-black rounded-lg focus:outline-none focus:border-orange"
              required
            />

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 sm:mt-6 font-cinzel text-black border-2 border-black bg-orange w-[121px] h-[39px] rounded-lg text-[16px] font-bold disabled:opacity-50"
            >
              {isSubmitting ? "Joining..." : "Join Quest"}
            </button>
          </form>

          <p className="text-sm font-bold font-lora mt-[58px]">
            We'll only send game updates, early access
            <br />
            and your first quest. No spam, ever.
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="font-cinzel max-w-[300px] mx-auto text-[20px] sm:text-[28px] font-bold mb-6">
            You're Almost There...
          </h2>

          <div className="mb-6 max-w-[375px]">
            <p className="text-[16px] sm:text-[22px] font-bold font-lora">
              Check your inbox now and confirm your email.
            </p>
            <p className="text-[16px] sm:text-[22px] font-bold font-lora">
              This keeps your quest emails out of the spam woods.
            </p>
          </div>

          <button
            onClick={closeModal}
            className="font-cinzel text-black border-2 border-black bg-orange w-[121px] h-[40px] rounded-lg text-[16px] font-bold mt-4"
          >
            Close
          </button>
        </div>
      )}
    </Modal>
  );
};

export default SignupModal;
