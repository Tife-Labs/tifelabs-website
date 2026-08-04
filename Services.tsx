"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Cloud, 
  Brain, 
  Users, 
  Shield, 
  Zap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom web and mobile applications built with modern technologies.",
    features: ["React/Next.js", "Node.js", "Mobile Apps", "APIs"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment pipelines.",
    features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD", "Monitoring"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that automate and optimize your business.",
    features: ["Custom AI Models", "NLP", "Computer Vision", "Predictive Analytics"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Tech Consulting",
    description: "Strategic guidance to accelerate your digital transformation.",
    features: ["Architecture Review", "Team Training", "Tech Strategy", "Advisory"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Protect your business with enterprise-grade security.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Zero Trust"],
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Make your applications faster, cheaper, and more reliable.",
    features: ["Load Testing", "Caching", "CDN Setup", "Optimization"],
    color: "from-yellow-500 to-amber-500",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
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
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border bg-background p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${service.color} p-3 text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {service.description}
                </p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="gap-1" asChild>
                  <Link href="/contact">
                    Learn More →
                  </Link>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
