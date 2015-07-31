"use strict";

var runner = require("qunit");
var path = require("path");

function abspath(p) {
  return path.join(__dirname, p)
}

runner.options.log = {
    // log assertions overview
    assertions: true,
    // log expected and actual values for failed tests
    // errors: true,
    // log tests overview
    // tests: true,
    // log summary
    // summary: true,
    // log global summary (all files)
    globalSummary: true,
    // log coverage
    // coverage: true,
    // log global coverage (all files)
    // globalCoverage: true,
    // log currently testing code file
    testing: true
};

runner.run({
    code : {path: abspath("../index.js"), namespace: 'asyncForEach'},
    tests : abspath("test.js")
});