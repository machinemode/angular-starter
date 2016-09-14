// Karma configuration
'use strict';
module.exports = function (config) {
	config.set({
		basePath: '.',
		frameworks: ['jasmine'],
		files: [
			{ pattern: 'node_modules/systemjs/dist/system.js', included: true, watched: false },
			{ pattern: 'src/systemjs.config.js', included: true, watched: false },
			{ pattern: 'karma-bootstrap.js', included: true, watched: false },
			{ pattern: 'karma-shim.js', included: false, watched: false },

			{ pattern: 'node_modules/**/*.ts', included: false, watched: false },
			{ pattern: 'node_modules/**/*.js', included: false, watched: false },
			{ pattern: 'node_modules/**/*.js.map', included: false, watched: false },
			{ pattern: 'node_modules/**/*.json', included: false, watched: false },

			{ pattern: 'src/**/*', included: false, watched: true }
		],
		proxies: {
			'/node_modules': '/base/node_modules',
			'/karma-shim.js': '/base/karma-shim.js',
			'/src': '/base/src'
		},
		colors: true,
		logLevel: config.LOG_INFO,
		browsers: ['Chrome'],
		singleRun: true,
		concurrency: Infinity
	});
};
