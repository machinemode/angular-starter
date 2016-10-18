'use strict';

var packages = {
	'src': {
		defaultExtension: 'ts',
		main: 'main'
	},
	'@angular/material': {
		'defaultExtension': 'js',
		'main': 'material.umd.js'
	},
	'ts': {
		main: 'plugin.js'
	},
	'typescript': {
		main: 'lib/typescript.js',
		meta: {
			'lib/typescript.js': {
				'exports': 'ts'
			}
		}
	}
};

var map = {
	'@angular': 'node_modules/@angular',
	'core-js': 'node_modules/core-js',
	'hammerjs': 'node_modules/hammerjs/hammer.js',
	'reflect-metadata': 'node_modules/reflect-metadata',
	'rxjs': 'node_modules/rxjs',
	'ts': 'node_modules/plugin-typescript/lib/',
	'typescript': 'node_modules/typescript/',
	'zone.js': 'node_modules/zone.js'
};

var angularPackages = [
	'@angular/common',
	'@angular/compiler',
    '@angular/core',
	'@angular/forms',
	'@angular/http',
	'@angular/platform-browser',
	'@angular/platform-browser-dynamic',
	'@angular/router'
];

angularPackages.forEach(function (item) {
	var filename = item.split('/')[1];
	packages[item] = { main: 'bundles/' + filename + '.umd.js' };
	map[item + '/testing'] = 'node_modules/' + item + '/bundles/' + filename + '-testing.umd.js';
});

System.config({
	baseURL: '/',
	defaultJSExtensions: true,
	transpiler: 'ts',
	typescriptOptions: {
		tsconfig: true
    },
	meta: {
      'typescript': {
        "exports": "ts"
      }
    },
	packages: packages,
	map: map
});
