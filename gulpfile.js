const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babili = require('gulp-babili');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('minify', () => {
  return gulp.src('./pakertaja.js')
    .pipe(plumber())
    .pipe(babili())
    .pipe(rename('./pakertaja.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', ['minify'], () => {
  gulp.watch('./pakertaja.js', ['minify']);
});

gulp.task('default', ['minify']);
