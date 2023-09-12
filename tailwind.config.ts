import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      lg: "1150px",
      md: "661px",
      sm: "360px",
    },
    extend: {
      backgroundImage: {
        banner: "url(/pattern-bg-desktop.png)",
      },
      animation: {
        "fade-in": "fade-in 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        "slide-in-out": "slide-in-out 7s ease-in-out 1",
      },
      keyframes: {
        "slide-in-out": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "10%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
          "90%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
        },
        "fade-in": {
          "0%": {
            transform: "translateZ(-80px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateZ(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
