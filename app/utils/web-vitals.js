"use client";
import { onCLS, onFID, onLCP, onTTFB, onINP } from "web-vitals";
import { trackEvent } from "./analytics";

export function reportWebVitals() {
  const isProduction = process.env.NODE_ENV === "production";

  if (!isProduction) return;

  try {
    onCLS((metric) => sendToAnalytics("CLS", metric));
    onLCP((metric) => sendToAnalytics("LCP", metric));
    onFID((metric) => sendToAnalytics("FID", metric));
    onINP((metric) => sendToAnalytics("INP", metric));
    onTTFB((metric) => sendToAnalytics("TTFB", metric));
  } catch (e) {
    console.error("Error reporting web vitals:", e);
  }
}

function sendToAnalytics(metricName, metric) {
  const value = metricName === "CLS" ? metric.value : Math.round(metric.value * 10) / 10;

  trackEvent("web_vitals", {
    metric_name: metricName,
    metric_value: value,
    metric_rating: metric.rating,
    metric_id: metric.id,
    page_path: window.location.pathname,
  });
}