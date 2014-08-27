var extend = require('xtend/mutable'),
    path = require('path');

var gruntScenario = {
    grunt_espower: {
        test: {
            cwd: './test/web/',
            src: ['*_test.js']
        },
        html: './test/html/separated/test.html'
    }
};

function cleanTask (config, spec) {
    var cleanConfig = {};
    cleanConfig[spec.scenarioName] = spec.destDir;
    extend(config.clean, cleanConfig);
}

function copyTask (config, spec) {
    var copyConfig = {};
    copyConfig[spec.scenarioName] = {
        files: [
            {
                expand: true,  // Enable dynamic expansion.
                flatten: true, // flattens results to a single level
                src: [spec.scenario.html], // Actual pattern(s) to match.
                dest: spec.destDir // Destination path prefix.
            }
        ]
    };
    extend(config.copy, copyConfig);
}

function espowerTask (config, spec) {
    var espowerConfig = {};
    espowerConfig[spec.scenarioName] = {
        files: [
            {
                expand: true, // Enable dynamic expansion.
                cwd: spec.scenario.test.cwd, // Src matches are relative to this path.
                src: spec.scenario.test.src, // Actual pattern(s) to match.
                dest: spec.destDir, // Destination path prefix.
                ext: '.js' // Dest filepaths will have this extension.
            }
        ]
    };
    extend(config.espower, espowerConfig);
}

function mochaTask (config, spec) {
    var mochaConfig = {};
    mochaConfig[spec.scenarioName] = {
        src: [
            path.join(spec.destDir, path.basename(spec.scenario.html))
        ]
    };
    extend(config.mocha, mochaConfig);
}


module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-espower');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-ts');

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        clean: {},
        copy: {},
        espower: {},
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
        cleanTask(gruntConfig, spec);
        copyTask(gruntConfig, spec);
        espowerTask(gruntConfig, spec);
        mochaTask(gruntConfig, spec);
    });

    grunt.initConfig(gruntConfig);

    Object.keys(gruntScenario).forEach(function (scenarioName) {
        grunt.registerTask(scenarioName, [
            'clean:' + scenarioName,
            'copy:' + scenarioName,
            'espower:' + scenarioName,
            'mocha:' + scenarioName
        ]);
    });
};
