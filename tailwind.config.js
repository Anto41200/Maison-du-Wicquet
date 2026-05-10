/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // ── Palette de la Maison du Wicquet ─────────────────
      colors: {
        sinople: {
          50:  '#f0f7f0',
          100: '#d6ebd6',
          200: '#afd7af',
          300: '#7dbd7d',
          400: '#4f9f4f',
          500: '#2d7a2d',
          600: '#1a5c1a',
          700: '#1a3a1a',  // sinople principal
          800: '#142e14',
          900: '#0e200e',
          950: '#071007',
        },
        or: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f6c026',  // or principal
          500: '#d4a520',
          600: '#b8891a',
          700: '#946b12',
          800: '#78520e',
          900: '#5a3d0a',
        },
        parchemin: {
          50:  '#fdfaf5',
          100: '#f9f2e4',
          200: '#f2e5c8',
          300: '#e8d3a8',
          400: '#d4b87a',
          500: '#c09850',
          600: '#a07838',
        },
        ardoise: {
          50:  '#f8f8f8',
          100: '#e8e8e8',
          200: '#c8c8c8',
          300: '#a0a0a0',
          400: '#707070',
          500: '#484848',
          600: '#303030',
          700: '#1e1e1e',
          800: '#141414',
          900: '#0a0a0a',
        }
      },

      // ── Typographie historique ───────────────────────────
      fontFamily: {
        display:  ['Playfair Display', 'Georgia', 'serif'],
        serif:    ['EB Garamond', 'Garamond', 'Georgia', 'serif'],
        sans:     ['Cormorant Garamond', 'Georgia', 'serif'],
        mono:     ['Courier Prime', 'Courier New', 'monospace'],
        caps:     ['Cinzel', 'Times New Roman', 'serif'],
      },

      // ── Espacements ──────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
        '160': '40rem',
      },

      // ── Animations ───────────────────────────────────────
      animation: {
        'fade-in':     'fadeIn 1.2s ease-out forwards',
        'fade-up':     'fadeUp 0.8s ease-out forwards',
        'shimmer':     'shimmer 2s infinite',
        'flicker':     'flicker 3s infinite',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
        'float':       'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.7' },
          '50%':      { opacity: '1' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.85' },
          '75%':      { opacity: '0.95' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },

      // ── Ombres ───────────────────────────────────────────
      boxShadow: {
        'noble':  '0 4px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(246,192,38,0.1)',
        'or':     '0 0 30px rgba(246,192,38,0.3)',
        'inner-dark': 'inset 0 2px 20px rgba(0,0,0,0.8)',
        'parchment': '0 2px 15px rgba(212,185,120,0.2)',
      },

      // ── Backgrounds ──────────────────────────────────────
      backgroundImage: {
        'texture-paper': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },

      // ── Bordures ─────────────────────────────────────────
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
