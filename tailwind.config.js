/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#c9ed93",
        
"secondary": "#e04908",
        
"accent": "#e55eba",
        
"neutral": "#1F1820",
        
"base-100": "#E7E4E7",
        
"info": "#4B8FC3",
        
"success": "#52E0A5",
        
"warning": "#F1800E",
        
"error": "#F75F8F",
        },
      },
    ],
  },
   plugins: [require("daisyui")],
}
