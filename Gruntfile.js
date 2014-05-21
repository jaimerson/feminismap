module.exports = function(grunt){
  grunt.initConfig({
    connect: {
      target: 'http://localhost:8000'
    },
    watch: {
      files: '**/*',
      tasks: [],
      options: {
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
}
