"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";

const FORM_URL = "https://go.adaptiveautomate.com/widget/form/n116FzMa511tva7LqoME";
const DELAY_MS = 10000;
const STORAGE_KEY = "aa_popup_dismissed";

const CHECKLIST = [
  "Free, no-obligation discovery call",
  "Response within 1 business day",
  "Custom automation roadmap included",
  "Serving Los Angeles businesses since day one",
];

export default function FormPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Get a Free Discovery Call"
      className="fixed inset-0 z-[190] flex items-end sm:items-center justify-center p-4"
      style={{ animation: "fadeIn 0.3s ease forwards" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Popup panel */}
      <div
        className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden"
        style={{
          background: "#0D0428",
          border: "1px solid rgba(139,92,246,0.2)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.85), 0 0 60px rgba(124,58,237,0.15)",
          animation: "fadeUp 0.45s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      >
        {/* Header band */}
        <div
          className="px-5 pt-5 pb-4 relative"
          style={{
            background: "linear-gradient(135deg, #0D0428 0%, #110535 100%)",
            borderBottom: "1px solid rgba(139,92,246,0.12)",
          }}
        >
          {/* Close button */}
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Brand row */}
          <div className="flex items-center gap-2.5 mb-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}
            >
              <svg className="w-5 h-5 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M12 12h.008v.008H12V12z" />
              </svg>
            </div>
            <span className="text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.15em] font-display">
              Adaptive Automations
            </span>
          </div>

          <h2 className="text-white text-lg font-bold font-display leading-snug tracking-tight pr-8">
            Get a Free Discovery Call
          </h2>
          <p className="text-white/50 text-xs mt-1.5 leading-relaxed">
            We&rsquo;ll map your lead flow and show you exactly where automation can win you more business.
          </p>
        </div>

        {/* Checklist */}
        <div className="px-5 py-4">
          <ul className="flex flex-col gap-2.5">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.25)" }}
                >
                  <svg className="w-3 h-3 text-[#06B6D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-white/70 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="px-5 pb-5 flex flex-col gap-3">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl text-white font-bold text-sm font-display btn-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Fill Out the Estimate Form
            <svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: "rgba(139,92,246,0.15)" }} />
            <span className="text-white/25 text-xs">or</span>
            <div className="flex-1 h-px" style={{ background: "rgba(139,92,246,0.15)" }} />
          </div>

          <a
            href={siteConfig.business.phoneHref}
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl text-white/80 hover:text-white text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(139,92,246,0.2)",
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call ({siteConfig.business.phone})
          </a>

          {/* Trust row */}
          <div className="flex items-center justify-center gap-4 pt-1">
            {["No spam", "No pressure", "Fast response"].map((label, i) => (
              <div key={label} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-white/15 text-xs">·</span>}
                <svg className="w-3 h-3 text-[#06B6D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/35 text-[11px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
