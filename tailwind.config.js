
const fontSize = {};

const pxToRem = (px, base = 16) => {
	return `${px / base}rem`;
};

const minFontSize = 2;
const maxFontSize = 70;
let i = minFontSize;
while (i <= maxFontSize) {
	fontSize[i] = pxToRem(i);
	i += 1;
}

const borderRadius = [0, 2, 4, 6, 8, 12, 16, 24].reduce((acc, cur) => {
	acc[cur] = pxToRem(cur);
	return acc;
}, {});
borderRadius["full"] = "9999px";

module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}" ,],
	corePlugins: {
		container: false,
	},
	theme: {
		extend: {
			borderRadius,
			colors: {
				green: "#3A643B",
				coustomgreen:"#ECFEE7",
				peach: "#FFF7E2",
				darkRed: "#951D1C",
			},
			backgroundImage: {
				"desktop-gradient":
					"linear-gradient(90.17deg, rgba(18, 18, 18, 0.88) 1.03%, rgba(18, 18, 18, 0.92) 44.18%, rgba(1, 1, 1, 0) 95.15%)",
				"mobile-gradient":
					" linear-gradient(180deg, rgba(24, 24, 24, 0.87) 0%, rgba(34, 34, 34, 0.48) 100%)",
				chakraSectino2:
					"url('../src/assets/images/second section/chakra.png')",
				womenSectino2:
					"url('../src/assets/images/second section/women.png')",
				"mobilebg-section4":
					"url('../src/assets/images/forth section/mobile_bg.png')",
				"desktopbg-section4":
					"url('../src/assets/images/forth section/desktop_bg.png')",
				"section4-mobile-gradient":
					"linear-gradient(180deg, rgba(0, 0, 0, 0.66) 2.52%, rgba(14, 14, 14, 0.54) 100%)",
				"section4-desktop-gradient":
					"linear-gradient(180deg, rgba(0, 0, 0, 0.59) 2.52%, rgba(0, 0, 0, 0.53) 22.87%, rgba(14, 14, 14, 0.4) 100%)",
			},

			fontFamily: {
				manrope: ["Manrope", "sans-serif"],
			},
			fontSize,
			spacing: {
				4.5: pxToRem(18),
				7.5: pxToRem(30),
				22: pxToRem(88),
				30: pxToRem(120),
			},
		},
	},
	plugins: [
		
	],
};


