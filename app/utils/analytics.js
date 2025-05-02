"use client";

import { track } from "@vercel/analytics";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Check if we're in a browser and not in development
const isProduction = process.env.NODE_ENV === "production";
const isBrowser = typeof window !== "undefined";

// Initialize analytics
export const initAnalytics = () => {
  if (!isBrowser || !isProduction) return;

  // This is in layout.js so only needs to be manually called in certain cases
  console.log("Analytics initialized");
};

// Generic analytics event tracking
export const trackEvent = (eventName, params = {}) => {
  if (!isBrowser || !isProduction) {
    console.log(`[Analytics Event - Dev Mode]: ${eventName}`, params);
    return;
  }

  try {
    // Google Analytics 4 tracking
    if (window.gtag) {
      window.gtag("event", eventName, params);
    }

    // Vercel Analytics tracking
    track(eventName, params);

    // You can add other analytics providers here if needed
    // e.g., Plausible, Mixpanel, etc.
  } catch (error) {
    console.error("Error tracking event:", error);
  }
};

// Commonly used events
export const trackPageView = (url) => {
  if (!url) {
    url = window.location.pathname + window.location.search;
  }

  trackEvent("page_view", {
    page_path: url,
  });
};

export const trackSignup = (method = "email") => {
  trackEvent("sign_up", {
    method: method,
  });
};

export const trackButtonClick = (buttonName, location) => {
  trackEvent("button_click", {
    button_name: buttonName,
    location: location,
  });
};

export const trackLinkClick = (linkName, url, location) => {
  trackEvent("link_click", {
    link_name: linkName,
    url: url,
    location: location,
  });
};

export const trackFeatureEngagement = (featureName) => {
  trackEvent("feature_engagement", {
    feature_name: featureName,
  });
};

export const trackErrorOccurred = (errorCode, errorMessage, location) => {
  trackEvent("error_occurred", {
    error_code: errorCode,
    error_message: errorMessage,
    location: location,
  });
};
