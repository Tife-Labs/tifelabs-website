import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog | TifeLabs",
  description: "Insights, articles, and engineering updates from the TifeLabs team.",
};

export default function BlogPage() {
  return (
    <main className="container flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="mx-auto max-w-xl">
        {/* Decorative Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          <span>Engineering & Insights</span>
        </div>

        {/* Icon & Heading */}
        <div className="mb-4 flex justify-center">
          <div className="rounded-2xl bg-primary/10 p-4 text-primary">
            <BookOpen className="h-10 w-10" aria-hidden="true" />
          </div>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          TifeLabs <span className="gradient-text">Blog</span>
        </h1>

        <p className="mb-8 text-lg text-muted-foreground">
          We&apos;re crafting in-depth technical guides, AI architecture reviews, and engineering updates. Stay tuned for our upcoming articles!
        </p>

        {/* Action Button */}
        <Button asChild variant="outline" className="gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
