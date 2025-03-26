export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-bg': "radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      },
      fontFamily: {
        barlow: ["'Barlow Semi Condensed'", "sans-serif"],
      },
      fontWeight: {
        semibold: "600",
        bold: "700",
      }
    }
  },
  plugins: [],
};
