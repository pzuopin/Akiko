'use strict';
process.env.NODE_ENV = 'production';

const exec = require('child_process').execSync;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const base = require('./webpack.base');
const _ = require('./utils');
const config = require('./config');

// Remove dist folder in web app mode
exec('rm -rf dist/');
// Use source-map in web app mode
base.devtool = 'source-map';

// A whitelist to add dependencies to vendor chunk
base.entry.vendor = config.vendor;
// Use hash filename to support long-term caching
base.output.filename = '[name].[chunkhash:8].js';
// Add webpack plugins
base.plugins.push(
	new ProgressPlugin(),
	new ExtractTextPlugin('styles.[contenthash:8].css'),
	new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
	new webpack.optimize.UglifyJsPlugin({
		sourceMap: true,
		compress: { warnings: false },
		output: { comments: false }
	}),
	// extract vendor chunks
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: 'vendor.[chunkhash:8].js'
	})
);

// Extract css in standalone css files
_.cssProcessors.forEach(processor => {
	let loaders;
	if (processor.loader === '') {
		loaders = ['postcss-loader'];
	} else {
		loaders = ['postcss-loader', processor.loader];
	}
	base.module.loaders.push({
		test: processor.test,
		use: ExtractTextPlugin.extract({
			use: [_.cssLoader].concat(loaders),
			fallback: 'style-loader'
		})
	});
});

// Minimize webpack output
base.stats = {
	// Add children information
	children: false,
	// Add chunk information (setting this to `false` allows for a less verbose output)
	chunks: false,
	// Add built modules information to chunk information
	chunkModules: false,
	chunkOrigins: false,
	modules: false
};

module.exports = base;
