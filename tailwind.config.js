/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Violet dark palette
          base:     '#04000E',
          surface:  '#08011C',
          elevated: '#0D0428',
          card:     '#110535',
          // Primary violet
          violet:   '#7C3AED',
          bright:   '#8B5CF6',
          neon:     '#A78BFA',
          // Cyan accent
          cyan:     '#06B6D4',
          glow:     '#22D3EE',
          // Legacy (kept for compat)
          dark:     '#04000E',
          electric: '#7C3AED',
          // Neutral
          offwhite: '#F5F3EC',
          warmgray: '#E4E1D5',
          graphite: '#696D78',
          slate:    '#1F2837',
          navy:     '#1A2C52',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'Syne', 'sans-serif'],
        sans:    ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        tight:   '-0.03em',
        display: '-0.04em',
        wide:    '0.08em',
        widest:  '0.15em',
      },
      lineHeight: {
        body:    '1.75',
        relaxed: '1.7',
      },
      boxShadow: {
        'violet':    '0 4px 24px rgba(124,58,237,0.35)',
        'violet-lg': '0 8px 48px rgba(124,58,237,0.45)',
        'cyan':      '0 4px 24px rgba(6,182,212,0.3)',
        'cyan-lg':   '0 8px 40px rgba(6,182,212,0.4)',
        'card':      '0 1px 3px rgba(0,0,0,0.4), 0 4px 20px rgba(0,0,0,0.3)',
        'glow':      '0 0 60px rgba(124,58,237,0.2)',
        // Legacy
        'electric':  '0 4px 24px rgba(124,58,237,0.35)',
        'electric-lg':'0 8px 40px rgba(124,58,237,0.4)',
      },
      animation: {
        'fade-up':       'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':       'fadeIn 0.6s ease forwards',
        'glow-pulse':    'glowPulse 3s ease-in-out infinite',
        'float':         'float 6s ease-in-out infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
        'scan':          'scan 4s linear infinite',
        'particle':      'particleDrift 8s ease-in-out infinite',
        'pulse-slow':    'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow':     'spin 12s linear infinite',
        'border-glow':   'borderGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(0px)' },
          '50%':      { opacity: '1',   filter: 'blur(2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        particleDrift: {
          '0%':   { transform: 'translate(0,0) scale(1)',   opacity: '0.4' },
          '33%':  { transform: 'translate(8px,-12px) scale(1.1)', opacity: '0.7' },
          '66%':  { transform: 'translate(-6px,-8px) scale(0.9)', opacity: '0.5' },
          '100%': { transform: 'translate(0,0) scale(1)',   opacity: '0.4' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(124,58,237,0.3)' },
          '50%':      { borderColor: 'rgba(167,139,250,0.6)' },
        },
      },
    },
  },
  plugins: [],
};
