import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { FeaturedWork } from "@/components/sections/FeaturedWork";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <CTA />
    </>
  );
}
