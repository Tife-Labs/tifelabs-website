"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Cloud, 
  Brain, 
  Users, 
  Shield, 
  Zap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    id: "software-development",
    icon: Code2,
    title: "Software Development",
    description: "Custom web and mobile applications built with modern technologies.",
    features: ["React/Next.js", "Node.js", "Mobile Apps", "APIs"],
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment pipelines.",
    features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD", "Monitoring"],
    gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    id: "ai-machine-learning",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that automate and optimize your business.",
    features: ["Custom AI Models", "NLP", "Computer Vision", "Predictive Analytics"],
    gradient: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    id: "tech-consulting",
    icon: Users,
    title: "Tech Consulting",
    description: "Strategic guidance to accelerate your digital transformation.",
    features: ["Architecture Review", "Team Training", "Tech Strategy", "Advisory"],
    gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
  {
    id: "security-solutions",
    icon: Shield,
    title: "Security Solutions",
    description: "Protect your business with enterprise-grade security.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Zero Trust"],
    gradient: "bg-gradient-to-r from-red-500 to-rose-500",
  },
  {
    id: "performance-optimization",
    icon: Zap,
    title: "Performance Optimization",
    description: "Make your applications faster, cheaper, and more reliable.",
    features: ["Load Testing", "Caching", "CDN Setup", "Optimization"],
    gradient: "bg-gradient-to-r from-yellow-500 to-amber-500",
  },
];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="py-24"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 id="services-heading" className="mb-4 text-3xl font-bold md:text-4xl">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end technology solutions to transform your business and drive growth.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className={`mb-4 inline-flex rounded-xl ${service.gradient} p-3 text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <Button variant="ghost" size="sm" className="group/btn gap-1 pl-0" asChild>
                    <Link href="/contact">
                      Learn More 
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
