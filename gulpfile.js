'use strict';
let del = require('del');
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

gulp.task('sass', [], () => {
	return buildStyles(`${__dirname}/src/sass/styles.scss`, `${__dirname}/dist`)
		.then(() => buildStyles(`${__dirname}/src/app/**/*.scss`, `${__dirname}/src/app`))
		.catch(console.error);
});

gulp.task('watch', ['sass'], () => {
	gulp.watch(`${__dirname}/src/**/*.scss`, ['sass']);
});

gulp.task('clean', [], () => {
	return del([
		'build',
		`${__dirname}/dist/*.{css,js}`,
		`${__dirname}/src/**/*.{css,js,js.map}`
	]);
});