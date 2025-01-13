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
        'border-bt': '#1C3489',
        'recomm': '#d0d8f4',
        'button': '#283e90',
        'foot-left': '#4b63b1',
        'text-footer': '#b1baef'
      },
      backgroundImage: {
        'gradient-40deg': 'linear-gradient(40deg, #8D98CC, #EDECFC)',
        'gradient-220deg': 'linear-gradient(220deg, #8D98CC, #EDECFC)',
        'gradient-18deg': 'linear-gradient(20deg, #4263d9, #c9d3fd)',
        'custom-gradient': 'linear-gradient(to right, #1D359D, #2d51d3, #1d359d)'

      },
      fontSize: {
        '8px': '8px'
      },
      borderRadius: {
        'lm': '9px',
        '50%': '50px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
