/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './*.html'],
    theme: {
        fontFamily: {
            mont: ['Montserrat', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
                'dark-blue': '#16425b',
                primary: '#2f6690',
                secondary: '#3a7ca5',
                light: '#81c3d7',
                black: '#020202',
                'light-grey': '#d9dcd6',
                white: '#d9d9d9',
            },
            screens: {
                xs: '375px',
                sm: '475px',
                md: '640px',
                lg: '970px',
            },
        },
    },
    plugins: [],
};
