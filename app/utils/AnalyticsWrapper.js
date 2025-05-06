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

    // Add navigation change listener for SPA navigation
    const handleRouteChange = (url) => {
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
