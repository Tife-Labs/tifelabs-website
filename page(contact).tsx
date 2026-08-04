"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Send, MapPin, Mail, Phone } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tifelabscontact@gmail.com",
    href: "mailto:tifelabscontact@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 XXX XXX XXXX",
    href: "tel:+2347035930768",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    setError(null);

    const formspreeId = process.env.mlgqqwyz;

    if (!formspreeId) {
      setError("Form endpoint is not configured.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://formspree.io/f/${formspreeId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="container flex min-h-[70vh] items-center justify-center py-20">
        <div className="text-center">
          <div className="mb-4 inline-flex rounded-full bg-green-100 p-4 dark:bg-green-900/30">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <h2 className="mb-2 text-3xl font-bold">Message Sent! 🎉</h2>
          <p className="mb-6 text-muted-foreground">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <Button onClick={() => setSubmitted(false)}>
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Let's Build Together
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-lg border p-4"
                  >
                    <div className="rounded-full bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name *
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address *
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Company Name
                </label>
                <Input
                  {...register("company")}
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Service Interested In *
                </label>
                <select
                  {...register("service")}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <option value="">Select a service...</option>
                  <option value="software">Software Development</option>
                  <option value="cloud">Cloud & DevOps</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="consulting">Tech Consulting</option>
                  <option value="security">Security Solutions</option>
                  <option value="performance">Performance Optimization</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  {...register("message")}
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {error && (
                <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
