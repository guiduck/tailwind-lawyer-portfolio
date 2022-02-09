module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#01DCBA',
        secondary: '#7F30CB',
        terciary: '#3791C1',
        background: '#01060A',
        text: '#4B76C4',
        mask: 'rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
