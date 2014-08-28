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
        html: './test/html/separated/test.html',
        tasks: ['clean','copy','espower','mocha']
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
        html: './test/html/separated_coffee/test.html',
        tasks: ['clean','copy','coffee','espower','mocha']
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
        html: './test/html/separated_ts/test.html',
        tasks: ['clean','copy','ts','espower','mocha']
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
        paths: {},
        clean: {},
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
                run: true
            }
        }
    };

    Object.keys(gruntScenario).forEach(function (scenarioName) {
        var spec = {
            scenarioName: scenarioName,
            scenario: gruntScenario[scenarioName],
            destDir: './build/grunt/' + scenarioName
        };
        gruntConfig.paths[scenarioName] = {
            destDir: spec.destDir,
            tmpDir: './tmp/grunt/' + scenarioName
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
