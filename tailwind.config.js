/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(217, 28%, 15%)",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      /**
       * Returns an object containing background image URLs for different modes.
       *
       * @param {Object} theme - The theme object.
       * @return {Object} An object with background image URLs for different modes.
       */
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url('../images/logo-dark-mode.svg')",
        "logo-light-mode": "url('../images/logo-light-mode.svg')",
        "curvy-dark-mode": "url('../images/bg-curvy-dark-mode.svg')",
        "cuvry-light-mode": "url('../images/bg-curvy-light-mode.svg')",
      }),
    },
  },
  /**
   * Need a variant to pass the `dark` mode to the `backgroundImage` function.
   * @param {Object} theme - The theme object.
   * @return {Object} An object with the `dark` variant.
   * @see https://tailwindcss.com/docs/dark-mode
   * */
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
