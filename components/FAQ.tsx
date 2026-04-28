"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #04000E 0%, #060118 100%)" }}
      aria-label="Frequently asked questions"
    >
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 100%, rgba(124,58,237,0.08) 0%, transparent 60%)",
          filter: "blur(30px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16">
          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start reveal">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 badge-violet text-xs font-semibold uppercase tracking-widest font-display"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              FAQ
            </div>
            <h2
              className="font-display font-extrabold text-white leading-tight tracking-[-0.03em] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}
            >
              Common questions, answered
            </h2>
            <p className="text-white/50 text-base leading-[1.75] mb-8">
              Not sure if this is the right fit or how the process works? These are the questions we hear most often.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openCalendarModal"))}
              className="inline-flex items-center gap-2 text-[#A78BFA] hover:text-white font-semibold text-sm transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded"
            >
              Still have questions? Book a call
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right accordion */}
          <div
            className="reveal flex flex-col"
            style={{ borderTop: "1px solid rgba(124,58,237,0.12)" }}
          >
            {siteConfig.faqs.map((faq, i) => (
              <div
                key={i}
                className="py-5"
                style={{ borderBottom: "1px solid rgba(124,58,237,0.1)" }}
              >
                <button
                  className="w-full flex items-start justify-between gap-4 text-left group focus-visible:outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span
                    className={`font-display text-sm font-semibold leading-snug transition-colors duration-200 ${
                      openIndex === i ? "text-[#A78BFA]" : "text-white/70 group-hover:text-[#A78BFA]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
                      openIndex === i
                        ? "bg-[#7C3AED] text-white rotate-45"
                        : "text-white/30"
                    }`}
                    style={
                      openIndex === i
                        ? {}
                        : { background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }
                    }
                    aria-hidden="true"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/45 text-sm leading-[1.75] pr-10">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
