const gutil = require('gulp-util');
const path = require('path');

function createWebpackConfig() {
	const webpack = require('webpack');

	const babelOptions = {
		presets: ['es2015']
	};

	const config = {
		entry: [
			path.join(__dirname, 'src', 'index')
		],
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					include: path.join(__dirname, 'src'),
					use: {
						loader: 'babel-loader',
						options: babelOptions
					}
				}
			]
		}
	};

	return config;
}

const gulp = require('gulp');
gulp.task('default', function (callback) {
    const webpack = require('webpack');
    try {
        webpack(createWebpackConfig(), function (err, stats) {
            if (err) throw new gutil.PluginError('webpack', err);
            gutil.log('[webpack]', stats.toString());
            callback();
        });
    } catch (e) {
        console.error(e.message);
    }
});
