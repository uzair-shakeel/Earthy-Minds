/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable traces to avoid permission issues in Windows environment
  experimental: {
    outputFileTracingExcludes: {
      "*": ["node_modules/**", "**/*"],
    },
  },
};

export default nextConfig;
