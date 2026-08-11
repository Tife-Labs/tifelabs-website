"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ExternalLink, 
  Github, 
  Smartphone,
  Globe,
  Brain,
  Cloud,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    category: "ai",
    description: "Real-time data analytics platform with machine learning predictions for e-commerce businesses.",
    longDescription: "Built a comprehensive analytics engine capable of processing millions of events per second. Integrated predictive models to forecast inventory needs and customer churn with 94% accuracy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tech: ["React", "Python", "TensorFlow", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2024"
  },
  {
    id: 2,
    title: "Cloud Migration Suite",
    category: "cloud",
    description: "Enterprise tool for seamless cloud migration with automated infrastructure provisioning.",
    longDescription: "Automated multi-cloud migration framework reducing downtime by 80%. Included automated compliance checking and real-time cost estimation across AWS and Azure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    tech: ["AWS", "Terraform", "Kubernetes", "Go"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2024"
  },
  {
    id: 3,
    title: "Healthcare Management System",
    category: "web",
    description: "HIPAA-compliant platform for patient management, appointments, and telemedicine.",
    longDescription: "End-to-end medical portal featuring encrypted WebRTC video consults, automated EHR sync, and multi-hospital staff scheduling.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: "2023"
  },
  {
    id: 4,
    title: "Mobile Fintech Wallet App",
    category: "mobile",
    description: "Cross-platform mobile application providing instant micro-loans and peer-to-peer transfers.",
    longDescription: "High-security mobile banking app serving over 100,000 active users across West Africa, complete with biometric auth and instant settlements.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop",
    tech: ["React Native", "TypeScript", "Node.js", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: "2023"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & ML", icon: Brain },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
  { id: "web", label: "Web Applications", icon: Globe },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="container py-20 md:py-28">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
        >
          Our Featured Work
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          Explore our portfolio of high-impact engineering projects delivered for clients worldwide.
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
              aria-pressed={isActive}
            >
              {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer overflow-hidden rounded-3xl border bg-background shadow-sm transition-all hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {project.year}
                  </span>
                  {project.featured && (
                    <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Dialog for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border bg-background p-6 shadow-2xl md:p-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />
              </div>

              <h2 id="modal-project-title" className="mb-2 text-2xl font-bold md:text-3xl">
                {selectedProject.title}
              </h2>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedProject.liveUrl && (
                  <Button asChild className="gap-2">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="outline" asChild className="gap-2">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      View Source <Github className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="container mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-blue-600 p-8 text-center text-white md:p-12"
        >
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Have a Project in Mind?
            </h2>
            <p className="mb-6 text-white/90">
              Let&apos;s create something amazing together. We&apos;d love to hear your idea.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
