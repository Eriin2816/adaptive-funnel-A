"use client";

import { useEffect, useState } from "react";

const CALENDAR_URL = "https://go.adaptiveautomate.com/widget/booking/Q33XlmpJLqwQSZeLdJJb";

export default function CalendarModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openCalendarModal", handler);
    return () => window.removeEventListener("openCalendarModal", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a Free Discovery Call"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #0D0428 0%, #08011C 100%)",
          border: "1px solid rgba(139,92,246,0.25)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.7), 0 0 60px rgba(124,58,237,0.15)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: "rgba(139,92,246,0.15)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#7C3AED" }}
            />
            <span className="text-white font-semibold text-sm font-display tracking-wide">
              Book a Free Discovery Call
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            aria-label="Close booking modal"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* iFrame */}
        <div className="relative" style={{ height: "600px", maxHeight: "70vh" }}>
          <iframe
            src={CALENDAR_URL}
            title="Book a Free Discovery Call — Adaptive Automations"
            className="w-full h-full border-0"
            loading="eager"
            allow="camera; microphone; payment"
          />
        </div>
      </div>
    </div>
  );
}
