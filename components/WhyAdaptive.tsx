import { siteConfig } from "@/lib/config";
import BookCallButton from "./BookCallButton";

const WHY_ICONS: React.ReactNode[] = [
  <svg key="systems" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
  </svg>,
  <svg key="speed" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  <svg key="service" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>,
  <svg key="visibility" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="connected" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>,
  <svg key="local" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>,
];

const CARD_COLORS = ["#7C3AED", "#06B6D4", "#8B5CF6", "#A78BFA", "#7C3AED", "#06B6D4"];

export default function WhyAdaptive() {
  return (
    <section
      id="why-adaptive"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #04000E 0%, #080120 50%, #04000E 100%)" }}
      aria-label="Why Adaptive Automations"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 60%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14 reveal">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 badge-violet text-xs font-semibold uppercase tracking-widest font-display"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
            Why Adaptive
          </div>
          <h2
            className="font-display font-extrabold text-white leading-tight tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            A growth partner, not a marketing agency.
          </h2>
          <p className="text-white/50 text-base leading-[1.75]">
            Most agencies run campaigns. We build the connected infrastructure behind consistent lead conversion — and stay to make sure it works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.whyAdaptive.map((item, i) => (
            <article
              key={i}
              className="reveal group relative rounded-2xl p-6 cursor-default overflow-hidden"
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
              <div
                className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(90deg, transparent, ${CARD_COLORS[i]}, transparent)` }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${CARD_COLORS[i]}12`,
                  border: `1px solid ${CARD_COLORS[i]}22`,
                  color: CARD_COLORS[i],
                }}
              >
                {WHY_ICONS[i]}
              </div>
              <h3 className="font-display font-bold text-white text-sm mb-2">{item.title}</h3>
              <p className="text-white/40 text-sm leading-[1.7]">{item.description}</p>
            </article>
          ))}
        </div>

        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 reveal"
          style={{ borderTop: "1px solid rgba(124,58,237,0.12)" }}
        >
          <div>
            <p className="font-display text-white font-bold text-lg mb-1">
              Stop losing leads to slow follow-up.
            </p>
            <p className="text-white/40 text-sm">
              Book a strategy call and we&rsquo;ll show you exactly where leads are being lost.
            </p>
          </div>
          <BookCallButton label={siteConfig.cta.label} size="md" className="flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
