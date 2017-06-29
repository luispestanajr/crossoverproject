'use strict';

const gulp = require('gulp'),
    config = require('./config');

// Move the Webconfig to dist folder
gulp.task('transfer-webconfig', () => {
    return gulp.src(config.root.src + '/Web.config')
               .pipe(gulp.dest(global.isProd ? config.root.dist : config.root.tmp));
});

