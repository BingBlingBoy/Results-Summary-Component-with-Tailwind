/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./design/src/**/*.{html,js}",
  '*.{html,js}'
],
  theme: {
    extend: {
            fontFamily: {
                'HankenGrotesk': ['HankenGrotesk']
            }
        },
  },
  plugins: [],
}

