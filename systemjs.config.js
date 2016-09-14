'use strict';

var packages = {
	'': {
		meta: {
			'*.json': {
				loader: 'json'
			}
		}
	},
	'src': {
		defaultExtension: 'ts',
		main: 'main',
		meta: {
			'*.css': {
				loader: 'text'
			},
			'*.html': {
				loader: 'text'
			}
		}
	}
};

var map = {
	'@angular': 'node_modules/@angular',
	'core-js': 'node_modules/core-js',
	'json': 'node_modules/systemjs-plugin-json/json.js',
	'reflect-metadata': 'node_modules/reflect-metadata',
	'rxjs': 'node_modules/rxjs',
	'text': 'node_modules/systemjs-plugin-text/text.js',
	'typescript': 'node_modules/typescript/lib/typescript.js',
	'zone.js': 'node_modules/zone.js'
};

let angularPackages = [
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
	let filename = item.split('/')[1];
	packages[item] = { main: `bundles/${filename}.umd.js` };
	map[`${item}/testing`] = `node_modules/${item}/bundles/${filename}-testing.umd.js`;
});

System.config({
	baseURL: '/',
	defaultJSExtensions: true,
	transpiler: 'typescript',
	packages: packages,
	map: map
});

System.import('/tsconfig.json').then((tsconfig) => {
	System.typescriptOptions = tsconfig['compilerOptions'];
});
