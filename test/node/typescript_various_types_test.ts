///<reference path='../typing/mocha/mocha.d.ts' />
///<reference path='../typing/assert/assert.d.ts' />
// try without --noImplicitAny option

import assert = require("power-assert");

describe('TS various types', () => {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    it('demo', () => {
        var types = [
            new Person('alice', 3),
            'string', 98.6, true, false, null, undefined,
            ['nested', 'array'],
            {object: true},
            NaN, Infinity,
            /^not/
        ];
        var zero = 0,
            bob = new Person('bob', 5);
        assert.deepEqual(types[zero], bob);
    });
});
