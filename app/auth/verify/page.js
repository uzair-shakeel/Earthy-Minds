import { Suspense } from "react";
import VerifyEmailClient from "./VerifyEmailClient";
import Image from "next/image";

export const dynamic = "force-static";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-[#EDE8D0] flex items-center justify-center px-4">
      <Suspense
        fallback={
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
        }
      >
        <VerifyEmailClient />
      </Suspense>
    </div>
  );
}
