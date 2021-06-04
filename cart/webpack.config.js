const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedeartionPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFedeartionPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/index',
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
