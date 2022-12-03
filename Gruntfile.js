module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    run: {
      //NOTE: Ensures the projects tests succeed
      test: {
        exec: 'npm run test'
      }
    }
  });

  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('default', ['run']);
};