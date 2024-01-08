/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-1": "rgb(var(--background-1))",
      },
    },
  },
  plugins: [],
};
