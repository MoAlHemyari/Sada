/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
	  wideMobiles: "480px",
      tablet: "748px",
      desktop: "1248px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        1: "#143881",
        2: "#1A449B",
        3: "#1C4FB5",
        4: "#456FC2",
        5: "#9DB3DF",
        6: "#E0E9FA",
        7: "#F2F4FF",
      },
      grey: {DEFAULT: "#808080", dark: "#707070"},
      black: "#081736",
      white: "#FAFBFF",
      green: "#4ABC64",
      red: "#FF0000",
    },
    boxShadow: {
      sm: "0px 2px 4px 0 #14388140",
      lg: "0px 8px 20px 0px #14388140",
      xl: "0px 4px 30px 10px #14388130",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        // tablet: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-arabic)"],
      },
    },
  },
  plugins: [],
};