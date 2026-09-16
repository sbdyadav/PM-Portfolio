import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhagwandasyadav.vercel.app"),
  title: {
    default: "Bhagwandas Yadav — Product Manager",
    template: "%s — Bhagwandas Yadav",
  },
  description:
    "Product manager working on marketplaces and commerce. Teardowns, validation work and writing on going back to the question.",
  openGraph: {
    title: "Bhagwandas Yadav — Product Manager",
    description:
      "Most roadmaps I've inherited were full of well-built answers to the wrong question.",
    url: "https://bhagwandasyadav.vercel.app",
    siteName: "Bhagwandas Yadav",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bhagwandas Yadav — I find the problem everyone else walked past.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhagwandas Yadav — Product Manager",
    description:
      "Most roadmaps I've inherited were full of well-built answers to the wrong question.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable}`}>
      <body>
        <Nav />
        {children}
        <Reveal />
      </body>
    </html>
  );
}
