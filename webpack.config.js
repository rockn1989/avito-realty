const path = require(`path`);

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
    publicPath: 'http://localhost:8080',
    compress: true,
    watchContentBase: true
  }
};
