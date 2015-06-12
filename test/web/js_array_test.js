// var assert = require('power-assert');

describe('配列のテスト', function () {
    beforeEach(function () {
        this.ary = [1,2,3];
    });
    it('should return index when the value is present', function () {
        // 日本語コメント
        var who = 'ariya', two = 2;
        assert(this.ary.indexOf(who) === two);
    });
    it('should return -1 when the value is not present', function () {
        var minusOne = -1, two = 2;
        assert.ok(this.ary.indexOf(two) === minusOne, "メッセージ");
    });
});
