/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-white': '#f2f2f2',
        'lightest-white-bg': '#efefef',
        'light-gray': '#a8a8a8',
        'lighter-gray': '#bfbfbf',
        'lightest-gray': '#7B7A7A',
        'bg-gray1': '#E8E9EA',
        'bg-gray2': '#D5D7D8',
        'lightest-black': 'rgba(217, 217, 217, 0.15)',
        'carbon-black': '#181818',
        'light-black': '#1a1a1a',
        'lighter-black': '#404040',
        'lighter-black2': '#202020',
        'lightest-black': '#545454',
        'light-green': '#01c887',
        'light-pink' : '#ff1471',
        'bg-green1': '#A6E1CB',
        'bg-green2': '#7BD9B6',
        'bg-green3': '#00C887',
        'dark-green': '#588970',
      }
    }
  },
  plugins: [],
}
