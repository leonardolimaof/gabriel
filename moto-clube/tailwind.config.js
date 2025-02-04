/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '375px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    xs: '1rem',
                    sm: '2rem',
                    md: '3rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            colors: {
                primary: {
                    DEFAULT: '#6B46C1', // Roxo neon para destaques
                    light: 'rgba(107, 70, 193, 0.1)',
                    soft: 'rgba(107, 70, 193, 0.3)',
                    medium: 'rgba(107, 70, 193, 0.5)',
                    strong: 'rgba(107, 70, 193, 0.7)',
                    dark: 'rgba(107, 70, 193, 0.9)',
                },
                secondary: {
                    DEFAULT: '#111111', // Preto profundo
                    light: 'rgba(17, 17, 17, 0.1)',
                    soft: 'rgba(17, 17, 17, 0.3)',
                    medium: 'rgba(17, 17, 17, 0.5)',
                    strong: 'rgba(17, 17, 17, 0.7)',
                    dark: 'rgba(17, 17, 17, 0.9)',
                },
                accent: {
                    DEFAULT: '#F8F9FA', // Branco suave
                    light: 'rgba(248, 249, 250, 0.1)',
                    soft: 'rgba(248, 249, 250, 0.3)',
                    medium: 'rgba(248, 249, 250, 0.5)',
                    strong: 'rgba(248, 249, 250, 0.7)',
                    dark: 'rgba(248, 249, 250, 0.9)',
                },
                danger: {
                    DEFAULT: '#9333EA', // Roxo para alertas/erros
                    light: 'rgba(147, 51, 234, 0.1)',
                    soft: 'rgba(147, 51, 234, 0.3)',
                    medium: 'rgba(147, 51, 234, 0.5)',
                    strong: 'rgba(147, 51, 234, 0.7)',
                    dark: 'rgba(147, 51, 234, 0.9)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1.16' }],
                '6xl': ['3.75rem', { lineHeight: '1.16' }],
                '7xl': ['4.5rem', { lineHeight: '1.16' }],
            },
            spacing: {
                '0.5': '0.125rem',
                '1.5': '0.375rem',
                '2.5': '0.625rem',
                '3.5': '0.875rem',
                '4.5': '1.125rem',
                '5.5': '1.375rem',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
                pulse: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.7 },
                }
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
                gradient: 'gradient 3s ease infinite',
                pulse: 'pulse 2s ease-in-out infinite',
            },
            borderRadius: {
                'xs': '0.125rem',
                'sm': '0.25rem',
                DEFAULT: '0.375rem',
                'md': '0.5rem',
                'lg': '0.75rem',
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
                'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
            },
        },
    },
    plugins: [],
}