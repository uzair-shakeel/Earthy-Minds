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
      <body>
        <div id="__next">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
