'use strict';

module.exports = {
	port: 4000,
	title: '',
	// when you use electron please set to relative path like ./
	// otherwise only set to absolute path when you're using history mode
	publicPath: '/',
	// add these dependencies to a standalone vendor bundle
	vendor: [
		'vue',
		'vuex',
		'vue-events',
		'vue-router',
		'vuex-router-sync',
		'vue-progressbar',
		'axios',
		'vue-axios',
		'vue-i18n',
		'promise-polyfill'
	],
	// disable babelrc by default
	babel: {
		babelrc: false,
		presets: ['vue-app']
	},
	postcss: [
		// add prefix via postcss since it's faster
		require('autoprefixer')({
			// Vue does not support ie 8 and below
			browsers: ['last 2 versions', 'ie > 8']
		}),
		require('postcss-nested')
	],
	cssModules: false
};
