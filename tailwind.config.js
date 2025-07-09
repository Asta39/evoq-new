/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#2D2D2D', // sophisticated charcoal
        'primary-foreground': '#FFFFFF', // white
        
        // Secondary Colors
        'secondary': '#F8F9FA', // warm white
        'secondary-foreground': '#1A1A1A', // near-black
        
        // Accent Colors
        'accent': '#4A90E2', // professional blue
        'accent-foreground': '#FFFFFF', // white
        
        // Background Colors
        'background': '#FFFFFF', // pure white
        'surface': '#F5F5F5', // subtle gray
        
        // Text Colors
        'text-primary': '#1A1A1A', // near-black
        'text-secondary': '#6B7280', // medium gray
        
        // Status Colors
        'success': '#10B981', // vibrant green
        'success-foreground': '#FFFFFF', // white
        
        'warning': '#F59E0B', // warm amber
        'warning-foreground': '#1A1A1A', // near-black
        
        'error': '#EF4444', // clear red
        'error-foreground': '#FFFFFF', // white
        
        // Border Colors
        'border': '#E5E7EB', // light gray
        'border-muted': '#F3F4F6', // very light gray
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'caption': ['Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      borderRadius: {
        'DEFAULT': '8px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'elevation': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      zIndex: {
        '900': '900',
        '1000': '1000',
        '1050': '1050',
        '1100': '1100',
      },
      animation: {
        'pulse': 'pulse 2s infinite',
        'fade-up': 'fadeUp 0.8s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}