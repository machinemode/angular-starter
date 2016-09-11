'use strict';

var packages = {
	'.': {
		'defaultExtension': 'ts',
		'main': 'main'
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
	typescriptOptions: {
		'target': 'es5',
		'module': 'system',
		'moduleResolution': 'node',
		'sourceMap': true,
		'emitDecoratorMetadata': true,
		'experimentalDecorators': true,
		'removeComments': false,
		'noImplicitAny': false
	},
	packages: packages,
	map: {
		'@angular': '../node_modules/@angular',
		'core-js': '../node_modules/core-js',
		'reflect-metadata': '../node_modules/reflect-metadata',
		'rxjs': '../node_modules/rxjs',
		'typescript': '../node_modules/typescript/lib/typescript.js',
		'zone.js': '../node_modules/zone.js'
	}
});

