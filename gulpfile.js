var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  
});

gulp.task('default', function() {
  // place code for your default task here
    //gulp.src('*.scss')
    gulp.src('./style.scss')
        .pipe(sass())
        .pipe(minifyCSS({
            //keepBreaks:true
        }))
        .pipe(gulp.dest('./build'));
        connect.server({
            root:'build'
        });
});

