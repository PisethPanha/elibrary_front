/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        khmer: ['"khmer os muol light"', "sans-serif"]
      },
     screens: {
      'xmd': '837px'
     }
    },
  },
  plugins: [],
}

