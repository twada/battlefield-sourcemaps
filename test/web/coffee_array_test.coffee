# assert = require 'power-assert'

describe "Coffee", ->
  beforeEach ->
    @ary = [
      5
      6
      7
      8
      9
      10
    ]

  it "Array#indexOf", ->
    nine = 9
    seven = 7
    assert.ok @ary.indexOf(nine) is seven

  it "Array#concat", ->
    another = ['foo', 'bar']
    expected = [5, 6, 7, 8, 9]
    assert.deepEqual @ary.concat(another), expected
