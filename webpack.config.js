const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    app: PATHS.src
  },
  output: {
    path: PATHS.dist,
    filename: `js/[name].[hash].js`
  },
  devtool: `source-map`,
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          `css-loader`,
          `sass-loader`
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`]
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].[hash].css`
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/views/index.html`,
      filename: "./index.html",
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/views/detail.html`,
      filename: "./detail.html",
      inject: false
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/html/view/*.html`, to: `${PATHS.dist}`},
      { from: `${PATHS.src}/css/`, to: `${PATHS.dist}/css`}
    ])
  ]
};
