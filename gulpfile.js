"use strict";
const gulp = require('gulp');
const watch = require('gulp-watch');
const jasmine = require('gulp-jasmine');

gulp.task('test', function () {
  return gulp.src('test/**/*.test.js')
    .pipe(jasmine());
});

gulp.task('watch-test', function () {
  watch('test/**/*.test.js', function () {
    gulp.start('test');
  });
});

gulp.task('build', function () {
  gulp.start('test');
});