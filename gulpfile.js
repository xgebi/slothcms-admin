'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('scss', function () {
  return gulp.src('./src/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./design/css'));
});

gulp.task('design', function () {
  return gulp.src('./src/designSystem.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./design/css'));
});

gulp.task('scss:watch', function () {
  gulp.watch(['./src/**/*.scss', './src/scss/**/*.scss'], gulp.parallel('design', 'scss'));
});
