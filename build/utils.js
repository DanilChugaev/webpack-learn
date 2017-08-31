const path              = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

function cssLoaders(options) {
    let cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: options.extract,
            sourceMap: options.sourceMap,
            modules: true
        }
    };

    function generateLoaders(loader) {
        let loaders = [cssLoader];

        if(loader) {
            loaders.push({
                loader: loader,
                options: {
                    sourceMap: options.sourceMap
                }
            })
        }

        if(options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'style-loader'
            })
        } else {
            return ['style-loader'].concat(loaders);
        }
    }

    return {
        css: generateLoaders(),
        scss: generateLoaders('sass-loader')
    }
}

exports.styleLoaders = function(options) {
    let output = [],
        loaders = cssLoaders(options);

    for(let ext in loaders) {
        let loader = loaders[ext];

        output.push({
            test: new RegExp('\\.' + ext + '$'),
            use: loader
        })
    }

    return output;
};