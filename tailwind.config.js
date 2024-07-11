/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: { "gray-light": "#B2B2B2", "gray-dark": "#4D4D4D" },
			fontFamily: {
				sans: "var(--font-nunito)",
			},
		},
	},
	plugins: [],
};
