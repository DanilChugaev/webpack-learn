process.env.NODE_ENV = 'production';

const ora        = require('ora'),
      chalk      = require('chalk'),
      webpack    = require('webpack'),
      prodConfig = require('./webpack.prod.config');

var spinner = ora('building for production');

spinner.start();

webpack(prodConfig, function (err, stats) {
    spinner.stop();

    if(err) {
        throw err;
    }

    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }));

    console.log('\n');
    console.log(chalk.green('>>>'), chalk.blue('Build complete'));
});