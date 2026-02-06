import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "star-drift": {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "-1000px 600px" },
        },
        "star-drift-alt": {
          "0%": { backgroundPosition: "200px 0px" },
          "100%": { backgroundPosition: "-900px -500px" },
        },
        "star-drift-vert": {
          "0%": { backgroundPosition: "0px 200px" },
          "100%": { backgroundPosition: "-600px -1200px" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
        "shooting-star": {
          "0%": { transform: "translate3d(-10vw, -10vh, 0)", opacity: "0" },
          "10%": { opacity: "1" },
          "30%": { opacity: "0" },
          "100%": { transform: "translate3d(120vw, 120vh, 0)", opacity: "0" },
        },
        "nebula-shift": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-40px, 20px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        "star-drift": "star-drift 90s linear infinite",
        "star-drift-fast": "star-drift 45s linear infinite",
        "star-drift-slow": "star-drift 120s linear infinite",
        "star-drift-alt": "star-drift-alt 70s linear infinite",
        "star-drift-vert": "star-drift-vert 55s linear infinite",
        twinkle: "twinkle 3.5s ease-in-out infinite",
        "twinkle-bright": "twinkle 2.2s ease-in-out infinite",
        "star-drift-fast-twinkle": "star-drift 45s linear infinite, twinkle 2.2s ease-in-out infinite",
        "shooting-1": "shooting-star 6s linear infinite",
        "shooting-2": "shooting-star 7.5s linear infinite",
        "shooting-3": "shooting-star 9s linear infinite",
        "nebula-shift": "nebula-shift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

export default config
