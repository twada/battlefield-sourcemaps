var path = require('path');
var actualOutputPath = path.join(__dirname, '..', '..', 'actual.txt');
var diagramRenderingTest = require('./diagram-rendering');
var assertionLineNumberTest = require('./line-number');

describe('TypeScript power-assert output verification', function () {

    assertionLineNumberTest('TypeScript', actualOutputPath, [
            /\s*\#\s*(?:test\/(?:node|web)\/)?typescript_array_test.ts\:12$/,
            /\s*\#\s*(?:test\/(?:node|web)\/)?typescript_array_test.ts\:17$/,
            /\s*\#\s*(?:test\/(?:node|web)\/)?typescript_various_types_test.ts\:23$/
    ]);

    diagramRenderingTest('TypeScript', actualOutputPath, [

        // 1) TypeScript Array#length:
        '  assert(ary.length === fifteen)',
        '         |   |      |   |       ',
        '         |   |      |   15      ',
        '         |   16     false       ',
        '         [,,,,,,,,,,,,,,,"ahejrsberg"]',
        '  [number] fifteen',
        '  => 15',
        '  [number] ary.length',
        '  => 16',

        // 2) TypeScript Array#push:
        '  assert.deepEqual(ret, ary)',
        '                   |    |   ',
        '                   4    [1,2,3,4]',

        // 3) TS various types demo:
        '  assert.deepEqual(types[zero], bob)',
        '                   |    ||      |   ',
        '                   |    |0      Person{name:"bob",age:5}',
        '                   |    Person{name:"alice",age:3}',
        '                   [#Person#,"string",98.6,true,false,null,undefined,#Array#,#Object#,NaN,Infinity,/^not/]',
    ]);

});
