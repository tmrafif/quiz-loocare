/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                text: "#0b0810",
                background: "#f9f8fb",
                primary: "#ae8563",
                secondary: "#d7baa2"
            },
        },
    },
    plugins: [],
};
