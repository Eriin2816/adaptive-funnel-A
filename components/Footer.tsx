"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        background: "#04000E",
        borderTop: "1px solid rgba(124,58,237,0.12)",
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6" aria-label="Adaptive Automations home">
              <Image
                src="/adaptive-logo.png"
                alt="Adaptive AI Business Automations"
                width={220}
                height={70}
                className="object-contain"
                style={{ height: "90px", width: "auto" }}
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              AI-powered growth platform helping Los Angeles businesses generate 30–50 qualified leads per month through intelligent automation.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.business.phoneHref}
                className="flex items-center gap-3 text-white/55 hover:text-[#A78BFA] text-sm font-medium transition-colors duration-200 group"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                {siteConfig.business.phone}
              </a>
              <a
                href={siteConfig.business.emailHref}
                className="flex items-center gap-3 text-white/55 hover:text-[#A78BFA] text-sm font-medium transition-colors duration-200 group"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                {siteConfig.business.email}
              </a>
              <div className="flex items-center gap-3 text-white/45 text-sm">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.12)" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                {siteConfig.business.address}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5 font-display"
            >
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/55 hover:text-[#A78BFA] text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started + Legal */}
          <div>
            <h3
              className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5 font-display"
            >
              Get Started
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Ready to build a system that converts? Book a free discovery call.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openCalendarModal"))}
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-3 rounded-xl btn-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] mb-8"
            >
              Book a Free Call
            </button>

            <h3
              className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4 font-display"
            >
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/55 hover:text-[#A78BFA] text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/55 hover:text-[#A78BFA] text-sm transition-colors duration-200"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(124,58,237,0.08)" }}
        >
          <p className="text-white/40 text-xs">
            &copy; {currentYear} {siteConfig.business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white/70 text-xs transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-white/10 text-xs">·</span>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/10 text-xs">·</span>
            <p className="text-white/40 text-xs">AI-Powered Growth Platform</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
