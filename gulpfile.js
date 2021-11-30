const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));



function buildScss() {
    return gulp.src('./src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/css'));
  };
  
  exports.default = buildScss
  exports.watch = function () {
    gulp.watch('./src/scss/**/*.scss', gulp.series(["default"]));
  };