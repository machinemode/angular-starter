'use strict';
let gulp = require('gulp');
let sass = require('gulp-sass');
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
