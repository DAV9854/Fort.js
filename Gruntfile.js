module.exports = function(grunt) {
 
  grunt.initConfig({
    jshint: {
			options: {
							 asi : true
},
      files: ['Gruntfile.js', 'demo/**/*.js', '*.js']
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', 'jshint');
 
};