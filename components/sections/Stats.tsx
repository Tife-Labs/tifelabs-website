"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    id: "projects-delivered",
    icon: Code2,
    value: "100+",
    label: "Projects Delivered",
  },
  {
    id: "happy-clients",
    icon: Users,
    value: "50+",
    label: "Happy Clients",
  },
  {
    id: "client-rating",
    icon: Award,
    value: "4.9/5",
    label: "Client Rating",
  },
  {
    id: "years-experience",
    icon: Clock,
    value: "5+",
    label: "Years Experience",
  },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="border-y bg-muted/50 py-16"
      aria-label="Company Statistics"
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-3 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
