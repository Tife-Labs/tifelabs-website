"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glass-morphism border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold transition-colors hover:text-primary"
        >
          Tife<span className="text-primary">Labs</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href
                  ? "text-primary"
                  : "text-foreground/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
