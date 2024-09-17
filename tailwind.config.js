/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./public/**/*.{html,js,css}",
  ],
  theme: {
    screens: {
      xs: "350px",
      // => @media (min-width: 350px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1986px",
    },
    colors: {
      "brand-red": "#A91D54",
      "brand-yellow": "#FED800",
      "brand-lisa": "#9333EA",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {

      height: {
        13: "50px",
        200: "200px",
        280: "280px",
        300: "300px",
        350: "350px",
        360: "360px",
        370: "370px",
        380: "380px",
        400: "400px",
        425: "425px",
        450: "450px",
        500: "500px",
        720: "720px",
        820: "820px"
      },
      spacing: {
        '13': '50px',
        '15': '60px',
      },
      aspectRatio: {
        "16/9": "960 / 540",
        "4/3": "640 / 480",
      },
      fontSize: {
        "2xl+": ["28px", "34px"],
        "4xl+": ["36px", "40px"],
        "5xl+": ["54px", "1"],
      },
      textUnderlineOffset: {
        6: "6px",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-banner": "url('assets/banner-img/hero-banner.webp')",
        "top-bg": "url('https://media.itm.ac.in/top_1_d3e6420d3c.webp')",
        "text": "url('https://media.itm.ac.in/text_bg1_eac3b18068.jpg')",
        "mac-banner": "url('https://media.itm.ac.in/mac_banner1_35ecda4329.webp')",
        "linear-graph": "url('assets/banner-img/graph-3.webp')",
        "boa-banner": "url('https://media.itm.ac.in/boa_banner_3_600c43a68e.webp')",
        "lisa": "url('https://media.itm.ac.in/lisa_image_b584106d2a.webp')",
        "footer-banner": "url('https://media.itm.ac.in/footer_banner_0805d97f4e.webp')",
        "deco-mob": "url('https://media.itm.ac.in/decorative_mob_45f350d02d.webp')",
        "deco-web": "url('https://media.itm.ac.in/decorative_web_439868e84f.webp')",
        "thank-banner": "url('https://media.itm.ac.in/thank_banner_c3e3f2e445.webp')",
        "thank-banner1": "url('https://media.itm.ac.in/thank_banner1_ea8be4b6cd.webp')",
      },
      backgroundColor: {
        "modal-dark-fade": "rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};