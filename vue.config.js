/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "@/assets/scss/core/_variables.scss";`,
				sassOptions: {
					includePaths: [path.resolve(__dirname, 'node_modules/')],
				},
			},
		},
	},
};
