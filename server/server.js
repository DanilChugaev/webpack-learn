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

app.get('/get-headers', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*')
	res.sendFile(path.join(__dirname, '../json/table-headers.json'))
	console.log('headers send')
});
app.get('/get-cells', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*')
	res.sendFile(path.join(__dirname, '../json/table-cells.json'))
	console.log('cells send')
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(port, () => console.log(chalk.green('>>>'), chalk.yellow('Server listen on port =', port, 'ENV =', process.env.NODE_ENV)));

