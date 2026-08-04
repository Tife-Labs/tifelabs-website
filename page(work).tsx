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
  Filter,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    category: "ai",
    description: "Real-time data analytics platform with machine learning predictions for e-commerce businesses.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tech: ["React", "Python", "TensorFlow", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    year: "2024"
  },
  {
    id: 2,
    title: "Cloud Migration Suite",
    category: "cloud",
    description: "Enterprise tool for seamless cloud migration with automated infrastructure provisioning.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    tech: ["AWS", "Terraform", "Kubernetes", "Go"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    year: "2024"
  },
  {
    id: 3,
    title: "Healthcare Management System",
    category: "web",
    description: "HIPAA-compliant platform for patient management, appointments, and telemedicine.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    year: "2023"
  },
  {
    id: 4,
    title: "Smart Agriculture IoT Platform",
    category: "mobile",
    description: "IoT-powered mobile app for farm monitoring, crop management, and yield prediction.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=500&fit=crop",
    tech: ["Flutter", "Firebase", "IoT", "ML"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    year: "2023"
  },
  {
    id: 5,
    title: "FinTech Payment Gateway",
    category: "web",
    description: "Secure payment processing platform with fraud detection and multi-currency support.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    tech: ["Next.js", "Node.js", "Redis", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    year: "2024"
  },
  {
    id: 6,
    title: "AI Customer Support Chatbot",
    category: "ai",
    description: "Intelligent chatbot with NLP for automated customer support across multiple channels.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
    tech: ["Python", "LangChain", "OpenAI", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    year: "2023"
  }
];

const categories = [
  { id: "all", label: "All Projects", icon: Filter },
  { id: "web", label: "Web Apps", icon: Globe },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "ai", label: "AI/ML", icon: Brain },
  { id: "cloud", label: "Cloud", icon: Cloud }
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(
    project => activeCategory === "all" || project.category === activeCategory
  );

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="py-20 md:py-28">
      {/* Hero Section */}
      <section className="container mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Explore our portfolio of innovative projects that solve real problems.
          </p>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="container mb-16">
        <h2 className="mb-8 text-2xl font-bold">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="rounded-full bg-muted px-2 py-0.5 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 gap-1"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Projects with Filter */}
      <section className="container">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">All Projects</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "border bg-background hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group overflow-hidden rounded-2xl border bg-background transition-all hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold">{project.title}</h3>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="rounded-full bg-muted px-2 py-0.5 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1"
                      onClick={() => setSelectedProject(project)}
                    >
                      Details
                    </Button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-background p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative mb-6 h-64 overflow-hidden rounded-xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="mb-2 text-3xl font-bold">{selectedProject.title}</h2>
              <div className="mb-4 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-4">
                {selectedProject.liveUrl && (
                  <Button asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="outline" asChild>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      View Code <Github className="ml-2 h-4 w-4" />
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
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-blue-600 p-8 text-center text-white md:p-12"
        >
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Have a Project in Mind?
            </h2>
            <p className="mb-6 text-white/90">
              Let's create something amazing together. We'd love to hear your idea.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
