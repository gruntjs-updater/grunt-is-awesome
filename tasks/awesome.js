/*
 * grunt-is-awesome
 * https://github.com/jogy/grunt-is-awesome
 *
 * Copyright (c) 2014 @_jogy_
 * Licensed under the MIT license.
 */

'use strict';

var jisa = require('javascript-is-awesome');

module.exports = function(grunt) {

  grunt.registerTask('awesome', 'Awesome feedback for node and grunt', function() {
      grunt.log.writeln(jisa());

  });

};
