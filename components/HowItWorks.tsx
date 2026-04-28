import { siteConfig } from "@/lib/config";
import BookCallButton from "./BookCallButton";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060118 0%, #04000E 100%)" }}
      aria-label="How it works"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.09) 0%, transparent 60%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-xl mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 badge-violet text-xs font-semibold uppercase tracking-widest font-display"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
            The Process
          </div>
          <h2
            className="font-display font-extrabold text-white leading-tight tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            How we build your lead engine
          </h2>
          <p className="text-white/50 text-base leading-[1.75]">
            A clear, systematic approach to getting your lead infrastructure built, live, and continuously improving.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connector */}
          <div
            className="hidden lg:block absolute top-[3.5rem] left-[calc(16.666%+4rem)] right-[calc(16.666%+4rem)] h-px pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.4) 30%, rgba(139,92,246,0.4) 70%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {siteConfig.howItWorks.map((step, i) => (
              <article key={i} className={`reveal relative flex flex-col reveal-delay-${i + 1}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(139,92,246,0.08) 100%)",
                      border: "1px solid rgba(124,58,237,0.25)",
                      boxShadow: "0 0 20px rgba(124,58,237,0.15)",
                    }}
                  >
                    <span
                      className="text-lg font-extrabold font-display tracking-[-0.04em]"
                      style={{
                        background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3 tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-white/45 text-base leading-[1.75]">{step.description}</p>

                {/* Mobile connector */}
                {i < siteConfig.howItWorks.length - 1 && (
                  <div
                    className="lg:hidden absolute -bottom-5 left-7 w-px h-10 pointer-events-none"
                    style={{ background: "linear-gradient(180deg, rgba(124,58,237,0.4) 0%, transparent 100%)" }}
                    aria-hidden="true"
                  />
                )}
              </article>
            ))}
          </div>
        </div>

        {/* CTA nudge */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl reveal"
          style={{
            background: "rgba(124,58,237,0.06)",
            border: "1px solid rgba(124,58,237,0.15)",
            boxShadow: "0 0 40px rgba(124,58,237,0.06) inset",
          }}
        >
          <div className="flex-1">
            <h3 className="font-display text-white font-bold text-lg mb-1">
              Ready to see what this looks like for your business?
            </h3>
            <p className="text-white/45 text-sm leading-relaxed">
              A strategy call is the first step. We&rsquo;ll map out your current lead flow and show you exactly where the gaps are.
            </p>
          </div>
          <BookCallButton label={siteConfig.cta.label} size="md" className="flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
