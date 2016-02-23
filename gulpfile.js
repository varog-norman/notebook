var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var babel = require('gulp-babel');

gulp.task('jade', () => {
    return gulp.src('./templates/jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./src/'))
});

gulp.task('stylus', () => {
    return gulp.src('./templates/stylus/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./src/style/'))
});

gulp.task('babel', () => {
    return gulp.src('./react/script.js')
        .pipe(babel())
        .pipe(gulp.dest('./src/script/'))
});

gulp.task('default', ['jade', 'stylus', 'babel']);
