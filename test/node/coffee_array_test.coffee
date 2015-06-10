assert = require 'power-assert'

describe "Coffee Array#indexOf()", ->
  beforeEach ->
    @ary = [
      5
      6
      7
    ]

  it "should return index when the value is present", ->
    who = "jashkenas"
    two = 2
    assert @ary.indexOf(who) is two

  it "should return -1 when the value is not present", ->
    minusOne = -1
    six = 6
    assert.ok @ary.indexOf(six) is minusOne, "THIS IS\n AN ASSERTION\n MESSAGE"
