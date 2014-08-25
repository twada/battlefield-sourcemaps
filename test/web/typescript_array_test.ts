// try without --noImplicitAny option

declare var describe: any;
declare var it: any;
declare var beforeEach: any;
declare var assert: any;

describe('TS Array#indexOf()', () => {
    it('should return index when the value is present', () => {
        var ary = [1,2,3];
        var who = 'ariya', two = 2;
        assert(ary.indexOf(who) === two);
    });
    it('should return -1 when the value is not present', () => {
        var ary = [1,2,3];
        var minusOne = -1, two = 2;
        assert.ok(ary.indexOf(two) === minusOne, "THIS IS\n AN ASSERTION\n MESSAGE");
    });
});
