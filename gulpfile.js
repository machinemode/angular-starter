'use strict';
let gulp = require('gulp');
let sass = require('gulp-sass');
let Builder = require('systemjs-builder');
let tsconfig = require('./tsconfig.json');

gulp.task('sass', () => {
	return new Promise((resolve, reject) => {
		gulp.src(`${__dirname}/src/**/*.scss`)
			.pipe(sass({
				outputStyle: 'nested',
				sourceMapEmbed: false
			}))
			.on('error', reject)
			.pipe(gulp.dest(`${__dirname}/src`))
			.on('end', resolve);
	});
});

gulp.task('watch', ['sass'], () => {
	gulp.watch(`${__dirname}/src/**/*.scss`, ['sass']);
});

gulp.task('bundle', ['sass'], () => {
	let src = `${__dirname}/src/main.ts`;
	let dest = `${__dirname}/dist/app.js`;
	let builder = new Builder(`${__dirname}`, `${__dirname}/systemjs.config.js`);

	builder.config({
		typescriptOptions: tsconfig['compilerOptions']
	});

	return builder.buildStatic(src, dest, {	minify: true });
});
