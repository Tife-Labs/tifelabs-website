import Link from "next/link";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  Heart
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Legal", href: "/legal" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Software Development", href: "/services#software" },
    { name: "Cloud & DevOps", href: "/services#cloud" },
    { name: "AI & ML", href: "/services#ai" },
    { name: "Tech Consulting", href: "/services#consulting" },
  ],
  social: [
    { name: "GitHub", icon: Github, href: process.env.NEXT_PUBLIC_GITHUB || "#" },
    { name: "Twitter", icon: Twitter, href: process.env.NEXT_PUBLIC_TWITTER || "#" },
    { name: "LinkedIn", icon: Linkedin, href: process.env.NEXT_PUBLIC_LINKEDIN || "#" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const email = process.env.NEXT_PUBLIC_EMAIL || "tifelabscontact@gmail.com";
  const phone = process.env.NEXT_PUBLIC_PHONE || "+234 703 593 0768";

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold transition-colors hover:text-primary"
            >
              Tife<span className="text-primary">Labs</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Building tomorrow's tech solutions today.
            </p>
            <div className="mt-4 flex gap-3">
              {footerLinks.social.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    aria-label={`Visit our ${item.name} page`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-3 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-3 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 font-semibold">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-primary"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{phone}</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {currentYear} TifeLabs. All rights reserved. | Built with ❤️ using Next.js
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500" /> in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
