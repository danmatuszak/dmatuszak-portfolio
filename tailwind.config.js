/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit", // just in time mode to allow better modification
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": '#757575',
        "opaque-black": "rgba(0,0,0,0.35)",
        mintgreen: {
          100: "#e0fff8",
          200: "#c1fff0",
          300: "#a2ffe9",
          400: "#83ffe1",
          500: "#64ffda",
          600: "#50ccae",
          700: "#3c9983",
          800: "#286657",
          900: "#14332c",
        },
      },
      backgroundImage: (theme) => ({ // set background gradient here
        "gradient-rainbow": 
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue": 
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
        "gradient-raingreen":
          "linear-gradient(90deg, #00B5EE 14.53%, #64FFDA 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      }
    },
  },
  plugins: [],
}

