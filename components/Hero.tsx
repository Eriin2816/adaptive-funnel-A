"use client";

import { useEffect, useRef, useState } from "react";

const SERVICE_CHIPS = ["Voice AI", "Review Management", "SEO & AEO", "Workflows"];

type Particle = { id: number; top: string; left: string; size: number; delay: number; dur: number; opacity: number };

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 28 }, (_, i) => ({
      id: i,
      top:   `${Math.random() * 90}%`,
      left:  `${Math.random() * 90}%`,
      size:  Math.random() * 2.5 + 1,
      delay: Math.random() * 8,
      dur:   6 + Math.random() * 8,
      opacity: 0.15 + Math.random() * 0.4,
    })));
  }, []);

  useEffect(() => {
    // Stagger in hero elements
    const elements = heroRef.current?.querySelectorAll("[data-hero-anim]");
    elements?.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.12}s`;
      requestAnimationFrame(() => {
        (el as HTMLElement).classList.add("visible");
      });
    });
  }, []);

  const openCalendar = () => {
    window.dispatchEvent(new CustomEvent("openCalendarModal"));
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg"
      aria-label="Hero"
    >

      {/* Violet glow blobs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0 ? "#06B6D4" : "#8B5CF6",
            opacity: p.opacity,
            animation: `particleDrift ${p.dur}s ${p.delay}s ease-in-out infinite`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Circuit line decorations */}
      <svg
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-[0.07]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M400 0 L400 120 L300 120 L300 200 L200 200 L200 320 L100 320 L100 500" stroke="#8B5CF6" strokeWidth="1" />
        <path d="M500 100 L380 100 L380 250 L260 250 L260 400 L140 400" stroke="#06B6D4" strokeWidth="1" />
        <circle cx="400" cy="120" r="4" fill="#8B5CF6" />
        <circle cx="300" cy="200" r="4" fill="#8B5CF6" />
        <circle cx="200" cy="320" r="4" fill="#8B5CF6" />
        <circle cx="380" cy="250" r="4" fill="#06B6D4" />
        <circle cx="260" cy="400" r="4" fill="#06B6D4" />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none opacity-[0.06]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 300 L120 300 L120 200 L240 200 L240 100 L400 100" stroke="#8B5CF6" strokeWidth="1" />
        <circle cx="120" cy="300" r="4" fill="#8B5CF6" />
        <circle cx="240" cy="200" r="4" fill="#8B5CF6" />
        <circle cx="240" cy="100" r="4" fill="#8B5CF6" />
      </svg>

      {/* Desktop hero visual — right side */}
      <div className="absolute right-0 top-0 bottom-0 hidden xl:flex items-center justify-end pr-12 pointer-events-none" aria-hidden="true">
        <div
          className="relative w-[440px] h-[530px] rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(139,92,246,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Glow behind */}
          <div
            className="absolute -inset-px rounded-2xl"
            style={{ boxShadow: "0 0 80px rgba(124,58,237,0.15), 0 0 40px rgba(6,182,212,0.08)" }}
          />

          {/* Dashboard header */}
          <div
            className="flex items-center justify-between px-5 py-4 border-b"
            style={{ borderColor: "rgba(139,92,246,0.12)" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(124,58,237,0.4)" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(139,92,246,0.3)" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(167,139,250,0.25)" }} />
              </div>
              <span className="text-white/35 text-xs font-medium">GrowthEngine Dashboard</span>
            </div>
            <div
              className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400 px-2.5 py-1 rounded-full"
              style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </div>
          </div>

          <div className="p-5 flex flex-col gap-4">
            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Leads/mo", value: "47", trend: "+38%" },
                { label: "Conversion", value: "68%", trend: "+12%" },
                { label: "Response", value: "2min", trend: "-94%" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl p-3 text-center"
                  style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(139,92,246,0.12)" }}
                >
                  <div className="text-white font-bold text-lg font-display leading-none">{m.value}</div>
                  <div className="text-white/35 text-[10px] mt-1">{m.label}</div>
                  <div className="text-emerald-400 text-[9px] mt-0.5 font-semibold">{m.trend}</div>
                </div>
              ))}
            </div>

            {/* Pipeline bars */}
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(139,92,246,0.1)" }}
            >
              <div className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-3">AI Lead Pipeline</div>
              {[
                { label: "Leads Captured", pct: 100, color: "#7C3AED" },
                { label: "AI Engaged",     pct: 82,  color: "#8B5CF6" },
                { label: "Qualified",      pct: 61,  color: "#A78BFA" },
                { label: "Booked",         pct: 38,  color: "#06B6D4" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 mb-2 last:mb-0">
                  <span className="text-white/35 text-[10px] w-24 shrink-0">{s.label}</span>
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${s.pct}%`, background: s.color }}
                    />
                  </div>
                  <span className="text-white/30 text-[10px] w-7 text-right">{s.pct}%</span>
                </div>
              ))}
            </div>

            {/* Activity feed */}
            <div className="flex flex-col gap-2">
              {[
                { icon: "🤖", text: "Voice AI called new lead", time: "12s ago" },
                { icon: "⭐", text: "5-star review received", time: "3m ago" },
                { icon: "📅", text: "Discovery call booked", time: "8m ago" },
                { icon: "🎯", text: "High-intent ad converted", time: "14m ago" },
              ].map((a) => (
                <div
                  key={a.text}
                  className="flex items-center gap-3 rounded-lg px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="text-sm">{a.icon}</span>
                  <span className="text-white/35 text-[10px] flex-1">{a.text}</span>
                  <span className="text-white/20 text-[9px]">{a.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Corner glow */}
          <div
            className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)",
              filter: "blur(16px)",
            }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-[640px] xl:max-w-[700px]">

          {/* Badge */}
          <div
            className="reveal inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8 badge-violet"
            data-hero-anim
            style={{ animationDelay: "0s" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#7C3AED", animation: "pulse 2s ease-in-out infinite" }}
            />
            <span className="text-xs font-semibold uppercase tracking-widest font-display">AI-Powered Growth Platform</span>
          </div>

          {/* Headline */}
          <h1
            className="reveal font-display font-extrabold text-white leading-[1.04] tracking-[-0.035em] mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            data-hero-anim
          >
            We Help Businesses Get{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 40%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Qualified Leads
            </span>{" "}
            Every Month Using AI Automation
          </h1>

          {/* Body */}
          <p
            className="reveal text-white/60 leading-[1.75] max-w-lg mb-10"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.125rem)" }}
            data-hero-anim
          >
            Unify Voice AI, reputation, SEO, and automation to scale your business with GrowthEngine.
          </p>

          {/* CTAs */}
          <div className="reveal flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10" data-hero-anim>
            <button
              onClick={openCalendar}
              className="group inline-flex items-center gap-3 text-white font-bold font-display px-7 py-4 rounded-xl btn-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#04000E]"
              style={{ fontSize: "0.95rem" }}
            >
              Claim Your Free Automation Demo
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <a
              href="#pillars"
              className="group inline-flex items-center gap-2 text-white/50 hover:text-[#A78BFA] text-sm font-medium transition-colors duration-200 px-2 py-1"
            >
              See Features
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Service chips */}
          <div className="reveal flex flex-wrap items-center gap-3" data-hero-anim>
            {SERVICE_CHIPS.map((chip, i) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full"
                style={{
                  background: "rgba(139,92,246,0.08)",
                  border: "1px solid rgba(139,92,246,0.18)",
                  color: "rgba(255,255,255,0.7)",
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: i % 2 === 0 ? "#8B5CF6" : "#06B6D4" }}
                />
                {chip}
              </span>
            ))}
          </div>

          {/* Trust row */}
          <div
            className="reveal flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(139,92,246,0.12)" }}
            data-hero-anim
          >
            {["No Long-Term Lock-In", "Fast Setup", "LA-Focused"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-white/35">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, #04000E, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
