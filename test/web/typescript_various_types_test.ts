// try without --noImplicitAny option

declare var describe: any;
declare var it: any;
declare var beforeEach: any;
declare var assert: any;

describe('JS various types', () => {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    beforeEach(() => {
        this.types = [
            'string', 98.6, true, false, null, undefined,
            ['nested', 'array'],
            {object: true},
            NaN, Infinity,
            /^not/,
            new Person('alice', 3)
        ];
    });
    it('demo', () => {
        var index = this.types.length -1,
            bob = new Person('bob', 5);
        assert(this.types[index].name === bob.name);
    });
});