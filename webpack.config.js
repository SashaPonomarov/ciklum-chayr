const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        './client/app.js',
    ],
    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 3030,
        contentBase: './public',
    },
    output: {
        path: path.join(__dirname, 'server/public/'),
        filename: 'main.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "style!css" )},
            { test: /\.(sass|scss)/, loader: ExtractTextPlugin.extract("style", "style!css?sourceMap!resolve-url!sass?sourceMap")},

            { test: /\.gif$/, loader: 'url?limit=16000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url?limit=50000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url?limit=16000&mimetype=image/png' },
            { test: /\.svg/, loader: 'url?limit=50000&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url?limit=500000' },

            { test: /\.jsx$/, loader: 'react-hot!babel', include: [/client/] },
            { test: /\.js$/, loader: 'babel', include: [/client/] },

            { test: /\.json$/, loader: 'json' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'client/index.html',
        }),
        new ExtractTextPlugin("styles.css")
    ]
};
