import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://earthyminds.com"
  ),
  title: "Earthy Minds - Rise of the Wild",
  description:
    "Turn real-world eco actions into quests in this fantasy adventure. Level up your ecological impact and join the fellowship to save Biolysium, where nature's magic needs your help.",
  keywords: [
    "eco habit tracker",
    "gamification",
    "sustainability",
    "fantasy game",
    "eco actions",
    "environment",
    "climate action",
  ],
  authors: [{ name: "Earthy Minds Team" }],
  creator: "Earthy Minds",
  publisher: "Earthy Minds",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#EDE8D0",
  colorScheme: "light",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Earthy Minds",
    title: "Earthy Minds - Rise of the Wild",
    description:
      "Turn real-world eco actions into quests. Level up. Save nature.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Earthy Minds - Rise of the Wild",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Earthy Minds - Rise of the Wild",
    description:
      "Turn real-world eco actions into quests. Level up. Save nature.",
    images: ["/assets/og-image.jpg"],
    creator: "@earthyminds",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="__next">
          <main>{children}</main>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Earthy Minds - Rise of the Wild",
              description:
                "Turn real-world eco actions into quests in this fantasy adventure.",
              url:
                process.env.NEXT_PUBLIC_SITE_URL || "https://earthyminds.com",
              potentialAction: {
                "@type": "SearchAction",
                target: `${process.env.NEXT_PUBLIC_SITE_URL || "https://earthyminds.com"
                  }/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Vercel Analytics */}
        <Analytics />

        {/* Vercel Speed Insights */}
        <SpeedInsights />

        {/* Add Google Analytics */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-PLACEHOLDER"
            }`}
        />
        <Script strategy="lazyOnload" id="ga-script">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-PLACEHOLDER"
            }', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
