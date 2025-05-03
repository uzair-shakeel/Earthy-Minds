"use client";

import { trackButtonClick } from "../utils/analytics";

export default function TrackedButton({
  children,
  onClick,
  location = "unknown",
  name,
  className = "",
  ...props
}) {
  const handleClick = (e) => {
    trackButtonClick(
      name || children?.toString() || "unnamed-button",
      location
    );

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`font-cinzel text-black border-2 border-black bg-orange px-6 py-2 rounded-lg text-lg font-bold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
