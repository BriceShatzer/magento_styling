var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');

gulp.task('default', function() {
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

