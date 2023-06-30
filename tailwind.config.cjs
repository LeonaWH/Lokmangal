/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#FC5D35',
				'secondary': '#FFF1EF',
        'tertiary': '#B36F6B',
			}
		},
	},
	plugins: [],
}
