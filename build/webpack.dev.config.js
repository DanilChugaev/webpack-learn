const   path                 = require('path'),
        webpack              = require('webpack'),
        utils                = require('./utils'),
        merge                = require('webpack-merge'),
	    baseConfig           = require('./webpack.base.config'),
	    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'),
	    HtmlWebpackPlugin    = require('html-webpack-plugin');

module.exports = merge(baseConfig,{
    devServer: {
        historyApiFallback: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        watchOptions: {
            aggregateTimeout: 1000,
            poll: 1000
        }
    },
    plugins: [
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, 'node_modules')
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ],
    module: {
        rules: utils.styleLoaders({
            sourceMap: false
        })
    }
});