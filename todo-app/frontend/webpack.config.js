const webpack = require('webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname+ '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'

    },
    resolve: {
        extentions: ['','.js','.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new extractTextPlugin('app.css')

    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: ['es2015', 'react'],
            plugins: ['transform-object-rest-spread'] 
        },
        {
            test: /\.css$/,
            loader: extractTextPlugin.extract('style-loader', 'css-loader')
        },
        {
            test: /\.woff|.woff2|.tff|.eot|.svg*.*$/

        }
    ]
    }


    
}