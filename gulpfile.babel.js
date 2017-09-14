const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const strip = require('gulp-strip-comments');
const rimraf = require('rimraf');
const yargs = require('yargs');
const fs = require('fs');
const beep = require('beepbeep');

const $ = plugins();

const PRODUCTION = !!yargs.argv.production;

let CONFIG;

// Build the "dist" folder by running all of the below tasks
gulp.task('build', gulp.series(clean, babel)); // eslint-disable-line no-use-before-define

// Build js, then watch
gulp.task('default', gulp.series('build', watch)); // eslint-disable-line no-use-before-define

// Build js, then upload to AWS
gulp.task('prod', gulp.series('build', creds, aws)); // eslint-disable-line no-use-before-define

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf('dist', done);
}

function babel() {
  return gulp
    .src('src/**/*.js')
    .pipe($.if(PRODUCTION, strip()))
    .pipe($.babel())
    .pipe(gulp.dest('dist'));
}

// Watch for file changes
function watch() {
  gulp.watch('src/**/*.js').on('all', gulp.series(babel));
}

// Ensure creds for AWS are at least there.
function creds(done) {
  const configPath = './config.json';
  try {
    CONFIG = JSON.parse(fs.readFileSync(configPath));
  } catch (e) {
    beep();
    console.log('[AWS] Sorry, there was an issue locating your config.json.'); // eslint-disable-line no-console
    process.exit();
  }
  done();
}

// Upload JS to AWS S3
function aws() {
  const publisher = CONFIG.aws ? $.awspublish.create(CONFIG.aws) : $.awspublish.create();
  const headers = {
    // "Cache-Control": "max-age=315360000, no-transform, public"
  };
  return (
    gulp
      .src('./dist/**/*')
      // publisher will add Content-Length, Content-Type and headers specified above
      // If not specified it will set x-amz-acl to public-read by default
      .pipe(publisher.publish(headers))
      // create a cache file to speed up consecutive uploads
      // .pipe(publisher.cache())

      // print upload updates to console
      .pipe($.awspublish.reporter())
  );
}
