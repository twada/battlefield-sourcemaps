///<reference path='../typing/mocha/mocha.d.ts' />
///<reference path='../typing/assert/assert.d.ts' />
// try without --noImplicitAny option

// import assert = require("power-assert");

describe('TypeScript', () => {
    it('Array#length', () => {
        var fifteen = 15;
        var ary = [];
        ary[fifteen] = 'ahejrsberg';
        assert(ary.length === fifteen);
    });
    it('Array#push', () => {
        var ary = [1,2,3];
        var ret = ary.push(4)
        assert.deepEqual(ret, ary);
    });
});
