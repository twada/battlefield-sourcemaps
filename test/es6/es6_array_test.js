var assert = require('power-assert');

describe('ES6 Array#indexOf()', function () {
    it('should return index when the value is present', () => {
        var ary = [1,2,3];
        var [who, two] = ['ariya', 2];
        assert(ary.indexOf(who) === two);
    });
    it('should return -1 when the value is not present', () => {
        var ary = [1,2,3];
        var [minusOne, two] = [-1, 2];
        assert.ok(ary.indexOf(two) === minusOne, "THIS IS\n AN ASSERTION\n MESSAGE");
    });
});
