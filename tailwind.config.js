/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: "var(--font-nunito)",
			},
			fontSize: {
				"custom-24": ["24px", "32.74px"],
			},
			fontWeight: {
				"extra-bold": "800",
			},
			colors: { "gray-light": "#B2B2B2", "gray-dark": "#4D4D4D" },
		},
	},
	plugins: [],
};
