var assert = require('assert');
var fs = require('fs');
var LineStream = require('lstream');
var trim = require('trim');
var find = require('array-find');

module.exports = function assertionLineNumberTest (key, outputPath, outputPatterns) {

    it(key + ': assertion line number', function (done) {
        var patterns = [].concat(outputPatterns);
        var output = fs.createReadStream(outputPath, 'utf8');
        var matched = [];
        output.pipe(new LineStream())
            .on('data', function (line) {
                var found = find(patterns, function (pattern, idx) {
                    return pattern.test(line);
                });
                if (found) {
                    matched.push(found);
                }
            })
            .on('end', function (err) {
                assert.deepEqual(patterns, matched);
                assert(!err);
                done();
            });
    });

};
