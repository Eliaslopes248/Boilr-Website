import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00D1FF',
        'background-light': '#F8FAFC',
        'background-dark': '#0A0F14',
        'card-dark': '#111820',
        'border-dark': '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
  },
}

export default config
