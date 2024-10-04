/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-blue": "0 4px 6px rgba(0, 123, 255, 0.5)", // Custom shadow with blue color
        "custom-green": "0 6px 8px rgba(0, 255, 123, 0.5)", // Custom shadow with green color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* For Firefox */
          "scrollbar-width": "none",
          /* For Chrome, Safari, and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
