/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#4866D4',
        'under-header': '#D0D8F4',
        'text-under': '#707585',
        'border-bt': '#1C3489'
      },
      backgroundImage: {
        'gradient-20deg': 'linear-gradient(40deg, #8D98CC, #EDECFC)',
        'gradient-220deg': 'linear-gradient(220deg, #8D98CC, #EDECFC)',

      },
      fontSize: {
        '8px': '8px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
