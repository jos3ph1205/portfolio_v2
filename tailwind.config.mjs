/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				prim: {
					DEFAULT: "#697565",
					lt: "#C7D4C3",
					dk: "#42523D",
				},
				sec: {
					DEFAULT: "#ECDFCC",
					lt: "#F7F3ED",
					dk: "#C3AE8F",
				},
				tert: "#3C3D37",
				quat: "#181C14",
			},
		},
	},
	plugins: [],
};
