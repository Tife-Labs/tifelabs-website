import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { FeaturedWork } from "@/components/sections/FeaturedWork";

export const metadata: Metadata = {
  title: "TifeLabs | Software, Cloud & AI Engineering",
  description:
    "TifeLabs builds high-performance software applications, scalable cloud infrastructure, and custom AI/ML solutions for modern enterprises.",
  keywords: [
    "Software Engineering",
    "Cloud Computing",
    "AI Development",
    "Machine Learning",
    "Next.js Consulting",
    "DevOps",
  ],
  openGraph: {
    title: "TifeLabs | Software, Cloud & AI Engineering",
    description:
      "Transforming businesses with custom web engineering, DevOps pipelines, and intelligent AI models.",
    url: "https://tifelabs.com",
    siteName: "TifeLabs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TifeLabs | Software, Cloud & AI Engineering",
    description:
      "Custom software, cloud infrastructure, and artificial intelligence solutions.",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TifeLabs",
    url: "https://tifelabs.com",
    logo: "https://tifelabs.com/logo.png",
    description:
      "High-performance software engineering, cloud solutions, and artificial intelligence development.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "tifelabscontact@gmail.com",
      contactType: "customer service",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Stats />
        <Services />
        <FeaturedWork />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}
