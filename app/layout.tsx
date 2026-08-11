import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./global.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react"
import { Analytics as CustomAnalytics } from "@/app/analytics"
import { CookieBanner } from "@/components/CookieBanner"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tifelabs.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TifeLabs - Building Tomorrow's Tech Solutions",
    template: "%s | TifeLabs",
  },
  description: "We design and build scalable software, AI solutions, and cloud infrastructure for forward-thinking organizations.",
  keywords: ["software development", "AI solutions", "cloud infrastructure", "tech consulting", "TifeLabs"],
  authors: [{ name: "TifeLabs", url: siteUrl }],
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
    url: siteUrl,
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
}

export const viewport: Viewport = {
  themeColor: "#0055FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        {/* WCAG Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <Navbar />
        
        <main id="main-content" tabIndex={-1} className="flex-grow pt-16 focus:outline-none">
          {children}
        </main>

        <Footer />
        <Analytics />
        <CustomAnalytics />
        <CookieBanner />
      </body>
    </html>
  )
}
