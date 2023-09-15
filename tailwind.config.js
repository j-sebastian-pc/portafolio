/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{  
        colors:{
        // #3de9f2
        //RGBA(255, 255, 255, 0.85)
      fondoColor: '#ffffffc5',
      background: '#1f242d'
    },
    backgroundImage:{
      fondo: "url(/public/images/fondo.png)"
    }
  }

  },
  plugins: [],
}