"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { applyActionCode } from "firebase/auth";
import { auth } from "../../lib/firebase";
import Image from "next/image";

export default function VerifyEmailClient() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("verifying");
  const [error, setError] = useState(null);

  const actionCode = searchParams.get("oobCode");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!actionCode) {
        setStatus("error");
        setError(
          "Missing verification code. Please check your verification link."
        );
        return;
      }

      try {
        await applyActionCode(auth, actionCode);
        setStatus("success");
      } catch (error) {
        console.error("Error verifying email:", error);
        setStatus("error");
        setError(error.message || "Failed to verify email. Please try again.");
      }
    };

    verifyEmail();
  }, [actionCode]);

  if (status === "verifying") {
    return (
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange"></div>
        </div>
        <h2 className="text-2xl font-bold font-cinzel mb-4">
          Verifying Your Email
        </h2>
        <p className="text-lg font-lora">
          Please wait while we confirm your email address...
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-red-500 py-4 flex justify-center">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="Earthy Minds - Rise of the Wild"
              width={40}
              height={40}
            />
            <div>
              <h1 className="text-white font-cinzel text-lg font-bold leading-tight">
                Earthy Minds
              </h1>
              <p className="text-white font-cinzel text-xs font-medium">
                Rise of the Wild
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 text-center">
          <div className="mb-6">
            <svg
              className="mx-auto w-16 h-16 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>

          <h2 className="text-2xl font-bold font-cinzel mb-4">
            Verification Failed
          </h2>

          <p className="text-lg font-lora mb-6">{error}</p>

          <a
            href="/"
            className="font-cinzel text-black border-2 border-black bg-orange px-6 py-2 rounded-lg text-lg font-bold inline-block"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  // Success state
  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-orange py-4 flex justify-center">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="Earthy Minds - Rise of the Wild"
            width={40}
            height={40}
          />
          <div>
            <h1 className="text-black font-cinzel text-lg font-bold leading-tight">
              Earthy Minds
            </h1>
            <p className="text-black font-cinzel text-xs font-medium">
              Rise of the Wild
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>

        <h2 className="text-2xl font-bold font-cinzel mb-4">
          Your Email Has Been Verified!
        </h2>

        <p className="text-lg font-lora mb-6">
          Welcome to the Fellowship of Earthy Minds!
          <br />
          Your journey to save Biolysium begins now.
        </p>

        <a
          href="/"
          className="font-cinzel text-black border-2 border-black bg-orange px-6 py-2 rounded-lg text-lg font-bold inline-block"
        >
          Start Your Adventure
        </a>
      </div>
    </div>
  );
}
