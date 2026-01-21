/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4341EC', // El azul vibrante original
                    dark: '#4E36A3',    // El purpura de los gradientes
                },
                accent: {
                    DEFAULT: '#CC3366', // El magenta/rosa del logo y acentos
                },
                neutral: {
                    bg: '#F4F4F4',
                    text: '#333333',
                }
            },
            fontFamily: {
                sans: ['"Work Sans"', 'inter', 'system-ui', 'sans-serif'],
                heading: ['"Nebulica"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
