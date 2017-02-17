'use strict';

module.exports = {
	port: 4000,
	title: '{{name}}',
	publicPath: '{{#if electron}}.{{/if}}/',
	// Add these dependencies to a standalone vendor bundle
	vendor: [
		'vue',
		'vuex',
		'vue-router',
		'vuex-router-sync',
		'vue-head',
		'vue-progressbar',
		'axios',
		'vue-axios',
		'vue-i18n',
		'promise-polyfill',
		'bulma'
	],
	// Disable babelrc by default
	babel: {
		babelrc: false,
		presets: ['vue-app']
	},
	postcss: [
		// Add prefix via postcss since it's faster
		require('autoprefixer')({
			// Vue does not support IE 8 and below
			browsers: ['last 2 versions', 'ie > 8']
		}),
		require('postcss-nested')
	],
	cssModules: false,{{#if electron}}
	electron: true,{{/if}}{{#if jsx}}
	jsx: true{{/if}}
};
