"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section 
      className="relative overflow-hidden py-20"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-90" />
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container relative text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <h2 id="cta-heading" className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Let&apos;s turn your ideas into reality. Schedule a free consultation today.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="group gap-2"
          >
            <Link href="/contact">
              Get Started Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
