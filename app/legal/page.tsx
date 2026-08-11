import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Shield, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal & Licensing | TifeLabs",
  description:
    "Review TifeLabs' legal policies, copyright notices, terms of use, privacy policy, GDPR compliance, and open-source attributions.",
};

export default function LegalPage() {
  const currentYear = new Date().getFullYear();
  const contactEmail = process.env.NEXT_PUBLIC_EMAIL || "tifelabscontact@gmail.com";
  const lastUpdated = "January 15, 2025";

  return (
    <main className="container max-w-4xl py-20 md:py-28">
      {/* Back Button */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Home
      </Link>

      <h1 className="mb-4 text-4xl font-bold">Legal &amp; Licensing</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Last updated: {lastUpdated}
      </p>

      {/* Table of Contents */}
      <div className="mb-12 rounded-2xl border bg-muted/30 p-6">
        <h2 className="mb-4 text-lg font-semibold">Table of Contents</h2>
        <div className="grid gap-2 text-sm md:grid-cols-2">
          <a href="#copyright" className="hover:text-primary transition-colors">1. Copyright Notice</a>
          <a href="#opensource" className="hover:text-primary transition-colors">2. Open Source Attribution</a>
          <a href="#terms" className="hover:text-primary transition-colors">3. Terms of Use</a>
          <a href="#privacy" className="hover:text-primary transition-colors">4. Privacy Policy</a>
          <a href="#gdpr" className="hover:text-primary transition-colors">5. GDPR Compliance</a>
          <a href="#performance" className="hover:text-primary transition-colors">6. Performance &amp; Optimization</a>
          <a href="#disclaimer" className="hover:text-primary transition-colors">7. Disclaimer</a>
          <a href="#contact-legal" className="hover:text-primary transition-colors">8. Legal Contact</a>
        </div>
      </div>

      {/* 1. Copyright Section */}
      <section id="copyright" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
          1. Copyright Notice
        </h2>
        <p className="text-muted-foreground">
          &copy; {currentYear} TifeLabs. All rights reserved.
        </p>
        <p className="mt-2 text-muted-foreground">
          All content, including text, graphics, logos, source code, and design elements, 
          is the exclusive property of TifeLabs and is protected by international copyright 
          laws, trademark laws, and other intellectual property rights.
        </p>
        <p className="mt-2 text-muted-foreground">
          Unauthorized reproduction, distribution, modification, or transmission of any 
          content on this website is strictly prohibited without prior written consent 
          from TifeLabs.
        </p>
      </section>

      {/* 2. Open Source Attribution */}
      <section id="opensource" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 text-2xl font-bold">2. Open Source Attribution</h2>
        <p className="text-muted-foreground">
          This website is built with the following open-source technologies:
        </p>
        <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
          <li>
            <strong>Next.js</strong> - MIT License
            <br />
            <span className="text-xs">
              Copyright (c) Vercel, Inc. All rights reserved.
            </span>
          </li>
          <li>
            <strong>React</strong> - MIT License
            <br />
            <span className="text-xs">
              Copyright (c) Meta Platforms, Inc. and affiliates.
            </span>
          </li>
          <li>
            <strong>Tailwind CSS</strong> - MIT License
            <br />
            <span className="text-xs">
              Copyright (c) Tailwind Labs, Inc.
            </span>
          </li>
          <li>
            <strong>Framer Motion</strong> - MIT License
            <br />
            <span className="text-xs">
              Copyright (c) Framer B.V.
            </span>
          </li>
          <li>
            <strong>Lucide Icons</strong> - ISC License
            <br />
            <span className="text-xs">
              Copyright (c) Lucide Contributors
            </span>
          </li>
        </ul>
      </section>

      {/* 3. Terms of Use */}
      <section id="terms" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 text-2xl font-bold">3. Terms of Use</h2>
        <p className="text-muted-foreground">
          By accessing and using this website, you agree to the following terms:
        </p>
        <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
          <li>
            <strong>Acceptance of Terms:</strong> These terms constitute a legally 
            binding agreement between you and TifeLabs.
          </li>
          <li>
            <strong>Intellectual Property:</strong> All content, trademarks, and 
            intellectual property are owned by TifeLabs.
          </li>
          <li>
            <strong>User Conduct:</strong> You agree not to misuse or disrupt the 
            website&apos;s functionality.
          </li>
          <li>
            <strong>Disclaimer:</strong> This website is provided &quot;as is&quot; without 
            warranties of any kind, either express or implied.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> TifeLabs shall not be liable for any 
            damages arising from the use of this website.
          </li>
          <li>
            <strong>Governing Law:</strong> These terms are governed by the laws of the Federal 
            Republic of Nigeria.
          </li>
        </ul>
      </section>

      {/* 4. Privacy Policy */}
      <section id="privacy" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Eye className="h-5 w-5 text-primary" aria-hidden="true" />
          4. Privacy Policy
        </h2>
        <p className="text-muted-foreground">
          We are committed to protecting your privacy. Here&apos;s how we handle your data:
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">4.1 Information We Collect</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li><strong>Contact Information:</strong> Name, email address, phone number when submitted via forms.</li>
              <li><strong>Usage Data:</strong> Anonymized analytical data regarding page views and interaction.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Legal Contact */}
      <section id="contact-legal" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
          8. Legal Contact
        </h2>
        <div className="rounded-2xl border bg-muted/30 p-6">
          <p className="text-muted-foreground">
            For legal inquiries, copyright permissions, GDPR requests, or any other legal matters, 
            please contact us at:
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {contactEmail}
            </a>
            <p className="text-sm text-muted-foreground">
              <strong>TifeLabs Legal Department</strong>
              <br />
              Lagos, Nigeria
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Response Time:</strong> We aim to respond within 5 business days
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} TifeLabs. All rights reserved.</p>
        <p className="mt-1 text-xs">
          Built with Next.js | 
          <span className="mx-1">&bull;</span>
          GDPR Compliant
        </p>
        <Link href="/" className="mt-2 inline-block hover:text-primary transition-colors">
          &larr; Return to Homepage
        </Link>
      </div>
    </main>
  );
}
