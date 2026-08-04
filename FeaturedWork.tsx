"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Real-time analytics with ML predictions for e-commerce.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "AI/ML"
  },
  {
    title: "Cloud Migration Suite",
    description: "Enterprise tool for seamless cloud infrastructure migration.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    category: "Cloud"
  },
  {
    title: "Healthcare Management System",
    description: "HIPAA-compliant patient management and telemedicine platform.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    category: "Web"
  }
];

export function FeaturedWork() {
  const router = useRouter();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Featured Work</h2>
            <p className="text-muted-foreground">
              Some of our recent projects
            </p>
          </div>
          <Button variant="outline" onClick={() => router.push("/work")}>
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border bg-background transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
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
                  className="mt-4 gap-1"
                  onClick={() => router.push("/work")}
                >
                  Learn More →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
