/** @type {import('tailwindcss').Config} */
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const em = (px, base) => `${round(px / base)}em`;

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#1a202c", // Change to your desired color
              textDecoration: "underline",
              fontWeight: "normal",
              "&:hover": {
                color: "#2d3748", // Change to your desired hover color
              },
            },
            ul: {
              paddingInlineStart: 0,
            },
            "ul li": {},
            "li > p": {
              marginTop: 0,
              marginBottom: em(20, 16),
              paddingInlineStart: em(20, 16),
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
