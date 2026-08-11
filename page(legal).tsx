import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Shield, Eye, Lock, Server, FileText } from "lucide-react";

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
          <a href="#opensource" className="hover:text-primary transition-colors">2. Open Source &amp; Hosting Attribution</a>
          <a href="#terms" className="hover:text-primary transition-colors">3. Terms of Use</a>
          <a href="#privacy" className="hover:text-primary transition-colors">4. Privacy Policy</a>
          <a href="#gdpr" className="hover:text-primary transition-colors">5. GDPR &amp; Data Subject Rights</a>
          <a href="#performance" className="hover:text-primary transition-colors">6. Performance &amp; Optimization</a>
          <a href="#disclaimer" className="hover:text-primary transition-colors">7. Disclaimer &amp; Liability</a>
          <a href="#contact" className="hover:text-primary transition-colors">8. Legal Contact</a>
        </div>
      </div>

      <div className="space-y-12">
        {/* Section 1 */}
        <section id="copyright" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            1. Copyright Notice
          </h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              &copy; {currentYear} TifeLabs. All rights reserved.
            </p>
            <p>
              All content, brand assets, source code, designs, graphics, and textual material on this website are the proprietary property of TifeLabs unless explicitly noted otherwise. Unauthorized reproduction, modification, or distribution without written permission is strictly prohibited.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="opensource" className="scroll-mt-24">
          <h2 className="mb-4 text-2xl font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
            2. Open Source &amp; Hosting Attribution
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              TifeLabs leverages open-source technology and enterprise cloud infrastructure to deliver fast, secure web applications:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Next.js Framework:</strong> Created under the MIT License by Vercel, Inc. (&copy; Vercel, Inc.).
              </li>
              <li>
                <strong>Hosting Infrastructure:</strong> Deployed on and served globally via Netlify (&copy; Netlify, Inc.).
              </li>
              <li>
                <strong>UI &amp; Icons:</strong> Tailwind CSS (&copy; Tailwind Labs, Inc.) and Lucide Icons (&copy; Lucide Contributors).
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
              This application leverages global edge delivery and static page generation hosted on Netlify platform infrastructure. Anonymous metrics may be collected for performance monitoring, telemetry, and threat protection.
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
      </div>

      {/* Footer */}
      <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} TifeLabs. All rights reserved.</p>
        <p className="mt-1 text-xs">
          Built with Next.js | Hosted on Netlify | 
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
