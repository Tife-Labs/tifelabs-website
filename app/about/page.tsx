"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Rocket, 
  Target, 
  Heart, 
  Lightbulb, 
  Users, 
  Code2,
  Cloud,
  Brain,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: "tife",
    name: "Tife Adejuwon",
    role: "Founder & CEO",
    bio: "10+ years in software engineering and tech leadership. Passionate about building products that solve real problems.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tife",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    id: "sarah",
    name: "Sarah Johnson",
    role: "Head of Engineering",
    bio: "Full-stack architect with expertise in scalable systems and cloud infrastructure.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    id: "michael",
    name: "Michael Okonkwo",
    role: "AI/ML Lead",
    bio: "Machine Learning engineer with a PhD in Computer Vision from MIT.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    id: "grace",
    name: "Grace Okafor",
    role: "Product Designer",
    bio: "Designing beautiful, intuitive interfaces that users love. 5+ years in product design.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace",
    social: { linkedin: "#", twitter: "#", github: "#" }
  }
];

const values = [
  {
    id: "innovation",
    icon: Rocket,
    title: "Innovation First",
    description: "We push boundaries and embrace emerging technologies to deliver cutting-edge solutions."
  },
  {
    id: "results",
    icon: Target,
    title: "Results Driven",
    description: "We focus on delivering measurable business outcomes that drive growth."
  },
  {
    id: "success",
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We're committed to your long-term growth."
  },
  {
    id: "creative",
    icon: Lightbulb,
    title: "Creative Problem Solving",
    description: "We think outside the box to find elegant solutions to complex challenges."
  }
];

export default function AboutPage() {
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
            About <span className="gradient-text">TifeLabs</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            We&apos;re a team of passionate technologists building the future
            of software and AI-powered solutions.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="container mb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <p className="mb-4 text-lg text-muted-foreground">
              To empower organizations with innovative technology solutions that drive growth,
              efficiency, and digital transformation.
            </p>
            <p className="text-muted-foreground">
              We believe in the power of technology to solve complex problems and create
              meaningful impact. Our team combines deep technical expertise with business
              acumen to deliver solutions that matter.
            </p>
            <Button className="mt-6 gap-2" asChild>
              <Link href="/contact">
                Join Our Mission <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl bg-primary/5 p-6 text-center">
              <Code2 className="mx-auto mb-2 h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="font-semibold">100+</h3>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="rounded-2xl bg-primary/5 p-6 text-center">
              <Users className="mx-auto mb-2 h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="font-semibold">50+</h3>
              <p className="text-sm text-muted-foreground">Clients</p>
            </div>
            <div className="rounded-2xl bg-primary/5 p-6 text-center">
              <Brain className="mx-auto mb-2 h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="font-semibold">4.9/5</h3>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
            <div className="rounded-2xl bg-primary/5 p-6 text-center">
              <Cloud className="mx-auto mb-2 h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="font-semibold">5+</h3>
              <p className="text-sm text-muted-foreground">Years</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mb-20">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border bg-background p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-semibold">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mb-20">
        <h2 className="mb-8 text-center text-3xl font-bold">Meet Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border bg-background p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-blue-600 p-8 text-center text-white md:p-12"
        >
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Want to Work With Us?
            </h2>
            <p className="mb-6 text-white/90">
              Let&apos;s build something amazing together. Get in touch today.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
