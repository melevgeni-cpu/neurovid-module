import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-card': 'var(--bg-card)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'border-light': 'var(--border-light)',
        'accent-warm': '#D4A373',
        'accent-business': '#457B9D',
        'accent-creator': '#E63946',
        'modal-bg': 'var(--modal-bg)',
        'input-bg': 'var(--input-bg)',
        'input-text': 'var(--input-text)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': 'var(--shadow)',
      },
    },
  },
  plugins: [],
}
export default config