const gulp = require('gulp');
const watch = require('gulp-watch');
const jasmine = require('gulp-jasmine');

gulp.task('test', () => {
  return gulp.src('test/**/*.test.js')
    .pipe(jasmine(
      {
        'verbose': true,
        'includeStackTrace': true
      }
    ));
});

gulp.task('watch-test',() => {
  watch('test/**/*.test.js', function () {
    gulp.start('test');
  });
});

gulp.task('build', () => {
  gulp.start('test');
});