// try without --noImplicitAny option

declare var describe: any;
declare var it: any;
declare var beforeEach: any;
declare var assert: any;

describe('JS Array#indexOf()', () => {
    beforeEach(() => {
        this.ary = [1,2,3];
    });
    it('should return index when the value is present', () => {
        var who = 'ariya', two = 2;
        assert(this.ary.indexOf(who) === two);
    });
    it('should return -1 when the value is not present', () => {
        var minusOne = -1, two = 2;
        assert.ok(this.ary.indexOf(two) === minusOne, "THIS IS\n AN ASSERTION\n MESSAGE");
    });
});
