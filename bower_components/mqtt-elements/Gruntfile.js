/* global module:false */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'wct-test': {
            local: {
                options: {remote: false},
            },
            remote: {
                options: {remote: true},
            },
            chrome: {
                options: {browsers: ['chrome']},
            },
            firefox: {
                options: {browsers: ['firefox']},
            }
        },

        watch: {
            test: {
                files: ['test/*.html', 'test/*.js'],
                tasks: ['test']
            },
            html: {
                files: ['*.html'],
                tasks: ['test']
            }
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '..'
                }
            }
        }
    });

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // connect
    grunt.loadNpmTasks('grunt-contrib-connect');

    //load the wct grunt plugin
    grunt.loadNpmTasks('web-component-tester');

    // a task that builds the overall app
    grunt.registerTask('build', []);

    // define a serve task that will start a web server and watch for changes
    grunt.registerTask('serve', ['connect', 'watch']);

    // Default task(s).
    grunt.registerTask('default', ['build']);

    // define the test task to run wct tests
    grunt.registerTask('test', ['wct-test:chrome']);

};
