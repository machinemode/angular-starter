'use strict';

Error.stackTraceLimit = 10;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () { };

System.import('karma-shim.js').then(function () {

	var regex = /^\/base\/(src\/.*\.spec)\.ts$/;

	var isSpecFile = function (path) {
		return regex.test(path);
	};

	var getModuleName = function (path) {
		var results = regex.exec(path);
		return results[1];
	};

	var specFiles = Object.keys(window.__karma__.files).filter(isSpecFile);

	return Promise.all(specFiles.map(function (path) {
		return System.import(getModuleName(path));
	}));
}).then(__karma__.start, __karma__.error);
