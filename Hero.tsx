"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Sparkles className="h-4 w-4" />
            <span>Innovation Driven • Results Focused</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Building Tomorrow's
            <span className="gradient-text block sm:inline"> Tech Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            We design and build scalable software, AI solutions, and cloud infrastructure
            that drive real business growth and digital transformation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild className="group gap-2">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-primary" />
              Trusted by 50+ startups
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary" />
              100+ projects delivered
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary" />
              4.9/5 client rating
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
