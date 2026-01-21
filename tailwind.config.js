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
                    DEFAULT: '#000000',
                    dark: '#1a1a1a',
                },
                accent: {
                    DEFAULT: '#fbbf24', // Un amarillo/dorado premium para contrastar con el negro
                    light: '#fde68a',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
