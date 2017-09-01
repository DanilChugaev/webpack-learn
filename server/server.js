const   express              = require('express'),
	    chalk                = require('chalk'),
	    path                 = require('path'),
        webpack              = require('webpack'),
	    webpackMiddleware    = require('webpack-dev-middleware'),
		webpackHotMiddleware = require('webpack-hot-middleware'),
		devConfig            = require('../build/webpack.dev.config'),

		port     = 5000,
		app      = express(),
		compiler = webpack(devConfig);

app.use(webpackMiddleware(compiler, {
	hot: true,
	publicPath: devConfig.output.publicPath,
	noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(port, () => console.log(chalk.green('>>>'), chalk.yellow('Server listen on port =', port, 'ENV =', process.env.NODE_ENV)));

