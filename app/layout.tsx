import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bhagwandasyadav.vercel.app"),
  title: {
    default: "Bhagwandas Yadav — Product Manager",
    template: "%s — Bhagwandas Yadav",
  },
  description:
    "Product manager working on marketplaces and commerce. Teardowns, validation work and writing on finding the problem everyone else walked past.",
  openGraph: {
    title: "Bhagwandas Yadav — Product Manager",
    description:
      "Teardowns, validation work and writing on finding the problem everyone else walked past.",
    url: "https://bhagwandasyadav.vercel.app",
    siteName: "Bhagwandas Yadav",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;550;600;650&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
