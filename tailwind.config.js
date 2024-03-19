/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				"12xl": "250px",
			},
			position: {
				sticky: "sticky",
			},
			colors: {
				metal: "#112121",
				newPink: "#FDA8AF",
			},
		},
	},
	plugins: ["tailwindcss-animate"],
};
