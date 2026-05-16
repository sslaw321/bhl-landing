import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BHL Asia Acme Sdn Bhd | Cooling Tower Manufacturer Malaysia",
  description:
    "BHL Asia Acme Sdn Bhd — Industrial cooling tower manufacturer and supplier in Malaysia. FRP, crossflow, counterflow, and closed-circuit cooling towers for MEP contractors, power plants, factories, and commercial projects.",
  keywords:
    "cooling tower Malaysia, FRP cooling tower, industrial cooling tower, MEP cooling tower, BHL Asia Acme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
