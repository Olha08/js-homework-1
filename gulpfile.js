var gulp         = require('gulp');

var browserSync  = require('browser-sync').create();

var sass         = require('gulp-sass');

gulp.task('serve', ['sass'], function() {



    browserSync.init({
        server: "src/",
        notify: false
    });

    gulp.watch("src/scss/*.scss", ['sass']);

    //gulp.watch("src/*.html").on('change', browserSync.reload);

});

gulp.task('sass', function() {

    return gulp.src("src/scss/*.scss")

        .pipe(sass().on('error', sass.logError))

        .pipe(gulp.dest("src/css"));

        //.pipe(browserSync.stream());

});