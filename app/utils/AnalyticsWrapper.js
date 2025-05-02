"use client";

import { useEffect } from "react";
import { trackPageView } from "./analytics";
import { reportWebVitals } from "./web-vitals";

/**
 * A wrapper component that handles analytics tracking
 * for the wrapped page or component
 */
export default function AnalyticsWrapper({ children, pageName }) {
  useEffect(() => {
    // Track page view when the component mounts
    trackPageView();

    // Initialize Web Vitals tracking
    reportWebVitals();

    // Log for debugging
    console.log(`Analytics initialized for page: ${pageName}`);
  }, [pageName]);

  return <>{children}</>;
}
