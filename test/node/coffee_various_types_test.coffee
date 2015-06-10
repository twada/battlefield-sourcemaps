assert = require 'power-assert'

class Person
  constructor: (name, age) ->
    @name = name
    @age = age

describe "Coffee various types", ->
  beforeEach ->
    @types = [
      "string"
      98.6
      true
      false
      [
        "nested"
        "array"
      ]
      {
        object: true
      }
      NaN
      Infinity
      /^not/
      new Person("alice", 3)
      null
      `undefined`
    ]

  it "demo", ->
    bob = new Person("bob", 5)
    assert @types[@types.length - 3].age is bob.age
