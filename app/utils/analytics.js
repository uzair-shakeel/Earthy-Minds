"use client";

import { track } from "@vercel/analytics";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const isProduction = process.env.NODE_ENV === "production";
const isBrowser = typeof window !== "undefined";

export const initAnalytics = () => {
  if (!isBrowser) return;

  if (!isProduction) {
    console.log("Analytics initialized (development mode)");
  }
};

export const trackEvent = (eventName, params = {}) => {
  if (!isBrowser) return;

  try {
    // Only log events in the console in development
    if (!isProduction) {
      console.log(`[Analytics Event]: ${eventName}`, params);
    }

    // Track with Google Analytics
    if (window.gtag) {
      window.gtag("event", eventName, params);
    }

    // Track with Vercel Analytics
    track(eventName, params);
  } catch (error) {
    console.error("Error tracking event:", error);
  }
};

export const trackPageView = (url) => {
  if (!isBrowser) return;

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
