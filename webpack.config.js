const merge      = require('webpack-merge'),
      baseConfig = require('./build/webpack.base.config'),
      devConfig  = require('./build/webpack.dev.config'),
      prodConfig = require('./build/webpack.prod.config');

module.exports = (env) => {
    if(env === 'production') {
        return merge(baseConfig, prodConfig);
    }
    return merge(baseConfig, devConfig);
};