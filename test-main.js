var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;


function filter(file) {
  if (ptn) {
    if (file.indexOf(ptn) === -1) {
      return false;
    } else {
      return true;
    }
  } else {
    return file;
  }
}

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    console.log(ptn);
    console.log(file);
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    if (filter(file)) {
      allTestFiles.push(normalizedTestModule);
    }
  }
});

// console.log(allTestFiles);
// var tobetest = ["/base/test-dist/list-test.js"];
//
// requirejs.config({
//     baseUrl: '/base'
// });
//
// require([], function() {
//     // Configuration loaded now, safe to do other require calls
//     // that depend on that config.
//     require(tobetest, function(foo) {
//       console.log('done');
//       // window.__karma__.start();
//     });
// });
//


require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
