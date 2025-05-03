"use client";

import { useEffect } from "react";
import { trackPageView } from "./analytics";
import { reportWebVitals } from "./web-vitals";

export default function AnalyticsWrapper({ children, pageName }) {
  useEffect(() => {
    trackPageView();

    reportWebVitals();

    console.log(`Analytics initialized for page: ${pageName}`);
  }, [pageName]);

  return <>{children}</>;
}
