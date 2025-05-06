"use client";

import { useEffect } from "react";
import { trackPageView, initAnalytics } from "./analytics";
import { reportWebVitals } from "./web-vitals";

export default function AnalyticsWrapper({ children, pageName }) {
  useEffect(() => {
    // Initialize analytics
    initAnalytics();

    // Track page view
    trackPageView();

    // Report web vitals
    reportWebVitals();

    console.log(
      `Analytics tracking initialized for page: ${pageName || "unknown"}`
    );

    // Add navigation change listener for SPA navigation
    const handleRouteChange = (url) => {
      console.log(`Analytics: Route changed to ${url}`);
      trackPageView(url);
    };

    window.addEventListener("popstate", () =>
      handleRouteChange(window.location.pathname)
    );

    return () => {
      window.removeEventListener("popstate", () =>
        handleRouteChange(window.location.pathname)
      );
    };
  }, [pageName]);

  return <>{children}</>;
}
