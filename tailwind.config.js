module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': 'rgba(59,39,186,0.89)',
        'neon-blue-2': 'rgba(33,0,111,0.84)',
        'neon-light-blue': '#450EFF',
        'neon-sky': '#027A9F',
        'neon-green': '#13CA91',
        'neon-violet-dark': '#93009b',
        'neon-violet': '#E15FED',
        'neon-violet-light': '#eb3cfc',
        'deep-red': '#330408',
        'deep-blue': '#112240',
        'deep-blue-dark': '#1e3e75',
        'neon-teal': '#6EDCD9',
        'neon-purple': '#9254C8',
        'neon-pink': '#FA58B6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
    screen: {
      'max-md': {'max': '767px'},
      'max-lg': {'max': '1023px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
