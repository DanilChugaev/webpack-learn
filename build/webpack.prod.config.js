const   path              = require('path'),
	    webpack           = require('webpack'),
        utils             = require('./utils'),
        merge             = require('webpack-merge'),
        baseConfig        = require('./webpack.base.config'),
        ExtractTextPlugin = require('extract-text-webpack-plugin'),
	    CompressionPlugin = require('compression-webpack-plugin'),
	    OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin'),
	    HtmlWebpackPlugin = require('html-webpack-plugin');

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
	    publicPath: '',
        filename: 'js/[name].js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/style.css'
        }),
        new CompressionPlugin({
           asset: "[path].gz[query]",
           algorithm: "gzip",
           test: /\.(js|css|html|svg)$/,
           threshold: 10240,
           minRatio: 0.8
        }),
	    new HtmlWebpackPlugin({
		    filename: 'index.html',
		    template: 'index.html',
		    inject: true,
            minify: {
		        removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
	    }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                sequences: true,
                booleans: true,
                loops: true,
                unused: true,
                warnings: false,
                drop_console: true,
                unsafe: true
            },
            sourceMap: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
});