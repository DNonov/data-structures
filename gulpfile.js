const gulp = require('gulp');
const watch = require('gulp-watch');
const jasmine = require('gulp-jasmine');

gulp.task('test', () => {
  return gulp.src('test/**/*.test.js')
    .pipe(jasmine());
});

gulp.task('watch-test', () => {
  watch('test/**/*.test.js', () => {
    gulp.start('test');
  });
});

gulp.task('build', ['test']);