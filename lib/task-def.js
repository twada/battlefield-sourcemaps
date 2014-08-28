var extend = require('xtend/mutable'),
    path = require('path');

function TaskDef (gruntConfig, spec) {
    this.config = gruntConfig;
    this.spec = spec;
}

TaskDef.prototype.clean = function () {
    var cleanConfig = {};
    cleanConfig[this.spec.scenarioName] = [
        this.spec.destDir,
        this.spec.tmpDir
    ];
    extend(this.config.clean, cleanConfig);
};

TaskDef.prototype.concat = function () {
    var concatConfig = {};
    concatConfig[this.spec.scenarioName] = extend({}, this.spec.scenario.concat);
    extend(this.config.concat, concatConfig);
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
    tsConfig[this.spec.scenarioName] = extend({}, this.spec.scenario.ts);
    extend(this.config.ts, tsConfig);
};

TaskDef.prototype.coffee = function () {
    var coffeeConfig = {};
    coffeeConfig[this.spec.scenarioName] = extend({}, this.spec.scenario.coffee);
    extend(this.config.coffee, coffeeConfig);
};

TaskDef.prototype.espower = function () {
    var espowerConfig = {};
    espowerConfig[this.spec.scenarioName] = extend({}, this.spec.scenario.espower);
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
