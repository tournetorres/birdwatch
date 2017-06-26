const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// transpile our scss into a css folder for out public directory
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// uglify our client facing files
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');


const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with js
        exclude: /node_modules/, // exclude node_modules directory
        loader: 'babel-loader',  //babel-core
      },
      {
        test: /\.jsx$/, // all files ending with .jsx
        exclude: /node_modules/, // exclude searching for files in the node_modules directory
        loader: 'babel-loader', // use the babel-loader for all .jsx files
      },
      {
        test: /\.scss$/, // files ending with.scss
        use: ExtractTextWebpackPlugin.extract({ // extract method
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader',  //fallback for any CSS not extracted
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css'), // call and name our css file
    new webpack.optimize.UglifyJsPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './public'), // url to serve HTML contents from
    historyApiFallback: true, // fallback to index.html for Single Page applications
    inline: true,
    open: true, //open default browser when launching
  },
  devtool: 'eval-source-map', //better dev tools
};


/** COMMANDS
1. ( npm run build ) to transpile
2. ( npm start ) to open browser
3. ( npm run production ) for production environments
**/

module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(), // uglify
    new OptimizeCSSAssets() //CSS minifier
  );
}
/** IMAGE transpiler
//         test: /\.(jpe?g|png|gif|svg)$/i,
//         loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {  // images loader
//           loader: 'image-webpack-loader',
//           query: {
//             mozjpeg: {
//               progressive: true,
//             },
//             gifsicle: {
//               interlaced: false,
//             },
//             optipng: {
//               optimizationLevel: 4,
//             },
//             pngquant: {
//               quality: '75-90',
//               speed: 3,
//             },
//           },
//         }],
//         exclude: /node_modules/,
//         include: __dirname,
//       },
**/


