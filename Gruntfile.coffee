module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      dist:
        files: 'public/js/hackleview.min.js': ['public/js/hackleview.js']

    concat:
      hackleview:
        src: ['src/ts/hackleview/**/*.js']
        dest: 'public/js/hackleview.js'

      greeting:
        src: ['src/ts/greeting/**/*.js']
        dest: 'public/js/greeting.js'

      options:
        separator: ';'

    copy:
      hbs:
        files: [{
          expand: true
          cwd: 'src/hbs'
          src: ['**/*.hbs']
          dest: 'public/hbs/'
        }]

      html:
        files: [{
          expand: true
          cwd: 'src/html'
          src: ['**/*.html']
          dest: 'public/'
        }]

      jquery:
        files: [{
          expand: true
          cwd: 'bower_components/jquery/dist/'
          src: ['jquery.min.js']
          dest: 'public/js/'
        }]

      handlebars:
        files: [{
          expand: true
          cwd: 'bower_components/handlebars/'
          src: ['handlebars.min.js']
          dest: 'public/js/'
        }]

    typescript:
      base:
        src: ['src/ts/**/*.ts', 'tests/**/*.ts']
        options:
          sourceMap: false

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      typescript:
        files: ['src/ts/**/*.ts', 'tests/**/*.ts']
        tasks: ['typescript', 'concat', 'uglify', 'clean', 'copy']
        options:
          atBegin: true

      css:
        files: ['src/scss/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true

      hbs:
        files: ['src/hbs/**/*.hbs']
        tasks: ['clean', 'copy:hbs']
        options:
          atBegin: true

      html:
        files: ['src/html/**/*.html']
        tasks: ['copy:html']
        options:
          atBegin: true

    clean: ['src/**/*.js', 'public/hbs/**/*.hbs']

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
  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.registerTask('default', ['typescript', 'concat', 'uglify', 'clean', 'copy', 'compass'])
  grunt.registerTask('server', ['connect'])
