import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts,jsx,tsx,mdx,md}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        background: '#050608',
        surface: '#0B0D11',
        muted: '#101319',
        accent: '#3B82F6',
        accentSoft: '#1D4ED8',
        borderSubtle: '#1F2933',
        textPrimary: '#F9FAFB',
        textSecondary: '#9CA3AF',
      },
    },
  },
  plugins: [],
};

export default config;

