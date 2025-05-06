"use client";

import { useState } from "react";
import {
  trackEvent,
  trackButtonClick,
  trackPageView,
  trackFeatureEngagement,
} from "./analytics";

export default function AnalyticsDebugger() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [eventLog, setEventLog] = useState([]);
  const [customEvent, setCustomEvent] = useState("");

  const logEvent = (type, detail) => {
    const timestamp = new Date().toISOString().split("T")[1].split(".")[0];
    setEventLog((prev) => [{ timestamp, type, detail }, ...prev].slice(0, 10));
  };

  const sendTestPageView = () => {
    trackPageView();
    logEvent("Page View", window.location.pathname);
  };

  const sendTestButtonClick = () => {
    trackButtonClick("test-button", "analytics-debugger");
    logEvent("Button Click", "test-button");
  };

  const sendTestFeatureEngagement = () => {
    trackFeatureEngagement("analytics-test");
    logEvent("Feature Engagement", "analytics-test");
  };

  const sendCustomEvent = () => {
    if (!customEvent) return;
    trackEvent(customEvent, { source: "debugger" });
    logEvent("Custom Event", customEvent);
    setCustomEvent("");
  };

  if (!isExpanded) {
    return (
      <button
        className="fixed bottom-4 right-4 bg-amber-500 text-black p-2 rounded-full shadow-lg z-50"
        onClick={() => setIsExpanded(true)}
        aria-label="Open Analytics Debugger"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg border border-amber-500 w-80 z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg">Analytics Debugger</h3>
        <button
          onClick={() => setIsExpanded(false)}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close debugger"
        >
          ✕
        </button>
      </div>

      <div className="space-y-2 mb-4">
        <button
          onClick={sendTestPageView}
          className="w-full bg-amber-500 text-black py-1 px-3 rounded hover:bg-amber-600"
        >
          Test Page View
        </button>
        <button
          onClick={sendTestButtonClick}
          className="w-full bg-amber-500 text-black py-1 px-3 rounded hover:bg-amber-600"
        >
          Test Button Click
        </button>
        <button
          onClick={sendTestFeatureEngagement}
          className="w-full bg-amber-500 text-black py-1 px-3 rounded hover:bg-amber-600"
        >
          Test Feature Engagement
        </button>
      </div>

      <div className="flex mb-4">
        <input
          type="text"
          value={customEvent}
          onChange={(e) => setCustomEvent(e.target.value)}
          placeholder="Custom event name"
          className="flex-1 border p-1 rounded-l"
        />
        <button
          onClick={sendCustomEvent}
          className="bg-amber-500 text-black py-1 px-3 rounded-r hover:bg-amber-600"
        >
          Send
        </button>
      </div>

      <div className="border-t pt-2">
        <h4 className="font-semibold text-sm mb-1">Recent Events:</h4>
        <div className="max-h-40 overflow-y-auto text-xs">
          {eventLog.length === 0 ? (
            <p className="text-gray-500 italic">No events logged yet</p>
          ) : (
            <ul className="space-y-1">
              {eventLog.map((event, i) => (
                <li key={i} className="border-b pb-1">
                  <span className="text-gray-500">{event.timestamp}</span>
                  <span className="font-medium ml-1">{event.type}:</span>{" "}
                  {event.detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
