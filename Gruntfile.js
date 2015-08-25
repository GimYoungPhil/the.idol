
module.exports = function(grunt) {

  grunt.initConfig({

    exec: {
      jasmine: {
        command: 'phantomjs run-jasmine.js SpecRunner.html'
      }
    },

    requirejs: {
      compile: {
        options: {
          mainConfigFile: 'src/RequireConfig.js',
          baseUrl: 'src',
          name: 'Boot',
          out: 'build/Boot.js'
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('build', ['exec:jasmine', 'requirejs'])
  grunt.registerTask('default', ['build']);
};
