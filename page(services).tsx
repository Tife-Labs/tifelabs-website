"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code2, 
  Cloud, 
  Brain, 
  Users, 
  Shield, 
  Zap,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "software",
    icon: Code2,
    title: "Software Development",
    description: "Custom web and mobile applications built with modern technologies.",
    longDescription: "We build scalable, maintainable, and performant applications tailored to your business needs. From MVPs to enterprise solutions, we use cutting-edge technologies to deliver exceptional results.",
    features: [
      "Custom Web Applications (React, Next.js, Vue)",
      "Mobile Apps (React Native, Flutter)",
      "API Development & Integration",
      "Legacy System Modernization",
      "MVP Development & Prototyping",
      "E-commerce Solutions"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL", "PostgreSQL"],
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500"
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment pipelines.",
    longDescription: "Design and implement robust cloud architectures that scale with your business. We automate everything from infrastructure provisioning to deployment monitoring.",
    features: [
      "Cloud Architecture Design (AWS, Azure, GCP)",
      "CI/CD Pipeline Setup (GitHub Actions, Jenkins)",
      "Kubernetes & Container Orchestration",
      "Infrastructure as Code (Terraform)",
      "Cloud Migration Services",
      "24/7 Monitoring & Alerting"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500"
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that automate and optimize your business.",
    longDescription: "Leverage the power of artificial intelligence to gain insights, automate processes, and create intelligent products that give you a competitive edge.",
    features: [
      "Custom AI Model Development",
      "Natural Language Processing (NLP)",
      "Computer Vision Solutions",
      "Predictive Analytics & Forecasting",
      "AI Chatbots & Virtual Assistants",
      "Data Science & Analytics"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI", "Hugging Face"],
    color: "from-orange-500 to-red-500",
    iconColor: "text-orange-500"
  },
  {
    id: "consulting",
    icon: Users,
    title: "Tech Consulting",
    description: "Strategic guidance to accelerate your digital transformation.",
    longDescription: "Get expert guidance from industry veterans who have built and scaled tech products. We help you make the right technology decisions for your business.",
    features: [
      "Technology Strategy & Roadmap",
      "Architecture Review & Optimization",
      "Team Training & Mentoring",
      "Product Strategy & Innovation",
      "Due Diligence & Technical Audits",
      "Digital Transformation Strategy"
    ],
    technologies: ["Strategic Planning", "Team Leadership", "Technical Debt Assessment", "ROI Analysis"],
    color: "from-green-500 to-emerald-500",
    iconColor: "text-green-500"
  },
  {
    id: "security",
    icon: Shield,
    title: "Security Solutions",
    description: "Protect your business with enterprise-grade security.",
    longDescription: "Comprehensive security solutions to protect your applications, data, and infrastructure from modern threats. We implement security best practices at every level.",
    features: [
      "Security Audits & Assessment",
      "Penetration Testing (Pentesting)",
      "DevSecOps Implementation",
      "Compliance & Regulatory (GDPR, HIPAA)",
      "Zero Trust Architecture",
      "Incident Response Planning"
    ],
    technologies: ["OWASP", "Kali Linux", "Wireshark", "Snyk", "CloudFlare", "AWS Security"],
    color: "from-red-500 to-rose-500",
    iconColor: "text-red-500"
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance Optimization",
    description: "Make your applications faster, cheaper, and more reliable.",
    longDescription: "Optimize your applications for speed, scalability, and cost-efficiency. We identify bottlenecks and implement solutions that improve performance dramatically.",
    features: [
      "Core Web Vitals Optimization",
      "Database Query Tuning",
      "Server-Side & CDN Caching",
      "Code Profiling & Refactoring",
      "Cloud Resource Cost Reduction",
      "Load Testing & Capacity Planning"
    ],
    technologies: ["Lighthouse", "Redis", "New Relic", "Datadog", "k6", "PostgreSQL Explain"],
    color: "from-yellow-500 to-amber-500",
    iconColor: "text-yellow-500"
  }
];

export default function ServicesPage() {
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
          Engineering Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          End-to-end technology solutions tailored to accelerate your digital growth and operational efficiency.
        </motion.p>
      </div>

      {/* Services Section */}
      <div className="mt-16 space-y-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.section
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="scroll-mt-24 rounded-3xl border bg-background p-8 shadow-sm transition-all hover:shadow-md md:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-r ${service.color} p-4 text-white shadow-md`}>
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold md:text-3xl">{service.title}</h2>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    {service.longDescription}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-semibold text-foreground">Technologies &amp; Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="rounded-2xl border bg-muted/30 p-6 md:p-8">
                    <h3 className="mb-4 font-semibold text-foreground">Key Capabilities</h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${service.iconColor}`} aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="container mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-blue-600 p-8 text-center text-white md:p-12"
        >
          <div className="absolute inset-0 bg-white/5" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="mb-6 text-white/90">
              Let&apos;s discuss your project and create a custom solution.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
