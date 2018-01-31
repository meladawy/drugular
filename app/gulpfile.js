// grab our gulp packages
/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
var Builder = require('systemjs-builder');
var builder = new Builder('./');
    

// create a default task and just log a message
gulp.task('default', ['bundle-rx']);

gulp.task('bundle-rx', function() {

    // SystemJS build options.
      var options = {
        normalize: true,
        runtime: false,
        sourceMaps: true,
        sourceMapContents: true,
        minify: true,
        mangle: true
      };
      builder.config({
        paths: {
          "npm:*": "./node_modules/*",
          "rxjs/*": "node_modules/rxjs/*.js",
          "node_modules*": "node_modules/*"
        },
        map: {
          "rxjs": "npm:rxjs",
          '@angular': 'node_modules/@angular',
          '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        },
        packages: {
            "rxjs": {main: "Rx.js", defaultExtension: "js"},
            '@angular/common': { main: 'index.js', defaultExtension: 'js' },
            '@angular/compiler': { main: 'index.js', defaultExtension: 'js' },
            '@angular/core': { main: 'index.js', defaultExtension: 'js' },
            '@angular/http': { main: 'index.js', defaultExtension: 'js' },
            '@angular/platform-browser': { main: 'index.js', defaultExtension: 'js' },
            '@angular/platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js' },
            '@angular/router': { main: 'index.js', defaultExtension: 'js' },
            '@angular/router-deprecated': { main: 'index.js', defaultExtension: 'js' },
            '@angular/testing': { main: 'index.js', defaultExtension: 'js' },
            '@angular/upgrade': { main: 'index.js', defaultExtension: 'js' }
        }
      });
    
      builder.bundle('rxjs', './dist/bundles/test.js', options)
    });
    

// gulp.task('build-vendor', function() {
//     var concat = require("gulp-concat");

//     gulp.src([
//         'node_modules/core-js/client/shim.min.js',
//         'node_modules/zone.js/dist/zone.js',
//         'node_modules/reflect-metadata/Reflect.js',
//         'node_modules/systemjs/dist/system.src.js'
//       ])
//       .pipe(uglify())
//       .pipe(concat("vendor.min.js"))
//       .pipe(gulp.dest("./dist/bundles"))
//     });

// '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
// '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
// '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
// '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
// '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
