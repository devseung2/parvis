const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');

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
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins : [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            filename: path.join(__dirname, './dist/index.html')
        })
    ],
    devtool: 'cheap-eval-source-map'
}