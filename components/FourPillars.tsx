const PILLARS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12z" />
      </svg>
    ),
    image: "/voice-ai.jpeg",
    title: "Voice AI",
    body: "Intelligent voice automation that engages customers 24/7, handles inquiries, and drives conversions with human-like interactions.",
    accent: "#7C3AED",
    glow: "rgba(124,58,237,0.15)",
    border: "rgba(124,58,237,0.2)",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    image: "/review.jpeg",
    title: "Review and Referral Marketing Management",
    body: "Amplify your reputation with automated review requests, showcase social proof, and turn happy customers into referral advocates.",
    accent: "#06B6D4",
    glow: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    image: "/seo.png",
    title: "SEO / AEO / High Intent Ads",
    body: "Dominate search results with AI-powered SEO, Answer Engine Optimization, and targeted high-intent advertising that captures ready-to-buy leads.",
    accent: "#8B5CF6",
    glow: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    image: "/workflows.jpeg",
    title: "Workflows and Automations",
    body: "Streamline operations with intelligent, no-code workflows that eliminate manual tasks and scale your business processes effortlessly.",
    accent: "#A78BFA",
    glow: "rgba(167,139,250,0.1)",
    border: "rgba(167,139,250,0.2)",
  },
];

export default function FourPillars() {
  return (
    <section
      id="pillars"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #04000E 0%, #080118 50%, #04000E 100%)" }}
      aria-label="Four Pillars of AI-Powered Growth"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 65%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 badge-violet text-xs font-semibold uppercase tracking-widest font-display"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
            The Platform
          </div>
          <h2
            className="font-display font-extrabold text-white leading-tight tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Four Pillars of AI-Powered Growth
          </h2>
          <p className="text-white/55 text-base leading-[1.75] max-w-xl mx-auto">
            A unified platform that transforms how you attract, engage, and convert customers through intelligent automation.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pillar, i) => (
            <article
              key={pillar.title}
              className="reveal group relative rounded-2xl cursor-default overflow-hidden flex flex-col"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${pillar.border}`,
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: pillar.glow }}
              />

              {/* Top edge glow */}
              <div
                className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(90deg, transparent, ${pillar.accent}, transparent)` }}
              />

              {/* 4:3 image placeholder */}
              <div
                className="relative w-full overflow-hidden"
                style={{ paddingTop: "75%" }}
              >
                <img
                  src={pillar.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: "brightness(0.65)" }}
                />
                {/* Overlay with icon centered */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${pillar.glow} 0%, rgba(4,0,14,0.6) 100%)` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${pillar.glow}`,
                      border: `1px solid ${pillar.border}`,
                      color: pillar.accent,
                      boxShadow: `0 0 30px ${pillar.glow}`,
                    }}
                  >
                    {pillar.icon}
                  </div>
                </div>
                {/* Pillar number */}
                <div
                  className="absolute top-3 right-3 text-xs font-bold font-display tracking-widest"
                  style={{ color: `${pillar.accent}90` }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                <h3 className="font-display font-bold text-white text-sm leading-snug mb-3">
                  {pillar.title}
                </h3>
                <p className="text-white/45 text-sm leading-[1.7]">{pillar.body}</p>
              </div>

              {/* Bottom accent dot */}
              <div
                className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: pillar.accent }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
