var assert = require('power-assert');

describe('JS various types', function(){
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    beforeEach(function(){
        this.types = [
            'string', 98.6, true, false, null, undefined,
            ['nested', 'array'],
            {object: true},
            NaN, Infinity,
            /^not/,
            new Person('alice', 3)
        ];
    });
    it('demo', function(){
        var index = this.types.length -1,
            bob = new Person('bob', 5);
        assert(this.types[index].name === bob.name);
    });
});
