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
	chainWebpack: config => {
		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.oneOf('inline')
			.resourceQuery(/inline/)
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader')
			.end()
			.end()
			.oneOf('external')
			.use('file-loader')
			.loader('file-loader')
			.options({
				name: 'assets/[name].[hash:8].[ext]',
			});
	},
};
