/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#3db049',
				'secondary': '#e3f2fc',
				'tertiary': '#B36F6B',
			}
		},
	},
	plugins: [],
}
