import { siteConfig } from "@/lib/config";

export default function Trust() {
  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #04000E 0%, #080120 50%, #04000E 100%)" }}
      aria-label="Testimonials"
    >
      {/* Accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 65%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-14 reveal">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 badge-violet text-xs font-semibold uppercase tracking-widest font-display"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
            What Clients Say
          </div>
          <h2
            className="font-display font-extrabold text-white leading-tight tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Results that speak for themselves
          </h2>
          <p className="text-white/50 text-base leading-[1.75]">
            Local service businesses that replaced guesswork with connected systems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t, i) => (
            <article
              key={i}
              className="reveal group relative rounded-2xl p-7 cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(139,92,246,0.12)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "rgba(124,58,237,0.05)", boxShadow: "0 0 40px rgba(124,58,237,0.1) inset" }}
              />

              {/* Top glow bar on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)" }}
              />

              {/* Quote mark */}
              <div
                className="text-5xl leading-none font-serif mb-4 select-none"
                style={{ color: "rgba(124,58,237,0.3)" }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4" aria-label="5 stars">
                {Array(5).fill(0).map((_, j) => (
                  <svg key={j} className="w-4 h-4" viewBox="0 0 20 20" fill="#7C3AED" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/65 text-sm leading-[1.75] mb-7">
                {t.quote}
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold font-display text-white"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)",
                    boxShadow: "0 0 16px rgba(124,58,237,0.35)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold font-display">{t.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.title}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-white/25 text-xs">
          Testimonials are representative of typical client feedback and will be replaced with verified reviews.
        </p>
      </div>
    </section>
  );
}
