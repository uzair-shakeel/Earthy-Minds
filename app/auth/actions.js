"use server";

import { redirect } from "next/navigation";
import { auth } from "../lib/firebase";
import { applyActionCode } from "firebase/auth";

export async function verifyEmail(actionCode) {
  try {
    await applyActionCode(auth, actionCode);

    redirect("/verified");
  } catch (error) {
    console.error("Error verifying email:", error);

    redirect(
      `/auth/error?code=${error.code}&message=${encodeURIComponent(
        error.message
      )}`
    );
  }
}
