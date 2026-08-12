import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Shield, Eye, Lock, Server, FileText, BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal & Licensing | TifeLabs",
  description:
    "Review TifeLabs' legal policies, copyright notices, brand trademark protection, terms of use, privacy policy, and GDPR compliance.",
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
          <a href="#copyright" className="hover:text-primary transition-colors">1. Copyright &amp; Brand Trademark</a>
          <a href="#opensource" className="hover:text-primary transition-colors">2. Open Source Attribution</a>
          <a href="#terms" className="hover:text-primary transition-colors">3. Terms of Use</a>
          <a href="#privacy" className="hover:text-primary transition-colors">4. Privacy Policy</a>
          <a href="#gdpr" className="hover:text-primary transition-colors">5. GDPR &amp; Data Subject Rights</a>
          <a href="#performance" className="hover:text-primary transition-colors">6. Performance &amp; Site Optimization</a>
          <a href="#disclaimer" className="hover:text-primary transition-colors">7. Disclaimer &amp; Liability</a>
          <a href="#contact" className="hover:text-primary transition-colors">8. Legal Contact</a>
        </div>
      </div>

      <div className="space-y-12">
        {/* Section 1 - Copyright & Trademark Protection */}
        <section id="copyright" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            1. Copyright &amp; Brand Trademark Notice
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              &copy; {currentYear} TifeLabs&trade;. All rights reserved.
            </p>
            
            <div className="rounded-xl border bg-card p-5 space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                Exclusive Brand Identity &amp; Logo Ownership
              </h3>
              <p>
                The <strong>TifeLabs&trade;</strong> brand identity, including but not limited to the official visual logo mark (geometric emblem), logotype (&ldquo;TIFE-LABS&rdquo;), brand tagline (<em>&ldquo;CODE &bull; INNOVATE &bull; LEAD&rdquo;</em>), graphics, and website design, are the original creative works and exclusive intellectual property of the founder of TifeLabs.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>
                  <strong>Unregistered Trademark Notice (&trade;):</strong> TifeLabs&trade; and the TifeLabs emblem are protected under common law trademark rights and international copyright protection.
                </li>
                <li>
                  <strong>Prohibited Use:</strong> No person or organization may copy, alter, imitate, redistribute, host, sub-license, or incorporate this logo, mark, or brand tagline into third-party commercial or non-commercial works without express, prior written consent from the creator.
                </li>
              </ul>
            </div>

            <p>
              All other content, custom software code, interface components, and written copy published on this domain are owned exclusively by TifeLabs unless explicitly credited below.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="opensource" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
            2. Open Source Attribution
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              TifeLabs utilizes open-source software and components under their respective original licenses:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Next.js Framework:</strong> Created under the MIT License by Vercel, Inc. (&copy; Vercel, Inc.).
              </li>
              <li>
                <strong>UI Components &amp; Icons:</strong> Tailwind CSS (&copy; Tailwind Labs, Inc.) and Lucide Icons (&copy; Lucide Contributors).
              </li>
              <li>
                <strong>Animations:</strong> Framer Motion (&copy; Framer B.V.).
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section id="terms" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
            3. Terms of Use
          </h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              By accessing and using this site, you agree to comply with all applicable laws and regulations. You must not attempt to reverse-engineer, exploit security vulnerabilities, or scrape content without explicit written permission.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="privacy" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" aria-hidden="true" />
            4. Privacy Policy
          </h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              We prioritize user privacy. Any personal information submitted via contact forms or analytics gathered during your visit is handled securely and will never be sold or rented to third parties.
            </p>
          </div>
        </section>

        {/* Section 5 - GDPR & Data Rights */}
        <section id="gdpr" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" aria-hidden="true" />
            5. GDPR &amp; Data Subject Rights
          </h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              Under the General Data Protection Regulation (GDPR) and international privacy frameworks, users have the right to request access to, correction of, or deletion of their personal data processed by TifeLabs.
            </p>
            <p>
              To request data removal or exercise your privacy rights, please submit an inquiry to our legal representative.
            </p>
          </div>
        </section>

        {/* Section 6 - Performance & Optimization */}
        <section id="performance" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Server className="h-5 w-5 text-primary" aria-hidden="true" />
            6. Performance &amp; Site Optimization
          </h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              This application leverages global edge delivery and static page generation. Anonymous metrics may be collected for performance monitoring, telemetry, and threat protection.
            </p>
          </div>
        </section>

        {/* Section 7 - Disclaimer & Liability */}
        <section id="disclaimer" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            7. Disclaimer &amp; Limitation of Liability
          </h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              All content and materials provided on this website are provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. TifeLabs assumes no liability for any indirect, special, or consequential damages arising out of your use of this website.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
            8. Legal Contact
          </h2>
          <div className="rounded-2xl border bg-muted/30 p-6">
            <p className="text-muted-foreground">
              For trademark authorization, copyright permissions, GDPR requests, or any legal inquiries regarding TifeLabs brand assets, please contact us at:
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
      </div>

      {/* Footer */}
      <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} TifeLabs&trade;. All rights reserved.</p>
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
