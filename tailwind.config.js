/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    important: true,
    theme: {
        extend: {},
        fontFamily: {
            "source-code-pro": ["Source Code Pro", "monospace"],
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
