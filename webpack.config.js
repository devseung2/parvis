const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.join(__dirname, './dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [{
            test : /\.(js|jsx)$/,
            exclude : /node_modules/,
            use : ['babel-loader']
        },
        {
            test : /\.scss$/,
            use : [
                miniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins : [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new miniCssExtractPlugin({
          filename: 'style.css'
        })
    ],
    devtool: 'cheap-eval-source-map'
}