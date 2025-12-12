/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Brand Colors from Image
                cream: {
                    50: '#faf8f5',
                    100: '#f5f1ea',
                    200: '#ebe3d5',
                    300: '#e1d5c0',
                    400: '#d7c7ab',
                    500: '#cdb996', // Main cream background
                    600: '#b39a7a',
                    700: '#8f7a5f',
                    800: '#6b5b47',
                    900: '#473c2f',
                },
                brown: {
                    50: '#f7f5f3',
                    100: '#e8e3de',
                    200: '#d1c7bd',
                    300: '#baab9c',
                    400: '#a38f7b',
                    500: '#8c735a',
                    600: '#6d5744', // Main dark brown text
                    700: '#5a4838',
                    800: '#47392c',
                    900: '#342a20',
                },
                gold: {
                    50: '#fef9ed',
                    100: '#fdf3db',
                    200: '#fbe7b7',
                    300: '#f9db93',
                    400: '#f7cf6f',
                    500: '#d4a574', // Soft gold accent
                    600: '#c89858',
                    700: '#a67c47',
                    800: '#7d5d35',
                    900: '#543e23',
                },
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
