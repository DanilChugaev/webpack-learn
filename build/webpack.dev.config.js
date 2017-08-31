const path    = require('path'),
      webpack = require('webpack'),
      utils   = require('./utils');

module.exports = {
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
        ])
    ],
    module: {
        rules: utils.styleLoaders({
            sourceMap: false
        })
    }
};