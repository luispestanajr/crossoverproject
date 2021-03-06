'use strict';

const gulp = require('gulp'),
    runSequence = require('run-sequence');

// Task to build dev environment
gulp.task('build:dev', (done) => {
    global.isProd = false;
    runSequence(
        'clean',
        'lint',
        'styles',
        'styles:vendors',
        'scripts',
        'data',
        'scripts:vendors',
        ['fonts', 'images', 'html', 'modal'],
        'transfer-webconfig',
        'timestamp-assets',
        done
    );
});

// Task to build production environment
gulp.task('build:prod', (done) => {
    global.isProd = true;
    runSequence(
        'clean',
        'lint',
        'styles',
        'styles:vendors',
        'scripts',
        'data',
        'scripts:vendors',
        ['fonts', 'images', 'html', 'modal'],
        'transfer-webconfig',
        'timestamp-assets',
        'test:build',
        done
    );
});
