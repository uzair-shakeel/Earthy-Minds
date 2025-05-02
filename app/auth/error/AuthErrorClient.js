"use client";

import { useSearchParams } from "next/navigation";

export default function AuthErrorClient() {
  const searchParams = useSearchParams();
  const errorCode = searchParams.get("code") || "unknown-error";
  const errorMessage =
    searchParams.get("message") ||
    "An unknown error occurred during authentication.";

  return (
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
        Authentication Error
      </h2>

      <div className="bg-red-50 p-4 rounded-md mb-6">
        <p className="font-medium text-red-800">Error: {errorCode}</p>
        <p className="text-sm text-red-700">{errorMessage}</p>
      </div>

      <p className="text-lg font-lora mb-6">
        Something went wrong with the authentication process. Please try again
        or contact support if the problem persists.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/"
          className="font-cinzel text-black border-2 border-black bg-orange px-6 py-2 rounded-lg text-lg font-bold inline-block"
        >
          Return Home
        </a>

        <a
          href="mailto:support@earthyminds.com"
          className="font-cinzel text-orange border-2 border-orange bg-transparent px-6 py-2 rounded-lg text-lg font-bold inline-block"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
