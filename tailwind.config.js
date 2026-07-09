/** @type {import('tailwindcss').Config} */

const withOpacity = (rgbVar) => ({ opacityValue }) =>
  opacityValue !== undefined
    ? `rgb(var(${rgbVar}) / ${opacityValue})`
    : `rgb(var(${rgbVar}))`;

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,jsx}",

  ],

  theme: {

    extend: {
      colors: {
        background: withOpacity('--bg-rgb'),
        surface: withOpacity('--bg-secondary-rgb'),
        card: withOpacity('--bg-card-rgb'),

        primary: withOpacity('--primary-rgb'),
        'primary-light': withOpacity('--primary-light-rgb'),

        secondary: withOpacity('--secondary-rgb'),
        'secondary-light': withOpacity('--secondary-light-rgb'),

        accent: withOpacity('--accent-rgb'),
        highlight: withOpacity('--highlight-rgb'),

        text: withOpacity('--text-rgb'),
        'text-light': withOpacity('--text-light-rgb'),
        muted: withOpacity('--text-muted-rgb'),
      },
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 25px 80px rgba(217,70,239,.25)',
        'glow-secondary': '0 25px 70px rgba(168,85,247,.2)',
        'glow-accent': '0 25px 70px rgba(96,165,250,.2)',
      },
    },

  },

  plugins: [],

}
