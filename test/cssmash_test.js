'use strict';

var grunt = require('grunt'),
    cssmash = require('cssmash');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.cssmash = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'class names should be mapped');

    actual = grunt.file.read('config/locales/cssmash.yml');
    expected = grunt.file.read('test/expected/default_options_map');
    test.equal(actual, expected, 'map file should be valid');

    test.done();
  },

  custom_options: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/custom_options');
    var expected = grunt.file.read('test/expected/custom_options');
    test.equal(actual, expected, 'class names should be mapped');

    actual = grunt.file.read('tmp/test.yml');
    expected = grunt.file.read('test/expected/custom_options_map');
    test.equal(actual, expected, 'map file should be valid');

    test.done();
  }
};
