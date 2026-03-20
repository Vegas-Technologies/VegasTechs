/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.{html,js}",
        "./_layouts/*.{html,js}",
        "./_includes/*.{html,js}",
    ],
    theme: {
        extend: {
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
