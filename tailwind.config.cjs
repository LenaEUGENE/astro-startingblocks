/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
      center: true,
    },

		fontFamily: {
			inter: ['Inter', 'sans-serif'],
		},

		boxShadow: {
			 sm: '0px 2px 4px 0px rgba(11, 10, 55, 0.15)',
			 lg: '0px 8px 20px 0px rgba(18, 16, 99, 0.06)',
		},

		extend: {
		screen:{
			xs: '425px',
		},
		colors: {
			brand: 'hsl(var(--color-brand) / <alpha-value>)',
			accent: 'hsl(var(--color-accent) / <alpha-value>)',
			dark: 'hsl(var(--color-dark) / <alpha-value>)',
			offWhite: 'hsl(var(--color-offWhite) / <alpha-value>)',
			white: 'hsl(var(--color-white) / <alpha-value>)',
		},
	},
	},

	variants: {
		extend: {
			
		},
	}

}
  