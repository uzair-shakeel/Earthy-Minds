"use server";

import { redirect } from "next/navigation";
import { auth } from "../lib/firebase";
import { applyActionCode } from "firebase/auth";

/**
 * Verify email with action code from Firebase
 */
export async function verifyEmail(actionCode) {
  try {
    // Apply the action code to verify the email
    await applyActionCode(auth, actionCode);

    // Redirect to the verified page
    redirect("/verified");
  } catch (error) {
    console.error("Error verifying email:", error);

    // Redirect to error page with error details
    redirect(
      `/auth/error?code=${error.code}&message=${encodeURIComponent(
        error.message
      )}`
    );
  }
}
