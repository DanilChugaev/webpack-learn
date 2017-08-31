const path = require('path');

module.exports = {
    entry:{
        build: path.join(__dirname, '..', 'src')
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
	    publicPath: '/',
	    filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, '..', 'src')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	            loader: 'file-loader',
	            options: {
		            name: 'static/img/[name].[ext]',
		            publicPath: '../'
	            }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
	            loader: 'file-loader',
	            options: {
		            name: 'static/media/[name].[ext]',
		            publicPath: '../'
	            }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
	            loader: 'file-loader',
	            options: {
		            name: 'static/fonts/[name].[ext]',
		            publicPath: '../'
	            }
            },
        ]
    }
};