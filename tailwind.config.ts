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
        "slide-in-bottom": "slide-in-bottom 1s ease-in-out forwards",
        "fade-in-fwd": "fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "slide-out-bottom": "slide-out-bottom 1s ease-in-out forwards",
      },
      keyframes: {
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade-in-fwd": {
          "0%": {
            transform: "translateZ(-80px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateZ(0)",
            opacity: "1",
          },
        },
        "slide-out-bottom": {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
