import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        // Warm earth tones
        wood: {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e8ddd0',
          300: '#d9c5a8',
          400: '#c7a67e',
          500: '#b8905f',
          600: '#a67c4d',
          700: '#8a6340',
          800: '#715238',
          900: '#5c4330',
        },
        // Natural cream/beige
        cream: {
          50: '#fefcf9',
          100: '#fdf8f1',
          200: '#faf0e0',
          300: '#f5e4c8',
          400: '#eed5a7',
          500: '#e4c284',
          600: '#d4a960',
          700: '#c19344',
          800: '#9c7637',
          900: '#7d602f',
        },
        // Deep greens for sustainability
        forest: {
          50: '#f0f9f3',
          100: '#dcf2e1',
          200: '#bce4c8',
          300: '#8dd0a5',
          400: '#57b47c',
          500: '#339960',
          600: '#25794b',
          700: '#1f613d',
          800: '#1c4e32',
          900: '#19402a',
        },
        // Gold/copper accents
        gold: {
          50: '#fefcf0',
          100: '#fef7d7',
          200: '#fdeaa5',
          300: '#fbd872',
          400: '#f8c947',
          500: '#f2b125',
          600: '#d6901a',
          700: '#b36d18',
          800: '#91551a',
          900: '#76461a',
        },
        copper: {
          50: '#fef7f0',
          100: '#feede0',
          200: '#fdd7c0',
          300: '#fbb895',
          400: '#f79069',
          500: '#f26d44',
          600: '#e35429',
          700: '#bd3f1f',
          800: '#97351f',
          900: '#7a2f1e',
        },
        // Overrides for existing colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'wood-grain': 'linear-gradient(45deg, #8a6340 0%, #b8905f 50%, #8a6340 100%)',
        'forest-gradient': 'linear-gradient(135deg, #339960 0%, #25794b 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f2b125 0%, #d6901a 100%)',
        'hero-gradient': 'linear-gradient(135deg, #8a6340 0%, #b8905f 50%, #f2b125 100%)',
        'wood-gradient': 'linear-gradient(135deg, #8a6340 0%, #b8905f 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'warm': '0 4px 20px -2px rgba(138, 99, 64, 0.15)',
        'gold': '0 4px 20px -2px rgba(242, 177, 37, 0.25)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config