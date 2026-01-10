import type { Metadata } from "next";
import { Roboto, Rajdhani } from "next/font/google";
import "../styles/globals.css";

// Roboto for body text
const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});

// Rajdhani for headings
const rajdhani = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});
export const metadata: Metadata = {
  title: "JAMS Studio GmbH",
  description: "We build apps & websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`$${roboto.variable} ${rajdhani.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
