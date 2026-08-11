"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    id: "ai-analytics",
    title: "AI-Powered Analytics Platform",
    description: "Real-time analytics with ML predictions for e-commerce.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "AI/ML",
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration Suite",
    description: "Enterprise tool for seamless cloud infrastructure migration.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    category: "Cloud",
  },
  {
    id: "healthcare-system",
    title: "Healthcare Management System",
    description: "HIPAA-compliant patient management and telemedicine platform.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    category: "Web",
  },
];

export function FeaturedWork() {
  return (
    <section 
      className="bg-muted/30 py-20"
      aria-labelledby="featured-work-heading"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <div>
            <h2 id="featured-work-heading" className="text-3xl font-bold md:text-4xl">
              Featured Work
            </h2>
            <p className="text-muted-foreground">
              Some of our recent projects
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/work" className="gap-2">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border bg-background transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="mt-4 gap-1"
                >
                  <Link href="/work">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
