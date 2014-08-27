var extend = require('xtend/mutable'),
    path = require('path');

function TaskDef (gruntConfig, spec) {
    this.config = gruntConfig;
    this.spec = spec;
}

TaskDef.prototype.clean = function () {
    var cleanConfig = {};
    cleanConfig[this.spec.scenarioName] = this.spec.destDir;
    extend(this.config.clean, cleanConfig);
};

TaskDef.prototype.copy = function () {
    var copyConfig = {};
    copyConfig[this.spec.scenarioName] = {
        files: [
            {
                expand: true,  // Enable dynamic expansion.
                flatten: true, // flattens results to a single level
                src: [this.spec.scenario.html], // Actual pattern(s) to match.
                dest: this.spec.destDir // Destination path prefix.
            }
        ]
    };
    extend(this.config.copy, copyConfig);
};

TaskDef.prototype.ts = function () {
    var tsConfig = {};
    tsConfig[this.spec.scenarioName] = {
        src: this.spec.scenario.ts.src, // Actual pattern(s) to match.
        outDir: this.spec.scenario.ts.dest // Destination path prefix.
    };
    extend(this.config.ts, tsConfig);
};

TaskDef.prototype.coffee = function () {
    var coffeeConfig = {};
    coffeeConfig[this.spec.scenarioName] = {
        files: [
            {
                expand: true, // Enable dynamic expansion.
                cwd: this.spec.scenario.coffee.cwd, // Src matches are relative to this path.
                src: this.spec.scenario.coffee.src, // Actual pattern(s) to match.
                dest: this.spec.scenario.coffee.dest, // Destination path prefix.
                ext: '.js' // Dest filepaths will have this extension.
            }
        ]
    };
    extend(this.config.coffee, coffeeConfig);
};

TaskDef.prototype.espower = function () {
    var espowerConfig = {};
    espowerConfig[this.spec.scenarioName] = {
        files: [
            {
                expand: true, // Enable dynamic expansion.
                cwd: this.spec.scenario.espower.cwd, // Src matches are relative to this path.
                src: this.spec.scenario.espower.src, // Actual pattern(s) to match.
                dest: this.spec.scenario.espower.dest, // Destination path prefix.
                ext: '.js' // Dest filepaths will have this extension.
            }
        ]
    };
    extend(this.config.espower, espowerConfig);
};

TaskDef.prototype.mocha = function () {
    var mochaConfig = {};
    mochaConfig[this.spec.scenarioName] = {
        src: [
            path.join(this.spec.destDir, path.basename(this.spec.scenario.html))
        ]
    };
    extend(this.config.mocha, mochaConfig);
};

module.exports = TaskDef;
