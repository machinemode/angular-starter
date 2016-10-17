'use strict';
let fs = require('fs');
let gulp = require('gulp');
let sass = require('gulp-sass');
let tsconfig = require('./tsconfig.json');

let buildStyles = (src, dest) => {
	let themes = `${__dirname}/src/sass/`;

	return new Promise((resolve, reject) => {
		gulp.src(src)
			.pipe(sass({
				outputStyle: 'nested',
				sourceMapEmbed: true,
				includePaths: [ themes ]
			}))
			.on('error', reject)
			.pipe(gulp.dest(dest))
			.on('end', resolve);
	});
};

gulp.task('sass', ['removeMaterialCssFiles'], () => {
	return buildStyles(`${__dirname}/src/sass/styles.scss`, `${__dirname}/dist`)
		.then(() => buildStyles(`${__dirname}/src/app/**/*.scss`, `${__dirname}/src/app`))
		.catch(console.error);
});

gulp.task('watch', ['sass'], () => {
	gulp.watch(`${__dirname}/src/**/*.scss`, ['sass']);
});

/*
	With material alpha.9, we need to rm these css files
	https://github.com/angular/material2/issues/1348
*/
gulp.task('removeMaterialCssFiles', () => {
	return new Promise((resolve, reject) => {
		fs.unlink('./node_modules/@angular/material/core/overlay/overlay.css', (error, result) => {
			resolve(result);
		});
	});
});
