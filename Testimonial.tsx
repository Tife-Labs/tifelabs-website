"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Adebayo",
    role: "CEO, TechStart Nigeria",
    content: "TifeLabs transformed our outdated system into a modern, scalable platform. Our efficiency increased by 300%!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    name: "Dr. Sarah Chen",
    role: "CTO, HealthTech Solutions",
    content: "The AI solution they built for us is revolutionary. We're now making data-driven decisions in real-time.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahC"
  },
  {
    name: "Michael Okafor",
    role: "Product Lead, FinCorp",
    content: "Professional, innovative, and delivered ahead of schedule. They're our go-to tech partner.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelO"
  }
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Real feedback from real clients
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border bg-background p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
