module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandBlue: {
          defaultText: "#005B8E",
          darkText: "#0098EE",
          gradient: "#0D3647",
          default: "#004368",
          dark: "#006BA8",
        },
        brandBlack: {
          default: "#100f10",
        },
        brandWhite: {
          default: "#fafafa",
          dark: "#eaeaea",
          superDark: "#a1a1a1",
        },
        barGray: {
          light: "#393939",
          dark: "#363636",
          veryLight: "#a6a6a6",
        },
        boxGray: {
          light: "#252525",
          dark: "#303030",
        },
      },
      fontFamily: {
        secondary: ["Roboto", "sans-serif"],
      },
      height: {
        xl: "80vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["tailwind-scrollbar-hide"],
};
