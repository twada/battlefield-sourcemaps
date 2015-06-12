var path = require('path');
var actualOutputPath = path.join(__dirname, '..', '..', 'actual.txt');
var diagramRenderingTest = require('./diagram-rendering');
var assertionLineNumberTest = require('./line-number');

describe('JS power-assert output verification', function () {

    assertionLineNumberTest('JS', actualOutputPath, [
        '      AssertionError:   # test/node/js_array_test.js:10',
        '      AssertionError: メッセージ   # test/node/js_array_test.js:14',
        '      AssertionError:   # test/node/js_various_types_test.js:22',
    ]);

    diagramRenderingTest('JS', actualOutputPath, [
        // 配列のテスト should return index when the value is present:
        '  assert(this.ary.indexOf(who) === two)',
        '              |   |       |    |   |   ',
        '              |   |       |    |   2   ',
        '              |   |       |    false   ',
        '              |   -1      "ariya"      ',
        '              [1,2,3]                  ',
        '  [number] two',
        '  => 2',
        '  [number] this.ary.indexOf(who)',
        '  => -1',

        // 配列のテスト should return -1 when the value is not present:
        '  assert.ok(this.ary.indexOf(two) === minusOne, "メッセージ")',
        '                 |   |       |    |   |                      ',
        '                 |   |       |    |   -1                     ',
        '                 |   1       2    false                      ',
        '                 [1,2,3]                                     ',
        '  [number] minusOne',
        '  => -1',
        '  [number] this.ary.indexOf(two)',
        '  => 1',

        // いろいろな型を試す demo
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
