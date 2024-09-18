module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9))',
      },
    },
  },
  plugins: [],
}
