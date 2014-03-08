module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      dest:
        files: 'public/hackleview.min.js': ['public/hackleview.js']

    concat:
      dest:
        src: ['src/**/*.js']
        dest: 'public/hackleview.js'

      test:
        src: ['src/**/*.js', 'tests/**/*.js']
        dest: 'build/hackleview-spec.js'

      options:
        separator: ';'

    typescript:
      base:
        src: ['src/**/*.ts', 'tests/**/*.ts', 'public/**/*.ts']
        options:
          sourceMap: false

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      typescript:
        files: ['src/**/*.ts', 'tests/**/*.ts', 'public/**/*.ts']
        tasks: ['typescript', 'concat', 'uglify', 'clean']
        options:
          atBegin: true

      css:
        files: ['sass/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true

    clean: ['src/**/*.js', 'tests/**/*.js']

    connect:
      server:
        options:
          port: 8000
          base: 'public'
          keepalive: true

  })

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['typescript', 'concat', 'uglify', 'clean', 'compass'])
  grunt.registerTask('server', ['connect'])
