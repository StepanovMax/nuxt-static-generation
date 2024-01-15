const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/components/**/*.{js,vue,ts}", "./src/pages/**/*.vue", "./src/app.vue"],
  theme: {
    extend: {},
    fontSize: {
      '4xl': '2rem',
      '3xl': '1.8rem',
      '2xl': '1.6rem',
      xl: '1.4rem',
      lg: '1.2rem',
      md: '1.1rem',
      base: '1rem',
      sm: '0.8rem',
    },
    colors: {
      blue: {
        100: "#FAEEFF",
        101: "#99B1E6",
        200: "#FFFEED",
        300: "#D2F4FF",
        400: "#DEECFF",
        500: "#E2DEFF",
        600: "#F4DEFF",
        700: "#0D4CD3",
        800: "#9DACCE",
      },
      gray: {
        100: "#EEF2FE",
        101: "#FAFCFF",
        200: "#FFECEC",
        300: "#66727F",
        400: "#0B1F33",
        500: "#EFF5F9",
        501: "#86909C",
        502: "#939197",
        503: "#F5F9FF",
        504: "#19191B",
        505: "#272727",
      },
      yellow: {
        100: "#F0FFF3",
        200: "#FFF6DE",
      },
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      purple: "#3F3CBB",
    },
    aspectRatio: {
      '4/1': '4 / 1',
    },
    screens: {
      'xxs': '240px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [
    plugin(function({addVariant}) {
      addVariant('theme-default', '.sm-app:has(.theme-default) &');
      addVariant('theme-dark', '.sm-app:has(.theme-dark) &');
    }),
  ],
};
