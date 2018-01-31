// System.config({
//   transpiler: 'plugin-babel',
//   paths: {
//     'app:': 'sites/all/modules/drugular/app/',
//     'npm:': 'sites/all/modules/drugular/app/node_modules/'
//   },
//   map: {
//     'core-js': 'npm:core-js',
//     'zone.js': 'npm:zone.js',
//     'tslib': 'npm:tslib/tslib.js',
//     'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
//     'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
//     '@angular': 'npm:@angular',
//   },
//   packages: {
//     'dist': {},
//     'systemjs': {},
//     'core-js': {},
//     'zone.js': {},
//   }
// });


/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    transpiler: 'plugin-babel',
    paths: {
      'app:': 'sites/all/modules/drugular/app/',
      'npm:': 'sites/all/modules/drugular/app/node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
      'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      '@angular-redux/store':      'npm:@angular-redux/store',
      'redux':                     'npm:redux',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      '@angular-redux/store': { main: 'lib/src/index.js', defaultExtension: 'js' },
      redux: { main: 'dist/redux.min.js', defaultExtension: 'js' },
    }
  });
})(this);
