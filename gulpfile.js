var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');



function buildScss() {
return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
    cascade: false
}))
    .pipe(gulp.dest('./dist/css'));
};

exports.default = buildScss
exports.watch = function () {
gulp.watch('./src/scss/**/*.scss', gulp.series(["default"]));
};