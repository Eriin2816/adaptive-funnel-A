"use client";

import { siteConfig } from "@/lib/config";

const VERTICAL_ICONS: React.ReactNode[] = [
  <svg key="home" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
  </svg>,
  <svg key="ev" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  <svg key="restore" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>,
  <svg key="realestate" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,
  <svg key="property" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>,
  <svg key="services" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  </svg>,
];

const CARD_COLORS = ["#7C3AED", "#06B6D4", "#8B5CF6", "#A78BFA", "#7C3AED", "#06B6D4"];
const VERTICAL_IMAGES = [
  "/smart-home.jpeg",
  "/ev-charger.jpeg",
  "/restoration.jpeg",
  "/real-estate.jpeg",
  "/property.jpeg",
  "/high-ticket.png",
];

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #04000E 0%, #060118 100%)" }}
      aria-label="Who this is for"
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 10%, rgba(6,182,212,0.08) 0%, transparent 60%)",
          filter: "blur(30px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14 reveal">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 badge-violet text-xs font-semibold uppercase tracking-widest font-display"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
            Built For
          </div>
          <h2
            className="font-display font-extrabold text-white leading-tight tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Designed for businesses where every lead counts
          </h2>
          <p className="text-white/50 text-base leading-[1.75]">
            Our systems are built specifically for high-ticket local service businesses where qualified leads, fast follow-up, and trusted reputation directly drive revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.verticals.map((v, i) => (
            <article
              key={i}
              className="reveal group relative rounded-2xl cursor-default overflow-hidden flex flex-col"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${CARD_COLORS[i]}18`,
                transitionDelay: `${(i % 3) * 0.08}s`,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `${CARD_COLORS[i]}07` }}
              />

              {/* 4:3 image placeholder */}
              <div className="relative w-full overflow-hidden" style={{ paddingTop: "75%" }}>
                <img
                  src={VERTICAL_IMAGES[i]}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: "brightness(0.65)" }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, rgba(4,0,14,0.5) 0%, rgba(4,0,14,0.3) 100%)` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${CARD_COLORS[i]}18`,
                      border: `1px solid ${CARD_COLORS[i]}30`,
                      color: CARD_COLORS[i],
                    }}
                  >
                    {VERTICAL_ICONS[i]}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                <h3 className="font-display font-bold text-white text-sm mb-2">{v.title}</h3>
                <p className="text-white/40 text-sm leading-[1.7]">{v.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-12 flex items-start gap-4 p-5 rounded-2xl max-w-2xl reveal"
          style={{
            background: "rgba(124,58,237,0.06)",
            border: "1px solid rgba(124,58,237,0.18)",
          }}
        >
          <svg className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-white/55 text-sm leading-[1.75]">
            If your business runs on appointments, operates locally, and sells a high-value service — you&rsquo;re in the right place.{" "}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openCalendarModal"))}
              className="text-[#A78BFA] hover:text-white font-semibold underline underline-offset-2 transition-colors duration-200"
            >
              Book a call to confirm fit.
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
