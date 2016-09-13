'use strict';

var packages = {
	'.': {
		defaultExtension: 'ts',
		main: 'main',
		meta: {
			'*.html': {
				loader: 'text'
			},
			'*.json': {
				loader: 'json'
			}
		}
	}
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
	packages[item] = { main: 'bundles/' + item.split('/')[1] + '.umd.js' };
});

System.config({
	defaultJSExtensions: true,
	transpiler: 'typescript',
	packages: packages,
	map: {
		'@angular': '../node_modules/@angular',
		'core-js': '../node_modules/core-js',
		'json': '../node_modules/systemjs-plugin-json/json.js',
		'reflect-metadata': '../node_modules/reflect-metadata',
		'rxjs': '../node_modules/rxjs',
		'text': '../node_modules/systemjs-plugin-text/text.js',
		'typescript': '../node_modules/typescript/lib/typescript.js',
		'zone.js': '../node_modules/zone.js'
	}
});

System.import('./tsconfig.json').then((tsconfig) => {
	System.typescriptOptions = tsconfig['compilerOptions'];
});
