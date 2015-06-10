var assert = require('assert');
var fs = require('fs');
var LineStream = require('lstream');
var trim = require('trim');
var find = require('array-find');

module.exports = function diagramRenderingTest (key, outputPath, outputPatterns) {

    it(key + ': diagram rendering', function (done) {
        var patterns = [].concat(outputPatterns).map(trim);
        var output = fs.createReadStream(outputPath, 'utf8');
        var matched = [];
        output.pipe(new LineStream())
            .on('data', function (line) {
                var foundIndex;
                var found = find(patterns, function (pattern, idx) {
                    foundIndex = idx;
                    // return line === pattern;
                    return trim(line) === pattern;
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
