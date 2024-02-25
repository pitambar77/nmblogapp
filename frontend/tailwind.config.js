/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      lineClamp:{
        10:"10",
        12:"12",
      }
    },
  },
  
  variants: {
    extend:['hover']
  },
}