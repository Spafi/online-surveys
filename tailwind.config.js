module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['"Montserrat"', 'cursive'],
			},
			zIndex: {
				'-10': '-10',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'm-gray': {
					DEFAULT: '#2b2d42',
					light: '#8d99ae',
					lighter: '#dce1e3',
				},
				'm-red': {
					darker: '#d90429',
					DEFAULT: '#ef233c',
				},
				'm-pink': {
					default: '#ff416c',
				},
				'm-orange': {
					default: '#ff4b2b',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
