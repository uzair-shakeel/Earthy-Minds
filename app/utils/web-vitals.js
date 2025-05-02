"use client";

import { onCLS, onFID, onLCP, onTTFB, onINP } from "web-vitals";
import { trackEvent } from "./analytics";

/**
 * Reports web vitals metrics to analytics
 */
export function reportWebVitals() {
  const isProduction = process.env.NODE_ENV === "production";

  // Only track web vitals in production
  if (!isProduction) return;

  try {
    // Core Web Vitals
    onCLS((metric) => sendToAnalytics("CLS", metric));
    onLCP((metric) => sendToAnalytics("LCP", metric));
    onFID((metric) => sendToAnalytics("FID", metric));
    onINP((metric) => sendToAnalytics("INP", metric));
    onTTFB((metric) => sendToAnalytics("TTFB", metric));
  } catch (e) {
    console.error("Error reporting web vitals:", e);
  }
}

/**
 * Sends web vitals metrics to analytics services
 */
function sendToAnalytics(metricName, metric) {
  // Convert to milliseconds if needed and round
  const value =
    metricName === "CLS" ? metric.value : Math.round(metric.value * 10) / 10;

  // Track event in our analytics utility
  trackEvent("web_vitals", {
    metric_name: metricName,
    metric_value: value,
    metric_rating: metric.rating,
    metric_id: metric.id,
    page_path: window.location.pathname,
  });
}

/**
 * Add this to any page you want to track:
 *
 * useEffect(() => {
 *   reportWebVitals();
 * }, []);
 */
