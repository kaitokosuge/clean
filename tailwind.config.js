const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 1px -1px rgba(0, 0, 0, 0.01)'
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
