const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.sass', '.html');
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      // '@': path.dirname(path.resolve(__dirname))
      '@': path.resolve(__dirname, '../src')
    }
  }

  // vue-svg-loader: https://github.com/visualfanatic/vue-svg-loader#readme
  const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
  svgRule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
  config.module.rules.push({
    test: /\.svg$/,
    oneOf: [
      {
        resourceQuery: /inline/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      },
      {
        loader: 'file-loader',
        query: {
          name: 'assets/[name].[hash:8].[ext]',
        },
      },
    ],
  })
  config.module.rules.push({ test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] });

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true, // used with ForkTsCheckerWebpackPlugin
        },
      }
    ],
  });

  config.plugins.push(new ForkTsCheckerWebpackPlugin({
    vue: true,
    tsconfig: path.resolve(__dirname, '../tsconfig.json')
  }));

  return config;
};
