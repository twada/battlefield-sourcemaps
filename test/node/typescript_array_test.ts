///<reference path='../typing/mocha/mocha.d.ts' />
///<reference path='../typing/assert/assert.d.ts' />
// try without --noImplicitAny option

import assert = require("power-assert");

describe('TS Array#indexOf()', () => {
    it('should return index when the value is present', () => {
        var ary = [1,2,3];
        var who:any = 'ariya', two = 2;
        assert.ok(ary.indexOf(who) === two);
    });
    it('should return -1 when the value is not present', () => {
        var ary = [1,2,3];
        var minusOne = -1, two = 2;
        assert.ok(ary.indexOf(two) === minusOne, "THIS IS\n AN ASSERTION\n MESSAGE");
    });
});
