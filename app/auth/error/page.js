import { Suspense } from "react";
import AuthErrorClient from "./AuthErrorClient";
import Image from "next/image";

export const dynamic = "force-static";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-[#EDE8D0] flex items-center justify-center px-4">
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

        <Suspense
          fallback={
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto"></div>
              <p className="mt-4 font-lora">Loading error details...</p>
            </div>
          }
        >
          <AuthErrorClient />
        </Suspense>
      </div>
    </div>
  );
}
