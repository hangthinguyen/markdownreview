/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    boxShadow: {
      "3xl": "0 5px 15px rgba(0,0,0,0.2);",
    },
    backgroundColor: {
      "light-gray": "#f1f5f8",
    },
  },
};
export const plugins = [];
