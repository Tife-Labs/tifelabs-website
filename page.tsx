import type { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { Stats } from "@/components/sections/Stats"
import { Services } from "@/components/sections/Services"
import { FeaturedWork } from "@/components/sections/FeaturedWork"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTA } from "@/components/sections/CTA"

export const metadata: Metadata = {
  title: "TifeLabs - Building Tomorrow's Tech Solutions",
  description: "We design and build scalable software, AI solutions, and cloud infrastructure for forward-thinking organizations.",
  openGraph: {
    title: "TifeLabs - Building Tomorrow's Tech Solutions",
    description: "We design and build scalable software, AI solutions, and cloud infrastructure.",
    url: "https://tifelabs.vercel.app",
    siteName: "TifeLabs",
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TifeLabs",
    url: "https://tifelabs.vercel.app",
    logo: "https://tifelabs.vercel.app/logo.png",
    description: "Building scalable software, AI solutions, and cloud infrastructure.",
    sameAs: [
      "https://github.com/tifelabs",
      "https://twitter.com/tifelabs",
      "https://linkedin.com/company/tifelabs",
    ],
  }

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stats />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <CTA />
    </main>
  )
}
