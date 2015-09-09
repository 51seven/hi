var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync');
var hbsfy = require('hbsfy');
var $ = require('gulp-load-plugins')();
var reload = browserSync.reload;
var assign = require('lodash.assign');

var browserifyOpts = {
  entries: ['./app/script/main.js'],
  debug: true
};
var opts = assign({}, watchify.args, browserifyOpts);
var b = watchify(browserify(opts));
b.transform(hbsfy);

gulp.task('js', bundle);
b.on('update', bundle);
b.on('log', $.util.log);

function bundle() {
  return b.bundle()
    .on('error', $.util.log.bind($.util, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./app/.tmp/'));
}

gulp.task('watch', ['js'], function() {
  $.nodemon({
    script: './server/app.js'
  });

  browserSync.init({
    open: false,
    proxy: 'localhost:9000'
  });

  $.watch('app/.tmp/*.js', reload);
});