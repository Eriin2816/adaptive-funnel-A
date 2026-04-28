import { siteConfig } from "@/lib/config";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "lead-generation": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
    </svg>
  ),
  "crm-pipeline": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
    </svg>
  ),
  "automated-followups": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  "appointment-booking": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  "reputation-management": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  "websites-landing-pages": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
    </svg>
  ),
  "reporting-optimization": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  "invoice-automations": (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
};

const CARD_ACCENTS = [
  "#7C3AED", "#06B6D4", "#8B5CF6", "#A78BFA",
  "#7C3AED", "#06B6D4", "#8B5CF6", "#A78BFA",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #04000E 0%, #060118 50%, #04000E 100%)" }}
      aria-label="Services"
    >
      {/* Background */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 100%, rgba(124,58,237,0.08) 0%, transparent 60%)",
          filter: "blur(30px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-14 reveal">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 badge-violet text-xs font-semibold uppercase tracking-widest font-display"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
            Full-System Approach
          </div>
          <h2
            className="font-display font-extrabold text-white leading-tight tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Not one tactic. The whole system.
          </h2>
          <p className="text-white/50 text-base leading-[1.75]">
            Most agencies hand you a campaign and move on. We build the connected infrastructure that makes every touchpoint work together — from first click to booked appointment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.services.map((service, i) => (
            <article
              key={service.id}
              className="reveal group relative rounded-2xl p-6 cursor-default overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(139,92,246,0.1)",
                transitionDelay: `${(i % 4) * 0.07}s`,
              }}
            >
              {/* Top bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `linear-gradient(90deg, transparent, ${CARD_ACCENTS[i]}, transparent)` }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `${CARD_ACCENTS[i]}08` }}
              />

              {/* Card number */}
              <span
                className="absolute top-4 right-4 text-xs font-bold font-display tracking-widest"
                style={{ color: `${CARD_ACCENTS[i]}25` }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${CARD_ACCENTS[i]}12`,
                  border: `1px solid ${CARD_ACCENTS[i]}22`,
                  color: CARD_ACCENTS[i],
                }}
              >
                {SERVICE_ICONS[service.id]}
              </div>

              <h3 className="font-display font-bold text-white text-sm mb-2 leading-snug pr-6">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-[1.7]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
