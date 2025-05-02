"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function VerificationSuccessClient() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

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
          Email Verified Successfully!
        </h2>

        <div className="bg-green-50 p-4 rounded-md mb-6">
          <p className="font-medium text-green-800">Your journey begins now!</p>
          <p className="text-sm text-green-700">
            You can now sign in to your account.
          </p>
        </div>

        <p className="text-lg font-lora mb-6">
          Welcome to the Fellowship of Earthy Minds!
          <br />
          Your ecological adventure awaits in Biolysium.
        </p>

        <p className="text-sm font-lora text-gray-600 mb-4">
          Redirecting to homepage in {countdown} seconds...
        </p>

        <button
          onClick={() => router.push("/")}
          className="font-cinzel text-black border-2 border-black bg-orange px-6 py-2 rounded-lg text-lg font-bold"
        >
          Start Your Adventure
        </button>
      </div>
    </div>
  );
}
