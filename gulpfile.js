var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./sass/*.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('./css/'));
});


