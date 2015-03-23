module.exports = function (grunt) {

    "use strict";

    // this saves us having to load each plugin individually
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        watch: {
            icons: {
                files: "src/*.svg",
                tasks: "build"
            }
        },

        webfont: {
            dev: {
                src: "src/*.svg",
                dest: "build/",
                options: {
                    font: 'BlueBird-icons',
                    engine: "node",
                    hashes: false,
                    relativeFontPath: '/fonts/',
                    codepoints: {
                        'warning-circle-outline': 0xE000,
                        'warning-circle-solid':  0xE001,
                        'back':  0xE002,
                        'bb':  0xE003,
                        'close':  0xE004,
                        'comment':  0xE005,
                        'delete': 0xE006,
                        'edit': 0xE007,
                        'filter': 0xE008,
                        'folder':  0xE009,
                        'forward': 0xE00A,
                        'fullscreen': 0xE00B,
                        'list':  0xE00C,
                        'search': 0xE00D,
                        'sort': 0xE00E,
                        'tick-circle-outline': 0xE010,
                        'tick-circle-solid': 0xE011,
                        'tick': 0xE012,
                        'user': 0xE013,
                        'x-circle-outline':  0xE014,
                        'x-circle-solid':  0xE015,
                        'chevron': 0xE05C   
                    },
                }
            },
            
        },

        notify: {
            notify_hooks: {
                options: {
                    enabled: true,
                    max_jshint_notifications: 5,
                }
            },
            build: {
                options: {
                    title: "Is is a bird is it a plane",
                    message: "No its a BlueBird Font"
                }
            }
        }
    });

    // List of available tasks
    grunt.registerTask("default", []);
    grunt.registerTask("build", ["webfont", "notify:build"]);

};
