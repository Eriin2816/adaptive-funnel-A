"use client";

interface BookCallButtonProps {
  label?: string;
  variant?: "violet" | "cyan" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BookCallButton({
  label = "Book a Free Discovery Call",
  variant = "violet",
  size = "md",
  className = "",
}: BookCallButtonProps) {
  const openCalendar = () => {
    window.dispatchEvent(new CustomEvent("openCalendarModal"));
  };

  const sizeClasses = {
    sm:  "text-sm px-5 py-2.5 rounded-xl gap-2",
    md:  "text-sm px-6 py-3.5 rounded-xl gap-2.5",
    lg:  "text-base px-8 py-4 rounded-xl gap-3",
  };

  const variantClasses = {
    violet:  "btn-violet text-white font-semibold",
    cyan:    "btn-cyan text-white font-semibold",
    outline: "border border-[rgba(139,92,246,0.35)] text-[#A78BFA] hover:border-[rgba(167,139,250,0.6)] hover:text-white hover:bg-[rgba(124,58,237,0.1)] transition-colors duration-200 font-semibold",
  };

  return (
    <button
      onClick={openCalendar}
      className={`inline-flex items-center justify-center font-display ${sizeClasses[size]} ${variantClasses[variant]} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#04000E] ${className}`}
    >
      {label}
      <svg
        className="w-4 h-4 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  );
}
