import "./globals.css";

// Set metadata for the app
export const metadata = {
  title: "Earthy Minds - Rise of the Wild",
  description: "Eco Habit Tracker meets Fantasy Adventure",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Ensure environment variables are loaded during build and hydration */}
        <script
          id="env-vars-checker"
          dangerouslySetInnerHTML={{
            __html: `
              console.log("Environment variables check: " + (
                window.ENV_CHECK = {
                  firebase_api_key_status: ${
                    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? "true" : "false"
                  },
                  firebase_auth_domain_status: ${
                    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
                      ? "true"
                      : "false"
                  },
                  firebase_project_id_status: ${
                    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
                      ? "true"
                      : "false"
                  }
                }
              ));
            `,
          }}
        />
      </head>
      <body>
        <div id="__next">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
