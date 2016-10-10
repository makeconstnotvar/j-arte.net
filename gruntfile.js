var config = require('./grunt/config'),
    tasks = require('./grunt/tasks'),
    loader = require('load-grunt-tasks');

module.exports = function (grunt) {
    loader(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean:  tasks.clean,
        concat:  tasks.concat,
        copy:  tasks.copy,
        cssmin:  tasks.cssmin,
        dirs: tasks.dirs,
        html2js:  tasks.html2js,
        htmlmin:  tasks.htmlmin,
        imagemin:  tasks.imagemin,
        sass:  tasks.sass,
        injector:  tasks.injector,
        uglify:  tasks.uglify,
        watch:tasks.watch
    });

    grunt.registerTask('build-debug', config.debug);
    grunt.registerTask('build-release', config.release);
};