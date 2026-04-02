import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Flagship Digital — Professional Websites for Marine Businesses",
    template: "%s | Flagship Digital",
  },
  description:
    "Get a professional, SEO-optimized website for your marine business. Custom domain, payment processing, and accounting integrations included. Starting at $29/mo.",
  keywords: [
    "marine business website",
    "boat service website builder",
    "marine service provider website",
    "website for boat mechanics",
    "website for charter companies",
  ],
  authors: [{ name: "Flagship Digital" }],
  metadataBase: new URL("https://flagshipdigital.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flagshipdigital.com",
    siteName: "Flagship Digital",
    title: "Flagship Digital — Professional Websites for Marine Businesses",
    description:
      "Professional websites built exclusively for the marine industry. Custom domain, SEO, payments, and accounting integrations. Starting at $29/mo.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flagship Digital — Websites for Marine Businesses",
    description: "Professional websites built for the marine industry. Starting at $29/mo.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" tabIndex={-1} style={{ paddingTop: "4rem" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
