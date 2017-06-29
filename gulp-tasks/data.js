'use strict';

const gulp = require('gulp'),
    config = require('./config'),
    server = require('./server'),
    browserSync = require('browser-sync'),
    reload = server.reload;

// Task to move the fonts to environment
gulp.task('data', () => {
    return gulp.src(config.paths.src.allData)
               .pipe(global.isProd ? gulp.dest(config.paths.dist.data) : gulp.dest(config.paths.tmp.data))
               .pipe(reload({stream: true}));
});
