const gulp = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

gulp.task('stylesheets:scss', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init()) // Process the original sources
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: [
                'last 20 versions',
                'last 20 Chrome versions',
                '> 20%',
                'ie 6-8'
            ],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('docs/styles'))
        .pipe(browserSync.stream());
});

gulp.task('templates', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./docs'))
        .pipe(browserSync.stream());
});


gulp.task('clean', function () {
    return gulp.src('./docs')
        .pipe(clean());
});

gulp.task('watch', ['clean'], function () {
    gulp.watch('./src/index.html', ['templates']);
    gulp.watch(
        './src/styles/**/*.scss', ['stylesheets:scss']);
});

gulp.task('add-image', function () {
    return gulp.src('./src/img/*')
        .pipe(gulp.dest('./docs/img'));
});

gulp.task('default', ['clean'], function () {
    gulp.start('watch', 'browser-sync');
});

gulp.task('browser-sync', [
    'stylesheets:scss',
    'templates',
    'add-image',
], function () {
    browserSync.init({
        server: {
            baseDir: "./docs"
        },
        notify: false
    });
});