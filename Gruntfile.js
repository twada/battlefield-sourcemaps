var path = require('path');
var TaskDef = require('./lib/task-def');

var gruntScenario = {
    grunt_espower: {
        espower: {
            files: [
                {
                    expand: true,
                    cwd: './test/web/',
                    src: ['*_test.js'],
                    dest: '<%= paths.grunt_espower.destDir %>',
                    ext: '.js'
                }
            ]
        },
        html: './test/grunt_html/separated/test.html',
        tasks: ['clean','copy','espower','mocha']
    },
    grunt_concat_espower: {
        concat: {
            src: './test/web/*_test.js',
            dest: '<%= paths.grunt_concat_espower.tmpDir %>/all_test.js'
        },
        espower: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.grunt_concat_espower.tmpDir %>',
                    src: 'all_test.js',
                    dest: '<%= paths.grunt_concat_espower.destDir %>',
                    ext: '.js'
                }
            ]
        },
        html: './test/grunt_html/concat/test.html',
        tasks: ['clean','copy','concat','espower','mocha']
    },
    grunt_espower_concat: {
        espower: {
            files: [
                {
                    expand: true,
                    cwd: './test/web/',
                    src: ['*_test.js'],
                    dest: '<%= paths.grunt_espower_concat.tmpDir %>',
                    ext: '.js'
                }
            ]
        },
        concat: {
            src: '<%= paths.grunt_espower_concat.tmpDir %>/*_test.js',
            dest: '<%= paths.grunt_espower_concat.destDir %>/all_test.js'
        },
        html: './test/grunt_html/concat/test.html',
        tasks: ['clean','copy','espower','concat','mocha']
    },
    grunt_concatinline_espower: {
        concat: {
            options: {
                sourceMap: true,
                sourceMapStyle: 'inline'
            },
            src: './test/web/*_test.js',
            dest: '<%= paths.grunt_concatinline_espower.tmpDir %>/all_test.js'
        },
        espower: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.grunt_concatinline_espower.tmpDir %>',
                    src: 'all_test.js',
                    dest: '<%= paths.grunt_concatinline_espower.destDir %>',
                    ext: '.js'
                }
            ]
        },
        html: './test/grunt_html/concat/test.html',
        tasks: ['clean','copy','concat','espower','mocha']
    },
    grunt_coffee_espower: {
        coffee: {
            files: [
                {
                    expand: true,
                    cwd: './test/web/',
                    src: ['*_test.coffee'],
                    dest: '<%= paths.grunt_coffee_espower.tmpDir %>/coffee',
                    ext: '.js'
                }
            ]
        },
        espower: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.grunt_coffee_espower.tmpDir %>/coffee',
                    src: ['*_test.js'],
                    dest: '<%= paths.grunt_coffee_espower.destDir %>',
                    ext: '.js'
                }
            ]
        },
        html: './test/grunt_html/separated_coffee/test.html',
        tasks: ['clean','copy','coffee','espower','mocha']
    },
    grunt_coffee_espower_concat: {
        coffee: {
            files: [
                {
                    expand: true,
                    cwd: './test/web/',
                    src: ['*_test.coffee'],
                    dest: '<%= paths.grunt_coffee_espower_concat.tmpDir %>/coffee',
                    ext: '.js'
                }
            ]
        },
        espower: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.grunt_coffee_espower_concat.tmpDir %>/coffee',
                    src: ['*_test.js'],
                    dest: '<%= paths.grunt_coffee_espower_concat.tmpDir %>/powered',
                    ext: '.js'
                }
            ]
        },
        concat: {
            src: '<%= paths.grunt_coffee_espower_concat.tmpDir %>/powered/*_test.js',
            dest: '<%= paths.grunt_coffee_espower_concat.destDir %>/all_test.js'
        },
        html: './test/grunt_html/concat/test.html',
        tasks: ['clean','copy','coffee','espower','concat','mocha']
    },
    grunt_coffee_concat_espower: {
        coffee: {
            files: [
                {
                    expand: true,
                    cwd: './test/web/',
                    src: ['*_test.coffee'],
                    dest: '<%= paths.grunt_coffee_concat_espower.tmpDir %>/coffee',
                    ext: '.js'
                }
            ]
        },
        concat: {
            src: '<%= paths.grunt_coffee_concat_espower.tmpDir %>/coffee/*_test.js',
            dest: '<%= paths.grunt_coffee_concat_espower.tmpDir %>/concat/all_test.js'
        },
        espower: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.grunt_coffee_concat_espower.tmpDir %>/concat',
                    src: 'all_test.js',
                    dest: '<%= paths.grunt_coffee_concat_espower.destDir %>',
                    ext: '.js'
                }
            ]
        },
        html: './test/grunt_html/concat/test.html',
        tasks: ['clean','copy','coffee','concat','espower','mocha']
    },
    grunt_coffee_concatinline_espower: {
        coffee: {
            files: [
                {
                    expand: true,
                    cwd: './test/web/',
                    src: ['*_test.coffee'],
                    dest: '<%= paths.grunt_coffee_concatinline_espower.tmpDir %>/coffee',
                    ext: '.js'
                }
            ]
        },
        concat: {
            options: {
                sourceMap: true,
                sourceMapStyle: 'inline'
            },
            src: '<%= paths.grunt_coffee_concatinline_espower.tmpDir %>/coffee/*_test.js',
            dest: '<%= paths.grunt_coffee_concatinline_espower.tmpDir %>/concat/all_test.js'
        },
        espower: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.grunt_coffee_concatinline_espower.tmpDir %>/concat',
                    src: 'all_test.js',
                    dest: '<%= paths.grunt_coffee_concatinline_espower.destDir %>',
                    ext: '.js'
                }
            ]
        },
        html: './test/grunt_html/concat/test.html',
        tasks: ['clean','copy','coffee','concat','espower','mocha']
    },
    grunt_ts_espower: {
        ts: {
            src: ['./test/web/*_test.ts'],
            outDir: '<%= paths.grunt_ts_espower.tmpDir %>/ts'
        },
        espower: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.grunt_ts_espower.tmpDir %>/ts',
                    src: ['*_test.js'],
                    dest: '<%= paths.grunt_ts_espower.destDir %>',
                    ext: '.js'
                }
            ]
        },
        html: './test/grunt_html/separated_ts/test.html',
        tasks: ['clean','copy','ts','espower','mocha']
    },
    grunt_tsout_espower: {
        ts: {
            src: ['./test/web/*_test.ts'],
            out: '<%= paths.grunt_tsout_espower.tmpDir %>/all_test.js'
        },
        espower: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.grunt_tsout_espower.tmpDir %>',
                    src: 'all_test.js',
                    dest: '<%= paths.grunt_tsout_espower.destDir %>',
                    ext: '.js'
                }
            ]
        },
        html: './test/grunt_html/concat/test.html',
        tasks: ['clean','copy','ts','espower','mocha']
    },
    grunt_ts_espower_concat: {
        ts: {
            src: ['./test/web/*_test.ts'],
            outDir: '<%= paths.grunt_ts_espower_concat.tmpDir %>/ts'
        },
        espower: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.grunt_ts_espower_concat.tmpDir %>/ts',
                    src: ['*_test.js'],
                    dest: '<%= paths.grunt_ts_espower_concat.tmpDir %>/powered',
                    ext: '.js'
                }
            ]
        },
        concat: {
            src: '<%= paths.grunt_ts_espower_concat.tmpDir %>/powered/*_test.js',
            dest: '<%= paths.grunt_ts_espower_concat.destDir %>/all_test.js'
        },
        html: './test/grunt_html/concat/test.html',
        tasks: ['clean','copy','ts','espower','concat','mocha']
    },
    grunt_ts_concat_espower: {
        ts: {
            src: ['./test/web/*_test.ts'],
            outDir: '<%= paths.grunt_ts_concat_espower.tmpDir %>/ts'
        },
        concat: {
            src: '<%= paths.grunt_ts_concat_espower.tmpDir %>/ts/*_test.js',
            dest: '<%= paths.grunt_ts_concat_espower.tmpDir %>/concat/all_test.js'
        },
        espower: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.grunt_ts_concat_espower.tmpDir %>/concat',
                    src: 'all_test.js',
                    dest: '<%= paths.grunt_ts_concat_espower.destDir %>',
                    ext: '.js'
                }
            ]
        },
        html: './test/grunt_html/concat/test.html',
        tasks: ['clean','copy','ts','concat','espower','mocha']
    },
    grunt_ts_concatinline_espower: {
        ts: {
            src: ['./test/web/*_test.ts'],
            outDir: '<%= paths.grunt_ts_concatinline_espower.tmpDir %>/ts'
        },
        concat: {
            options: {
                sourceMap: true,
                sourceMapStyle: 'inline'
            },
            src: '<%= paths.grunt_ts_concatinline_espower.tmpDir %>/ts/*_test.js',
            dest: '<%= paths.grunt_ts_concatinline_espower.tmpDir %>/concat/all_test.js'
        },
        espower: {
            files: [
                {
                    expand: true,
                    cwd: '<%= paths.grunt_ts_concatinline_espower.tmpDir %>/concat',
                    src: 'all_test.js',
                    dest: '<%= paths.grunt_ts_concatinline_espower.destDir %>',
                    ext: '.js'
                }
            ]
        },
        html: './test/grunt_html/concat/test.html',
        tasks: ['clean','copy','ts','concat','espower','mocha']
    }
};

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-espower');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-ts');

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        buildDirRoot: './build/grunt',
        tmpDirRoot: './tmp/grunt',
        paths: {},
        clean: {
            build: ['<%= buildDirRoot %>'],
            tmp: ['<%= tmpDirRoot %>']
        },
        concat: {
            options: {
                sourceMap: true
            }
        },
        copy: {},
        espower: {},
        ts: {
            options: {
                comments: true,
                target: 'es5',
                noImplicitAny: false,
                sourceMap: true
            }
        },
        coffee: {
            options: {
                sourceMap: true,
                bare: true
            }
        },
        mocha: {
            options: {
                log: false,
                logErrors: false,
                reporter: './lib/battle-field-reporter',
                run: true
            }
        }
    };

    Object.keys(gruntScenario).forEach(function (scenarioName) {
        var spec = {
            scenarioName: scenarioName,
            scenario: gruntScenario[scenarioName],
            destDir: path.join(gruntConfig.buildDirRoot, scenarioName),
            tmpDir: path.join(gruntConfig.tmpDirRoot, scenarioName)
        };
        gruntConfig.paths[scenarioName] = {
            destDir: spec.destDir,
            tmpDir: spec.tmpDir
        };
        var definition = new TaskDef(gruntConfig, spec);
        spec.scenario.tasks.forEach(function (name) {
            definition[name]();
        });
    });

    grunt.initConfig(gruntConfig);

    Object.keys(gruntScenario).forEach(function (scenarioName) {
        var scenario = gruntScenario[scenarioName];
        var taskNames = scenario.tasks.map(function (name) {
            return name + ':' + scenarioName;
        });
        grunt.registerTask(scenarioName, taskNames);
    });
};
