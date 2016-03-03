var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/app.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|build)/,
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /(\.scss|\.css)$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    require.resolve('sass-loader') + '?sourceMap'
                ]
            }
        ],
        resolve: {
          extensions: ['', '.jsx', '.scss', '.js', '.json']
        }
    }
};
