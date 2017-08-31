const path              = require('path'),
      utils             = require('./utils'),
      merge             = require('webpack-merge'),
      baseConfig        = require('./webpack.base.config'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge( baseConfig,{
    module: {
        rules: utils.styleLoaders({
            sourceMap: true,
            extract: true
        })
    },
    devtool: '#source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/style.css'
        })
    ]
});