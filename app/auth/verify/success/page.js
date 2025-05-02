import { Suspense } from "react";
import VerificationSuccessClient from "./VerificationSuccessClient";
import Image from "next/image";

// Export this as a static page - the dynamic functionality will be handled by the client component
export const dynamic = "force-static";

export default function VerificationSuccessPage() {
  return (
    <div className="min-h-screen bg-[#EDE8D0] flex items-center justify-center px-4">
      <Suspense
        fallback={
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange"></div>
            </div>
            <h2 className="text-2xl font-bold font-cinzel mb-4">
              Loading Confirmation
            </h2>
            <p className="text-lg font-lora">Please wait...</p>
          </div>
        }
      >
        <VerificationSuccessClient />
      </Suspense>
    </div>
  );
}
