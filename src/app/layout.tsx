import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Events Factory | We make it happen",
  description:
    "Events Factory is a Professional Conference Organiser (PCO) delivering extraordinary corporate events, conferences, and brand activations across Rwanda and Africa. ICCA Member.",
  keywords: [
    "event management Rwanda",
    "corporate events Kigali",
    "PCO Rwanda",
    "conference organiser Africa",
    "conference management",
    "brand activation",
    "ICCA member",
    "Events Factory",
  ],
  openGraph: {
    title: "Events Factory | We make it happen",
    description:
      "We craft memorable event experiences across Rwanda and Africa.",
    url: "https://eventsfactory.rw",
    siteName: "Events Factory",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events Factory Rwanda",
    description: "Crafting memorable event experiences across Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
