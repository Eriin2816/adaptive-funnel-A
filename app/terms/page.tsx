import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Adaptive Automations",
  description: "Terms and Conditions for Adaptive Automations — AI-Powered Growth Platform for Los Angeles businesses.",
};

export default function TermsAndConditions() {
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
          Terms &amp; Conditions
        </h1>
        <p className="text-white/40 text-sm mb-10">
          Last updated: January 1, 2025
        </p>

        <div
          className="rounded-2xl p-8 mb-8"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(124,58,237,0.12)",
          }}
        >
          <div className="space-y-8 text-white/60 text-sm leading-[1.85]">
            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the website and services of Adaptive Automations (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">2. Description of Services</h2>
              <p>
                Adaptive Automations provides AI-powered marketing automation services including, but not limited to: Voice AI, lead generation, CRM setup, automated follow-ups, appointment booking, reputation management, SEO, and workflow automation. Services are provided on a subscription or project basis as agreed in individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">3. Service Agreements</h2>
              <p>
                Specific terms for services rendered, including scope, pricing, payment schedules, and deliverables, are outlined in separate service agreements or statements of work signed between the Company and the Client. These Terms and Conditions govern all such service agreements unless otherwise specified in writing.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">4. Payment Terms</h2>
              <p className="mb-3">Unless otherwise agreed in writing:</p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Invoices are due upon receipt unless specified otherwise",
                  "Late payments may incur interest charges of 1.5% per month",
                  "Subscription fees are billed in advance on a recurring basis",
                  "Refunds are subject to the specific terms of your service agreement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">5. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and software, is the property of Adaptive Automations and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission. Custom work created for clients remains the client&rsquo;s property upon full payment.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">6. Client Responsibilities</h2>
              <p className="mb-3">Clients agree to:</p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Provide accurate and complete information necessary for service delivery",
                  "Ensure timely review and approval of deliverables",
                  "Maintain confidentiality of any proprietary information shared",
                  "Comply with all applicable laws and regulations in their use of our services",
                  "Not use our services for illegal, harmful, or deceptive purposes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06B6D4] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">7. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of proprietary and sensitive information shared during the course of the business relationship. This obligation survives termination of services for a period of two (2) years.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Adaptive Automations shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability for any claim shall not exceed the amount paid by you for services in the three (3) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">9. Results Disclaimer</h2>
              <p>
                While we strive to deliver exceptional results, Adaptive Automations does not guarantee specific outcomes, including lead volumes, revenue increases, or other business metrics. Results vary based on industry, market conditions, client participation, and other factors outside our control.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">10. Termination</h2>
              <p>
                Either party may terminate services with written notice as specified in the applicable service agreement. The Company reserves the right to immediately terminate services for material breach of these terms, non-payment, or illegal use of services. Upon termination, all outstanding fees become immediately due.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">11. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict of law provisions. Any disputes shall be resolved in the courts of Los Angeles County, California.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-white text-base mb-3">13. Contact Information</h2>
              <p>For questions regarding these Terms and Conditions, please contact us:</p>
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
