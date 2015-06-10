var path = require('path');
var actualOutputPath = path.join(__dirname, '..', '..', 'actual.txt');
var diagramRenderingTest = require('./diagram-rendering');

describe('TypeScript power-assert output verification', function () {

    diagramRenderingTest('TypeScript', actualOutputPath, [

        // 1) TypeScript Array#length:
        '      AssertionError:   # test/node/typescript_array_test.ts:12',
        '  assert(ary.length === fifteen)',
        '         |   |      |   |       ',
        '         |   |      |   15      ',
        '         |   16     false       ',
        '         ["ahejrsberg"]         ',
        '  [number] fifteen',
        '  => 15',
        '  [number] ary.length',
        '  => 16',

        // 2) TypeScript Array#push:
        '     AssertionError:   # test/node/typescript_array_test.ts:17',
        '  assert.deepEqual(ret, ary)',
        '                   |    |   ',
        '                   4    [1,2,3,4]',

        // 3) TS various types demo:
        '      AssertionError:   # test/node/typescript_various_types_test.ts:23',
        '  assert.deepEqual(types[zero], bob)',
        '                   |    ||      |   ',
        '                   |    |0      Person{name:"bob",age:5}',
        '                   |    Person{name:"alice",age:3}',
        '                   [#Person#,"string",98.6,true,false,null,undefined,#Array#,#Object#,NaN,Infinity,/^not/]',
    ]);

});
