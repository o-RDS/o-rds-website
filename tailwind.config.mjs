/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				rdsOrange: '#EB5601',
				rdsBlue: '#159987',
				rsdDark1: '#121212',
				rdsDark2: "#32353b",
				rdsDark3: "#282C34",
				rdsDarkAccent: "#525760",
				rdsDarkAccent2: "#464b53",
				rdsDarkAccent3: "#3b3f45"
			  },
		},
	},
	plugins: [],
}
