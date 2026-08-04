import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Analytics as CustomAnalytics } from "@/app/analytics";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tifelabs.vercel.app'),
  title: {
    default: "TifeLabs - Building Tomorrow's Tech Solutions",
    template: "%s | TifeLabs",
  },
  description: "We design and build scalable software, AI solutions, and cloud infrastructure for forward-thinking organizations.",
  keywords: ["software development", "AI solutions", "cloud infrastructure", "tech consulting", "TifeLabs"],
  authors: [{ name: "TifeLabs", url: "https://tifelabs.vercel.app" }],
  creator: "TifeLabs",
  publisher: "TifeLabs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tifelabs.vercel.app',
    title: "TifeLabs - Building Tomorrow's Tech Solutions",
    description: "We design and build scalable software, AI solutions, and cloud infrastructure.",
    siteName: "TifeLabs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TifeLabs - Building Tomorrow's Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TifeLabs - Building Tomorrow's Tech Solutions",
    description: "We design and build scalable software, AI solutions, and cloud infrastructure.",
    images: ["/og-image.png"],
    creator: "@tifelabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#0055FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
        <Analytics />
        <CustomAnalytics />
        <CookieBanner />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
