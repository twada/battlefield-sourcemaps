var path = require('path');
var actualOutputPath = path.join(__dirname, '..', '..', 'actual.txt');
var diagramRenderingTest = require('./diagram-rendering');

describe('CoffeeScript power-assert output verification', function () {

    diagramRenderingTest('Coffee', actualOutputPath, [

        // Coffee Array#indexOf() should return index when the value is present:
        '      AssertionError:   # test/node/coffee_array_test.coffee:14',
        '  assert(this.ary.indexOf(who) === two)',
        '              |   |       |    |   |   ',
        '              |   |       |    |   2   ',
        '              |   |       |    false   ',
        '              |   -1      "jashkenas"  ',
        '              [5,6,7]                  ',
        '  [number] two',
        '  => 2',
        '  [number] this.ary.indexOf(who)',
        '  => -1',

        // Coffee Array#indexOf() should return -1 when the value is not present:
        '      AssertionError: THIS IS',
        ' AN ASSERTION',
        ' MESSAGE   # test/node/coffee_array_test.coffee:19',
        '  assert.ok(this.ary.indexOf(six) === minusOne, "THIS IS\\n AN ASSERTION\\n MESSAGE")',
        '                 |   |       |    |   |                                            ',
        '                 |   |       |    |   -1                                           ',
        '                 |   1       6    false                                            ',
        '                 [5,6,7]                                                           ',
        '  [number] minusOne',
        '  => -1',
        '  [number] this.ary.indexOf(six)',
        '  => 1',

        // Coffee various types demo:
        '      AssertionError:   # test/node/coffee_various_types_test.coffee:33',
        '  assert(this.types[index].name === bob.name)',
        '              |    ||      |    |   |   |    ',
        '              |    ||      |    |   |   "bob"',
        '              |    ||      |    |   Person{name:"bob",age:5}',
        '              |    ||      |    false        ',
        '              |    |11     "alice"           ',
        '              |    Person{name:"alice",age:3}',
        '              ["string",98.6,true,false,null,undefined,#Array#,#Object#,NaN,Infinity,/^not/,#Person#]',
        '  --- [string] bob.name',
        '  +++ [string] this.types[index].name',
        '  @@ -1,3 +1,5 @@',
        '  -bob',
        '  +alice'
    ]);

});
