'use strict';

Error.stackTraceLimit = 10;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = () => { };

System.import('karma-shim.js').then(() => {

	var regex = /^\/base\/(src\/.*\.spec)\.ts$/;

	var isSpecFile = (path) => {
		return regex.test(path);
	};

	var getModuleName = (path) => {
		var results = regex.exec(path);
		return results[1];
	};

	var specFiles = Object.keys(window.__karma__.files).filter(isSpecFile);

	return Promise.all(specFiles.map((path) => {
		return System.import(getModuleName(path));
	}));
}).then(__karma__.start, __karma__.error);
