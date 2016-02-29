// Karma configuration
// Generated on Mon Feb 22 2016 09:36:41 GMT+0800 (中国标准时间)

var fs = require('fs');

module.exports = function(config) {
  if (!process.env.SAUCE_USERNAME) {
    if (!fs.existsSync('saucelabs.json')) {
      console.log('Create a saucelabs.json with your credentials based on the sauce-sample.json file.');
      process.exit(1);
    } else {
      process.env.SAUCE_USERNAME = require('./saucelabs').username;
      process.env.SAUCE_ACCESS_KEY = require('./saucelabs').accessKey;
    }
  }
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
    process.exit(1);
  }

  var customLaunchers = {
    'SL_Chrome': {
      base: 'SauceLabs',
      platform: 'OS X 10.11',
      browserName: 'chrome',
      customData: {
        awesome: true
      }
    },
   'SL_W7_IE8': {
      base: 'SauceLabs',
      platform: 'Windows 7',
      browserName: 'internet explorer',
      version: '8'
    },
   'SL_W7_IE9': {
      base: 'SauceLabs',
      platform: 'Windows 7',
      browserName: 'internet explorer',
      version: '9'
    },
   'SL_W7_IE10': {
      base: 'SauceLabs',
      platform: 'Windows 7',
      browserName: 'internet explorer',
      version: '10'
    },

    'SL_Firefox': {
      base: 'SauceLabs',
      platform: 'OS X 10.11',
      browserName: 'firefox'
    },
    'SL_Edge': {
      base: 'SauceLabs',
      platform: 'Windows 10',
      browserName: 'microsoftedge'
    }
  };
  // console.log(config);
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // {pattern: 'src-dist', included: false},,'requirejs'
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/requirejs/require.js', {
        pattern: 'fixtures/**/*.js',
        included: false //,
          // watched: false
      },
      'node_modules/karma-requirejs/lib/adapter.js', {
        pattern: 'src/**/*.js',
        included: false //,
          // watched: false
      }, {
        pattern: 'test/**/*.js',
        included: false //,
          // watched: false
      },
      '_tptn.js',
      'test-main.js' //watched default.
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/**/*.js": ["babel"],
      "test/**/*.js": ["babel"],
      "fixtures/**/*.js": ["babel"]
    },
    babelPreprocessor: {
      options: {
        // presets: ['es2015'],
        // plugins: ["transform-es2015-modules-amd"],
        sourceMap: 'inline'
      } //,
      // filename: function (file) {
      //   // console.log(file);
      //   return file.originalPath.replace(/\.js$/, '.es5.js');
      //   // return file.originalPath;
      // },
      // sourceFileName: function (file) {
      //   // console.log(file + "1");
      //   return file.originalPath;
      // }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress'],
    reporters: ['progress', 'saucelabs'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    sauceLabs: {
      testName: 'json-converter sauceLabs test.',
      recordScreenshots: false,
      connectOptions: {
        port: 5757,
        logfile: 'sauce_connect.log'
      },
      public: 'public'
    },

    captureTimeout: 120000,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    singleRun: true,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['PhantomJS', 'Chrome'],
    // browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
