import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const body = Manrope({ variable: "--font-body", subsets: ["latin"] });
const display = Plus_Jakarta_Sans({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.twentymans.com.au"),
  title: { default: "Twentyman's Cleaning Solutions | Sydney Home Cleaning", template: "%s | Twentyman's Solutions" },
  description: "Friendly, owner-operated residential cleaning and home assistance across Sydney's Inner West, Inner City, Northern Beaches and Hornsby area.",
  keywords: ["Sydney house cleaning", "residential cleaning Sydney", "home assistance Sydney", "cleaner Wentworth Point", "fortnightly cleaner Sydney"],
  openGraph: { title: "Twentyman's Cleaning Solutions", description: "A Solution For Every Property. Finding you the right solution. Every time.", url: "https://www.twentymans.com.au", siteName: "Twentyman's Cleaning Solutions", locale: "en_AU", type: "website" },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#173568" };

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HouseCleaning",
  name: "Twentyman's Cleaning Solutions",
  url: "https://www.twentymans.com.au",
  telephone: "+61406075725",
  email: "twentyman.solutions@gmail.com",
  areaServed: "Sydney, NSW",
  address: { "@type": "PostalAddress", addressLocality: "Wentworth Point", addressRegion: "NSW", addressCountry: "AU" },
  sameAs: ["https://www.instagram.com/twentyman.solutions", "https://www.facebook.com/Twentyman.Solutions/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className={`${body.variable} ${display.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
