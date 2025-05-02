export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthyminds.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/auth/", // Don't index auth-related pages
        "/api/", // Don't index API routes
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
