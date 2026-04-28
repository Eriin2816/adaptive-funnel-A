"use client";

const FEATURE_CARDS = [
  {
    title: "Natural Voice Conversations",
    body: "Engage customers with AI that understands context, tone, and intent—delivering human-like conversations at scale.",
    visual: {
      label: "Voice Interface",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      ),
      bars: [0.4, 0.7, 0.9, 0.6, 1.0, 0.8, 0.5, 0.9, 0.7, 0.4, 0.8, 0.6],
      accent: "#7C3AED",
      accent2: "#A78BFA",
      bg: "linear-gradient(135deg, #0D0428 0%, #150840 100%)",
    },
  },
  {
    title: "24/7 Intelligent Response",
    body: "Never miss a lead. Our Voice AI handles inquiries around the clock with accurate, brand-consistent answers.",
    visual: {
      label: "Always On",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bars: [0.3, 0.5, 0.8, 1.0, 0.9, 0.7, 0.8, 1.0, 0.9, 0.6, 0.8, 0.5],
      accent: "#06B6D4",
      accent2: "#22D3EE",
      bg: "linear-gradient(135deg, #020F1A 0%, #061828 100%)",
    },
  },
  {
    title: "Contextual Understanding",
    body: "AI remembers previous interactions, preferences, and history to provide personalized, relevant responses every time.",
    visual: {
      label: "AI Memory",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
      bars: [0.6, 0.8, 0.7, 0.9, 0.8, 1.0, 0.9, 0.7, 0.8, 0.9, 0.7, 0.8],
      accent: "#8B5CF6",
      accent2: "#C4B5FD",
      bg: "linear-gradient(135deg, #0A0220 0%, #120535 100%)",
    },
  },
];

export default function VoiceAI() {
  const openCalendar = () => {
    window.dispatchEvent(new CustomEvent("openCalendarModal"));
  };

  return (
    <section
      id="voice-ai"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #07001C 0%, #04000E 100%)" }}
      aria-label="Voice AI"
    >
      {/* Background */}
      <div
        className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 0%, rgba(6,182,212,0.1) 0%, transparent 60%)",
          filter: "blur(30px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-xs font-semibold uppercase tracking-widest font-display"
            style={{
              background: "rgba(6,182,212,0.08)",
              border: "1px solid rgba(6,182,212,0.2)",
              color: "#22D3EE",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
            Voice AI
          </div>
          <h2
            className="font-display font-extrabold text-white leading-tight tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Voice AI for Unparalleled{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22D3EE 0%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Customer Engagement
            </span>
          </h2>
          <p className="text-white/55 text-base leading-[1.75] max-w-xl mb-8">
            Transform how you connect with customers through intelligent, automated voice interactions that feel natural and drive real business results.
          </p>
          <button
            onClick={openCalendar}
            className="inline-flex items-center gap-2.5 text-white font-semibold font-display px-6 py-3.5 rounded-xl text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] btn-cyan"
          >
            Get Started with Voice AI
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURE_CARDS.map((card, i) => (
            <article
              key={card.title}
              className="reveal group relative rounded-2xl overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${card.visual.accent}22`,
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Image placeholder — premium AI visual */}
              <div
                className="relative h-48 overflow-hidden"
                style={{ background: card.visual.bg }}
              >
                {/* Grid pattern inside */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(${card.visual.accent}18 1px, transparent 1px), linear-gradient(90deg, ${card.visual.accent}18 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Glow orb */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 40%, ${card.visual.accent}25 0%, transparent 65%)`,
                  }}
                />

                {/* Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${card.visual.accent}18`,
                      border: `1px solid ${card.visual.accent}35`,
                      color: card.visual.accent2,
                      boxShadow: `0 0 30px ${card.visual.accent}25`,
                    }}
                  >
                    {card.visual.icon}
                  </div>

                  {/* Audio waveform viz */}
                  <div className="flex items-center gap-1">
                    {card.visual.bars.map((h, j) => (
                      <div
                        key={j}
                        className="rounded-full"
                        style={{
                          width: "3px",
                          height: `${h * 32}px`,
                          background: `linear-gradient(180deg, ${card.visual.accent2} 0%, ${card.visual.accent} 100%)`,
                          opacity: 0.6 + h * 0.4,
                          animation: `glowPulse ${1.2 + j * 0.15}s ease-in-out infinite`,
                          animationDelay: `${j * 0.07}s`,
                        }}
                      />
                    ))}
                  </div>

                  <span
                    className="text-[10px] font-semibold uppercase tracking-widest font-display"
                    style={{ color: `${card.visual.accent}80` }}
                  >
                    {card.visual.label}
                  </span>
                </div>

                {/* Gradient overlay bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{ background: `linear-gradient(to top, rgba(255,255,255,0.04), transparent)` }}
                />

                {/* Hover color treatment */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                  style={{ background: `linear-gradient(135deg, ${card.visual.accent}15 0%, transparent 100%)` }}
                />
              </div>

              {/* Card content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: card.visual.accent }}
                  />
                  <h3 className="font-display font-bold text-white text-sm leading-snug">{card.title}</h3>
                </div>
                <p className="text-white/45 text-sm leading-[1.7]">{card.body}</p>
              </div>

              {/* Bottom edge glow on hover */}
              <div
                className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(90deg, transparent, ${card.visual.accent}, transparent)` }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
