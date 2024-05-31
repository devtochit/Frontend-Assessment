/** @type {import('tailwindcss').Config} */

const tailwindColors = {
  success: {
    DEFAULT: 'rgba(34, 197, 94, 1.0)', // tailwind default color
    dark: 'rgba(22, 163, 74, 1.0)', // tailwind default color
  },
  info: {
    DEFAULT: 'rgba(59, 130, 246, 1.0)', // tailwind default color
    dark: 'rgba(37, 99, 235, 1.0)', // tailwind default color
  },
  white: {
    DEFAULT: 'rgba(255, 255, 255, 1.0)', // tailwind default color
    dark: 'rgba(209,213,219,1.0)', // custom color
  },
  outline: {
    DEFAULT: 'rgba(255, 255, 255, 1.0)', // custom color
    dark: 'rgba(107, 114, 128, 1.0)', // custom color
  },
  danger: {
    DEFAULT: 'rgba(239, 68, 68, 1.0)', // tailwind default color
    dark: 'rgba(220, 38, 38, 1.0)', // tailwind default color
  },
  disabled: {
    DEFAULT: 'rgba(107, 114, 128, 1.0)', // tailwind default color
    dark: 'rgba(75, 85, 99, 1.0)', // tailwind default color
  },
};

const themeColors = {
  primary: {
    gradient_light: 'rgba(249, 218, 2, 1.0)', // app color
    gradient_dark: 'rgba(255, 123, 1, 1.0)', // app color
    light: 'rgba(255, 151, 1, 1.0)', // app color
    DEFAULT: 'rgba(255, 122, 2, 1.0)', // app color
    dark: 'rgba(188, 56, 0, 1.0)', //app color
  },
  secondary: {
    light: 'rgba(255,242,188,1.0)', // app color
    DEFAULT: 'rgba(249,219,0,1.0)', // app color
    dark: 'rgba(242,190,0,1.0)', // custom color
  },
  tertiary: {
    gradient_light: 'rgba(40, 226, 201, 1.0)', // app color
    gradient_dark: 'rgba(40, 192, 201, 1.0)', // app color
    light: 'rgba(143, 202, 216, 1.0)', // app color
    DEFAULT: 'rgba(31, 149, 176, 1.0)', // app color
    dark: 'rgba(10, 97, 117, 1.0)', // app color
  },
  ...tailwindColors,
};

exports.themeColors = themeColors;

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    dropShadow: {
      DEFAULT: '0 2px 1px rgba(0, 0, 0, 0.25)',
    },
    extend: {
      colors: themeColors,
      fontFamily: {
        riffic: ['Riffic', 'sans-serif'],
        poppins: ['Poppins-Regular', 'sans-serif'],
        muli: ['Muli-Regular', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
};
