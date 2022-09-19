/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
   
    extend: {
      spacing: {
      '14':'3.5rem',
      '125px':'125px'
      },
      colors:{
        'hoverspt':'#18D760',
        'purple-main':'#2D46B9',
        'gree-main':'#1ED760'
      },
      backgroundImage:{
        'spotify-theme': "url('../img/bursts.svg')",
        'spotify-theme-mobile': "url('../img/bursts-mobile.svg')",
        'logo': "url('../img/spotify-logo.png')"
      },
      backgroundSize:{
        '175%':'175%',
        '195%':'195%'
      },
      backgroundPosition:{
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize:{
        '9xl': '9rem'
      }
    },
  },
  plugins: [],
}
