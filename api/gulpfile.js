const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const ts = require('gulp-typescript');
const del = require('del');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const minify = composer(uglifyes, console);
const gutil = require('gulp-util')
const run = require('gulp-run');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function() {
  return del(['dist/'])
})

gulp.task('compile', ['clean'], function() {
  return tsProject.src()
  .pipe(tsProject()).js
  .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['clean'], function() {
  return tsProject.src()
  .pipe(tsProject()).js
//  .pipe(minify())
  .pipe(gulp.dest('dist/'));
})

gulp.task('watch', ['compile'], function() {
  nodemon({
    script: 'dist/app.js',
    ext: 'ts',
    tasks: ['compile'],
    execMap: {
      ts: "node --trace-warnings"
    },
    legacyWatch: true,
    debug: true
  });
});

gulp.task('default', ['watch']);
