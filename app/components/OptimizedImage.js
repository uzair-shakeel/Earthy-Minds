"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * OptimizedImage component that handles:
 * - Lazy loading
 * - Blur placeholder
 * - Progressive loading
 * - Responsive sizing
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate blur placeholder color based on the src string
  const generateColorFromSrc = (src) => {
    let hash = 0;
    for (let i = 0; i < src.length; i++) {
      hash = src.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Generate pastel colors for better aesthetics
    const h = Math.abs(hash) % 360;
    const s = 25 + 70 * Math.abs(Math.cos(hash)); // 25-95%
    const l = 85 + 10 * Math.abs(Math.sin(hash)); // 85-95%

    return `hsl(${h}, ${Math.floor(s)}%, ${Math.floor(l)}%)`;
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: generateColorFromSrc(src),
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width || 500}
        height={height || 300}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        quality={80}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
      />
    </div>
  );
}
