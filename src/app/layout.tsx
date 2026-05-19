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
    "Events Factory is Rwanda's leading Event Management Company and Professional Conference Organizer (PCO). We deliver corporate events, MICE, conference management, audiovisual solutions, simultaneous interpretation, hybrid events, and event branding across Rwanda and Africa. ICCA Member.",
  keywords: [
    "Event Management Company Rwanda",
    "Professional Conference Organizer Rwanda",
    "PCO Rwanda",
    "Conference Organizer Kigali",
    "Event Production Rwanda",
    "Corporate Events Rwanda",
    "Event Planning Rwanda",
    "Event Agency Rwanda",
    "MICE Rwanda",
    "Conference Management Services",
    "Event Solutions Rwanda",
    "Event Branding Rwanda",
    "Audiovisual Solutions Rwanda",
    "Hybrid Event Solutions Africa",
    "Simultaneous Interpretation Rwanda",
    "event managers in Rwanda",
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
