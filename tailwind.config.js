/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            outline: {
                green: '2px solid #09814A',
            },
            colours: {
                dark: '#231e18',
            },
            fontFamily: {
                punkkid: ['PUNKKID', 'cursive'],
                nineteeneighty: ['nineteeneighty', 'cursive'],
                rubikdoodleshadow: ['rubikdoodleshadow', 'sans serif'],
                rubikdoodletriangle: ['rubikdoodletriangle', 'sans serif'],
                montserrat: ['montserrat', 'sans serif'],
                alfaslabone: ['alfaslabone', 'cursive'],
            },
        },
        maxWidth: {
            overview: '13rem',
        },
    },
    plugins: [],
};
