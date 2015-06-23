var Base = require('mocha/lib/reporters/base');
var util = require('util');

function BattleFieldReporter (runner) {
    Base.call(this, runner);
    var self = this;
    Base.useColors = false;
    runner.on('end', function () {
        console.log();
        var oldError = console.error;
        console.error = console.log;
        self.epilogue();
        console.error = oldError;
    });
}
util.inherits(BattleFieldReporter, Base);

exports = module.exports = BattleFieldReporter;
