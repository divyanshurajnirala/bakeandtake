/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        chocolate: "#3E2723",
        cream: "#FFF3E0",
        pink: "#F8BBD0",
        caramel: "#D4A373",
        rosecream: "#FFF7F1",
        cocoa: "#6B3E32",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(212, 163, 115, 0.28)",
        soft: "0 18px 48px rgba(62, 39, 35, 0.12)",
      },
      backgroundImage: {
        "cream-radial":
          "radial-gradient(circle at top left, rgba(248,187,208,0.38), transparent 28%), radial-gradient(circle at 80% 20%, rgba(212,163,115,0.28), transparent 24%), linear-gradient(135deg, #FFF7F1 0%, #FFF3E0 52%, #FDE8DE 100%)",
      },
    },
  },
  plugins: [],
};
