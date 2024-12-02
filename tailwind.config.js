/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#b70e1b',    // Rouge
        'secondary': '#242858',   // Bleu foncé
        'accent': '#b70d1d',     // Rouge foncé
        'icon': 'rgb(39, 40, 91)',
      }
    }
  },
  plugins: [],
};
