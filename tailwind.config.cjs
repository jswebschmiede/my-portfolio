/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      black: {
        100: "#d2d2d2",
        200: "#a5a5a5",
        300: "#787878",
        400: "#4b4b4b",
        500: "#1e1e1e",
        600: "#181818",
        700: "#121212",
        800: "#0c0c0c",
        900: "#060606",
      },
      orange: {
        100: "#fee4d9",
        200: "#fec9b3",
        300: "#fdaf8e",
        400: "#fd9468",
        500: "#fc7942",
        600: "#ca6135",
        700: "#974928",
        800: "#65301a",
        900: "#32180d",
      },
      graygreen: {
        100: "#edf7f0",
        200: "#dbefe1",
        300: "#cae8d3",
        400: "#b8e0c4",
        500: "#a6d8b5",
        600: "#85ad91",
        700: "#64826d",
        800: "#425648",
        900: "#212b24",
      },
      whitegreen: {
        100: "#fcfdfa",
        200: "#f9fcf5",
        300: "#f7faf1",
        400: "#f4f9ec",
        500: "#f1f7e7",
        600: "#c1c6b9",
        700: "#91948b",
        800: "#60635c",
        900: "#30312e",
      },
    },
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
        heading: "Catamaran, sans-serif",
      },
      transitionProperty: {
        mouse: "width, height, margin, opacity",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#1e1e1e",
            h1: {
              fontSize: "4.5rem",
              lineHeight: 1,
              marginBottom: "2.25rem",
              color: "#1e1e1e",
            },
            h2: {
              fontSize: "4.5rem",
              lineHeight: 1,
              marginBottom: "2.25rem",
              color: "#1e1e1e",
            },
            h3: {
              fontSize: "2.5rem",
              lineHeight: "2rem",
              marginBottom: "2.25rem",
              color: "#1e1e1e",
            },
          },
        },

        dark: {
          css: {
            color: theme("colors.whitegreen.500"),
            h1: {
              color: theme("colors.whitegreen.500"),
            },
            h2: {
              color: theme("colors.whitegreen.500"),
            },
            h3: {
              color: theme("colors.whitegreen.500"),
            },
            h4: {
              color: theme("colors.whitegreen.500"),
            },
            a: {
              color: theme("colors.orange.500"),
            },
          },
        },
      }),

      boxShadow: ({ theme }) => ({
        custom: `4px 4px 0 ${theme("colors.black.500")}`,
        "custom-d": `4px 4px 0 ${theme("colors.whitegreen.600")}`,
      }),
      backgroundImage: ({ theme }) => ({
        circularLightLg: `repeating-radial-gradient( rgba(0,0,0,0.4) 2px, ${theme(
          "colors.whitegreen.500",
        )} 5px, ${theme("colors.whitegreen.500")} 100px)`,
        circularLightMd: `repeating-radial-gradient( rgba(0,0,0,0.4) 2px, ${theme(
          "colors.whitegreen.500",
        )} 5px, ${theme("colors.whitegreen.500")} 80px)`,
        circularLight: `repeating-radial-gradient( rgba(0,0,0,0.4) 2px, ${theme(
          "colors.whitegreen.500",
        )} 5px, ${theme("colors.whitegreen.500")} 60px)`,
        circularDarkLg: `repeating-radial-gradient( rgba(254,254,254,0.4) 2px, ${theme(
          "colors.black.500",
        )} 5px, ${theme("colors.black.500")} 100px)`,
        circularDarkMd: `repeating-radial-gradient( rgba(254,254,254,0.4) 2px, ${theme(
          "colors.black.500",
        )} 5px, ${theme("colors.black.500")} 80px)`,
        circularDark: `repeating-radial-gradient( rgba(254,254,254,0.4) 2px, ${theme(
          "colors.black.500",
        )} 5px, ${theme("colors.black.500")} 60px)`,
      }),
    },
  },
  darkMode: ["class"],
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
