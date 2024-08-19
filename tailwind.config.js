/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(47, 88%, 63%)',
        'gray-500': 'hsl(0, 0%, 42%)',
        'gray-900': 'hsl(0, 0%, 7%)',
      }
    },
  },
  plugins: [],
}