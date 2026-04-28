import { siteConfig } from "@/lib/config";
import BookCallButton from "./BookCallButton";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060118 0%, #04000E 100%)" }}
      aria-label="Get started"
    >
      {/* Violet glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 65%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />
      {/* Cyan accent bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 100%, rgba(6,182,212,0.08) 0%, transparent 60%)",
          filter: "blur(30px)",
        }}
        aria-hidden="true"
      />

      {/* Horizontal glow line top */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(6,182,212,0.5), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className="reveal inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 badge-violet text-xs font-semibold uppercase tracking-widest font-display"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
          Ready to Start?
        </div>

        {/* Headline */}
        <h2
          className="reveal font-display font-extrabold text-white leading-[1.08] tracking-[-0.035em] mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Let&rsquo;s build the system that books{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 50%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            more appointments
          </span>
        </h2>

        {/* Body */}
        <p className="reveal text-white/50 text-lg leading-[1.75] max-w-2xl mx-auto mb-10">
          A strategy call costs nothing and takes under 30 minutes. By the end, you&rsquo;ll have a clear picture of where leads are being lost and what a connected system looks like for your business.
        </p>

        {/* CTA */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <BookCallButton label="Book a Free Discovery Call" size="lg" variant="violet" />
        </div>

        {/* Contact */}
        <div
          className="reveal flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
          style={{ borderTop: "1px solid rgba(124,58,237,0.12)" }}
        >
          <a
            href={siteConfig.business.phoneHref}
            className="flex items-center gap-2.5 text-white/40 hover:text-[#A78BFA] text-sm font-medium transition-colors duration-200 group"
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            {siteConfig.business.phone}
          </a>
          <a
            href={siteConfig.business.emailHref}
            className="flex items-center gap-2.5 text-white/40 hover:text-[#A78BFA] text-sm font-medium transition-colors duration-200 group"
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            {siteConfig.business.email}
          </a>
          <div className="flex items-center gap-2.5 text-white/30 text-sm">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            {siteConfig.business.address}
          </div>
        </div>
      </div>
    </section>
  );
}
