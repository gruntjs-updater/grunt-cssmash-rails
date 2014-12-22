/*
 * grunt-cssmash
 * https://github.com/jonahbron/grunt-cssmash
 *
 * Copyright (c) 2014 Jonah Dahlquist
 * Licensed under the MIT license.
 */

'use strict';

var cssmash = require('cssmash');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('cssmash', 'Mash CSS class names', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.linefeed);

      var result = cssmash(src);

      grunt.file.write(f.dest + '.map.json', JSON.stringify(result.map));
      // Write the destination file.
      grunt.file.write(f.dest, result.css);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
