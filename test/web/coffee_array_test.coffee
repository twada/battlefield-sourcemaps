describe "Coffee Array#indexOf()", ->
  beforeEach ->
    @ary = [
      1
      2
      3
    ]

  it "should return index when the value is present", ->
    who = "ariya"
    two = 2
    assert @ary.indexOf(who) is two

  it "should return -1 when the value is not present", ->
    minusOne = -1
    two = 2
    assert.ok @ary.indexOf(two) is minusOne, "THIS IS\n AN ASSERTION\n MESSAGE"
