const path = require(`path`);
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    path: path.resolve(__dirname, `public/js/`),
    filename: `bundle.js`
  },
  devtool: `source-maps`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: "http://localhost:8080",
    compress: true,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: `style-loader`,
          use: [`css-loader`, `sass-loader`]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin({filename: `css/style.css`})]
};
