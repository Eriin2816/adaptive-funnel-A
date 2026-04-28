import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Adaptive Automations",
  description: "Privacy Policy for Adaptive Automations — AI-Powered Growth Platform for Los Angeles businesses.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: "#04000E" }}>
      {/* Header */}
      <header
        className="border-b"
        style={{ borderColor: "rgba(124,58,237,0.12)", background: "rgba(4,0,14,0.95)" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" aria-label="Adaptive Automations home">
            <Image
              src="/adaptive-logo.png"
              alt="Adaptive AI Business Automations"
              width={180}
              height={55}
              className="object-contain"
              style={{ height: "50px", width: "auto" }}
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-white/50 hover:text-[#A78BFA] text-sm font-medium transition-colors duration-200 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
          aria-hidden="true"
        />

        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-xs font-semibold uppercase tracking-widest font-display"
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.2)",
            color: "#A78BFA",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
          Legal
        </div>

        <h1
          className="font-display font-extrabold text-white mb-3 tracking-[-0.03em]"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-white/40 text-sm mb-10">
          Last updated: January 1, 2025
        </p>

        <div
          className="rounded-2xl p-8 mb-8 prose-section"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(124,58,237,0.12)",
          }}
        >
          <div className="space-y-8 text-white/60 text-sm leading-[1.85]">
            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">1. Introduction</h2>
              <p>
                Adaptive Automations (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly to us, including:</p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Name, email address, phone number, and business information when you contact us or book a call",
                  "Information submitted through our contact forms or booking widgets",
                  "Communications between you and our team",
                  "Payment and billing information when you become a client",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3">We also automatically collect certain technical information when you visit our website, including IP address, browser type, operating system, pages viewed, and time spent on pages.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use collected information to:</p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Provide, operate, and improve our AI automation services",
                  "Respond to inquiries and schedule discovery calls",
                  "Send service-related communications and updates",
                  "Process payments and manage billing",
                  "Analyze website usage to enhance user experience",
                  "Comply with legal obligations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06B6D4] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">4. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business (such as GoHighLevel for CRM and scheduling), subject to confidentiality agreements. We may also disclose information when required by law or to protect our legal rights.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">5. Cookies and Tracking</h2>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your experience, analyze site traffic, and support our marketing efforts. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionality.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">6. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">7. Your Rights</h2>
              <p className="mb-3">Depending on your location, you may have the right to:</p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Access, correct, or delete your personal information",
                  "Opt out of marketing communications at any time",
                  "Request data portability",
                  "Lodge a complaint with a supervisory authority",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">8. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites and we use third-party services (including GoHighLevel for booking and form processing). This Privacy Policy does not apply to those external services. We encourage you to review the privacy policies of any third-party services you interact with.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">9. Children&rsquo;s Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete that information.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page with a revised &ldquo;Last updated&rdquo; date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div
                className="mt-4 p-4 rounded-xl"
                style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
              >
                <p className="font-semibold text-white mb-1">Adaptive Automations</p>
                <p>15301 Ventura Blvd., Sherman Oaks, CA 91403</p>
                <p>
                  Email:{" "}
                  <a href="mailto:steve@adaptiveautomate.com" className="text-[#A78BFA] hover:text-white transition-colors">
                    steve@adaptiveautomate.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:3237818600" className="text-[#A78BFA] hover:text-white transition-colors">
                    323 781 8600
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#A78BFA] hover:text-white text-sm font-medium transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer mini */}
      <footer
        className="mt-8 py-6 border-t text-center"
        style={{ borderColor: "rgba(124,58,237,0.08)" }}
      >
        <p className="text-white/20 text-xs">
          &copy; {new Date().getFullYear()} Adaptive Automations. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
