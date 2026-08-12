import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | TifeLabs™",
  description: "Learn more about TifeLabs™ and our mission to build high-performance software.",
};

const stats = [
  { label: "Projects Completed", value: "25+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Uptime Guaranteed", value: "99.9%" },
];

const technologies = [
  "Next.js / React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Cloud Infrastructure",
  "AI Integration",
];

export default function AboutPage() {
  return (
    <main className="container max-w-4xl py-20 md:py-28">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Home
      </Link>

      <h1 className="mb-6 text-4xl font-bold">About TifeLabs™</h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        TifeLabs™ is a modern software engineering brand focused on building high-performance, resilient, and beautifully designed digital applications.
      </p>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className="rounded-2xl border bg-card p-6 text-center">
            <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Core Technologies */}
      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold">Core Technologies</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-2 rounded-lg border bg-muted/30 p-3 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Button asChild>
          <Link href="/contact">Work With Us</Link>
        </Button>
      </div>
    </main>
  );
}
