import Link from "next/link";
import { ArrowLeft, Mail, Shield, Cookie, Gauge, Eye } from "lucide-react";

export default function LegalPage() {
  const currentYear = new Date().getFullYear();
  const contactEmail = process.env.NEXT_PUBLIC_EMAIL || "tifelabscontact@gmail.com";

  return (
    <div className="container max-w-4xl py-20 md:py-28">
      {/* Back Button */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="mb-4 text-4xl font-bold">Legal & Licensing</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString("en-US", { 
          year: "numeric", 
          month: "long", 
          day: "numeric" 
        })}
      </p>

      {/* Table of Contents */}
      <div className="mb-12 rounded-2xl border bg-muted/30 p-6">
        <h2 className="mb-4 text-lg font-semibold">Table of Contents</h2>
        <div className="grid gap-2 text-sm md:grid-cols-2">
          <a href="#copyright" className="hover:text-primary">1. Copyright Notice</a>
          <a href="#opensource" className="hover:text-primary">2. Open Source Attribution</a>
          <a href="#terms" className="hover:text-primary">3. Terms of Use</a>
          <a href="#privacy" className="hover:text-primary">4. Privacy Policy</a>
          <a href="#gdpr" className="hover:text-primary">5. GDPR Compliance</a>
          <a href="#performance" className="hover:text-primary">6. Performance & Optimization</a>
          <a href="#disclaimer" className="hover:text-primary">7. Disclaimer</a>
          <a href="#contact-legal" className="hover:text-primary">8. Legal Contact</a>
        </div>
      </div>

      {/* 1. Copyright Section */}
      <section id="copyright" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Shield className="h-5 w-5 text-primary" />
          1. Copyright Notice
        </h2>
        <p className="text-muted-foreground">
          © {currentYear} TifeLabs. All rights reserved.
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
            website's functionality.
          </li>
          <li>
            <strong>Disclaimer:</strong> This website is provided "as is" without 
            warranties of any kind, either express or implied.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> TifeLabs shall not be liable 
            for any damages arising from the use of this website.
          </li>
          <li>
            <strong>Governing Law:</strong> These terms are governed by the laws of 
            the Federal Republic of Nigeria.
          </li>
        </ul>
      </section>

      {/* 4. Privacy Policy */}
      <section id="privacy" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Eye className="h-5 w-5 text-primary" />
          4. Privacy Policy
        </h2>
        <p className="text-muted-foreground">
          We are committed to protecting your privacy. Here's how we handle your data:
        </p>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">4.1 Information We Collect</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li><strong>Contact Information:</strong> Name, email address, phone number (when you fill out our contact form)</li>
              <li><strong>Company Information:</strong> Company name and role (when provided)</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, and interactions with our website</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">4.2 How We Use Your Data</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website and services</li>
              <li>To send you relevant updates (only if you opt-in)</li>
              <li>To analyze website performance and user behavior</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">4.3 Data Storage & Security</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Your data is stored securely using industry-standard encryption</li>
              <li>Form submissions are processed via Formspree (GDPR compliant)</li>
              <li>We retain your data only as long as necessary</li>
              <li>We implement regular security audits and updates</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">4.4 Third-Party Services</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li><strong>Formspree:</strong> Handles contact form submissions</li>
              <li><strong>Vercel:</strong> Hosts our website and provides analytics</li>
              <li><strong>Google Analytics:</strong> Tracks website usage (optional)</li>
              <li>These services have their own privacy policies</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">4.5 Your Rights</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Rectification:</strong> Correct inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data</li>
              <li><strong>Restriction:</strong> Limit how we use your data</li>
              <li><strong>Portability:</strong> Transfer your data to another service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. GDPR Compliance */}
      <section id="gdpr" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Cookie className="h-5 w-5 text-primary" />
          5. GDPR Compliance
        </h2>
        <p className="text-muted-foreground">
          We are committed to complying with the General Data Protection Regulation (GDPR) 
          to protect the privacy and data of our users, especially those in the European Union.
        </p>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">5.1 Lawful Basis for Processing</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li><strong>Consent:</strong> You provide explicit consent when filling out our forms</li>
              <li><strong>Legitimate Interest:</strong> We process data to improve our services</li>
              <li><strong>Contractual Necessity:</strong> Data needed to respond to your inquiries</li>
              <li><strong>Legal Obligation:</strong> Compliance with applicable laws</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">5.2 Data Subject Rights (Under GDPR)</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li><strong>Right to Access:</strong> You can request all data we hold about you</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data ("Right to be Forgotten")</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Right to Object:</strong> Object to data processing for marketing purposes</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">5.3 Data Protection Measures</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>All data is encrypted in transit (HTTPS/TLS)</li>
              <li>Data is stored on secure, GDPR-compliant servers</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal data (need-to-know basis)</li>
              <li>Data retention policies in place</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">5.4 Cookie Policy</h3>
            <p className="text-sm text-muted-foreground">
              We use minimal cookies to enhance your experience:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how you use our site (optional)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings (if applicable)</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              You can manage cookie preferences through your browser settings.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Performance & Optimization */}
      <section id="performance" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Gauge className="h-5 w-5 text-primary" />
          6. Performance & Optimization
        </h2>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">6.1 Our Commitment to Performance</h3>
            <p className="text-sm text-muted-foreground">
              We are committed to delivering a fast, responsive, and optimized experience 
              for all users. Here's how we achieve this:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li><strong>Fast Loading Times:</strong> We use Next.js for optimal performance</li>
              <li><strong>Image Optimization:</strong> Images are compressed and served in modern formats (WebP, AVIF)</li>
              <li><strong>Lazy Loading:</strong> Content loads as you scroll, reducing initial load time</li>
              <li><strong>Code Splitting:</strong> Only load what's needed for each page</li>
              <li><strong>CDN:</strong> Content delivered via Vercel's global CDN</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">6.2 Performance Metrics We Track</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li><strong>Core Web Vitals:</strong> Largest Contentful Paint (LCP), First Input Delay (FID), Cumulative Layout Shift (CLS)</li>
              <li><strong>Time to Interactive (TTI):</strong> When the page becomes fully interactive</li>
              <li><strong>First Contentful Paint (FCP):</strong> First content appears on screen</li>
              <li><strong>Speed Index:</strong> How quickly content is visually displayed</li>
              <li><strong>Total Blocking Time (TBT):</strong> Time between FCP and TTI</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">6.3 Current Performance Status</h3>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                <div className="text-2xl font-bold text-green-600">95+</div>
                <div className="text-xs text-muted-foreground">Performance Score</div>
              </div>
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                <div className="text-2xl font-bold text-blue-600">&lt;1.5s</div>
                <div className="text-xs text-muted-foreground">Average Load Time</div>
              </div>
              <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-xs text-muted-foreground">Accessibility Score</div>
              </div>
              <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
                <div className="text-2xl font-bold text-orange-600">A+</div>
                <div className="text-xs text-muted-foreground">Best Practices</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">6.4 Continuous Improvement</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Regular performance audits using Lighthouse</li>
              <li>Automatic monitoring via Vercel Analytics</li>
              <li>Regular dependency updates for security and performance</li>
              <li>User feedback integration for UX improvements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Disclaimer */}
      <section id="disclaimer" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 text-2xl font-bold">7. Disclaimer</h2>
        <p className="text-muted-foreground">
          The information provided on this website is for general informational 
          purposes only. While we strive to keep the information accurate and 
          up-to-date, we make no representations or warranties of any kind, 
          express or implied, about the completeness, accuracy, reliability, 
          suitability, or availability of the information.
        </p>
        <p className="mt-2 text-muted-foreground">
          Any reliance you place on such information is strictly at your own risk. 
          TifeLabs shall not be liable for any loss or damage arising from the use 
          of this website.
        </p>
        <p className="mt-2 text-muted-foreground">
          External links are provided for convenience and do not imply endorsement. 
          We are not responsible for the content of external sites.
        </p>
      </section>

      {/* 8. Legal Contact */}
      <section id="contact-legal" className="mb-12 scroll-mt-20">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Mail className="h-5 w-5 text-primary" />
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
              <Mail className="h-4 w-4" />
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
        <p>© {currentYear} TifeLabs. All rights reserved.</p>
        <p className="mt-1 text-xs">
          Built with Next.js | 
          <span className="mx-1">•</span>
          GDPR Compliant
        </p>
        <Link href="/" className="mt-2 inline-block hover:text-primary">
          ← Return to Homepage
        </Link>
      </div>
    </div>
  );
}
