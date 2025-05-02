export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthyminds.com";

  // Base pages
  const staticPages = [
    "",
    "/verified",
    "/auth/verify",
    "/auth/verify/success",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Placeholder for future blog posts when implemented
  // const blogPosts = await getBlogPosts();
  // const blogUrls = blogPosts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly',
  //   priority: 0.7,
  // }));

  // Placeholder for future features/pages
  const futurePages = [
    // '/about',
    // '/blog',
    // '/community',
    // '/features',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Return all urls
  return [
    ...staticPages,
    // ...blogUrls,
    ...futurePages,
  ];
}
