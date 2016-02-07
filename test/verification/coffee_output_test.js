var path = require('path');
var actualOutputPath = path.join(__dirname, '..', '..', 'actual.txt');
var diagramRenderingTest = require('./diagram-rendering');
var assertionLineNumberTest = require('./line-number');

describe('CoffeeScript power-assert output verification', function () {

    assertionLineNumberTest('Coffee', actualOutputPath, [
            /^\s*\#\s*(?:test\/(?:node|web)\/)?coffee_array_test.coffee\:17$/,
            /^\s*\#\s*(?:test\/(?:node|web)\/)?coffee_array_test.coffee\:22$/,
            /^\s*\#\s*(?:test\/(?:node|web)\/)?coffee_various_types_test.coffee\:32$/
    ]);

    diagramRenderingTest('Coffee', actualOutputPath, [

        // 1) Coffee Array#indexOf:
        '  assert.ok(this.ary.indexOf(nine) === seven)',
        '                 |   |       |     |   |     ',
        '                 |   |       |     |   7     ',
        '                 |   4       9     false     ',
        '                 [5,6,7,8,9,10]              ',
        '  [number] seven',
        '  => 7',
        '  [number] this.ary.indexOf(nine)',
        '  => 4',

        // 2) Coffee Array#concat:
        '  assert.deepEqual(this.ary.concat(another), expected)',
        '                        |   |      |         |        ',
        '                        |   |      |         [5,6,7,8,9]',
        '                        |   |      ["foo","bar"]      ',
        '                        |   [5,6,7,8,9,10,"foo","bar"]',
        '                        [5,6,7,8,9,10]                ',

        // 3) Coffee various types demo:
        '  assert(this.types[this.types.length - 3].age === bob.age)',
        '              |    |     |     |      |    |   |   |   |   ',
        '              |    |     |     |      |    |   |   |   5   ',
        '              |    |     |     |      |    |   |   Person{name:"bob",age:5}',
        '              |    |     |     12     9    3   false       ',
        '              |    |     ["string",98.6,true,false,#Array#,#Object#,NaN,Infinity,/^not/,#Person#,null,undefined]',
        '              |    Person{name:"alice",age:3}              ',
        '              ["string",98.6,true,false,#Array#,#Object#,NaN,Infinity,/^not/,#Person#,null,undefined]',
        '  [number] bob.age',
        '  => 5',
        '  [number] this.types[this.types.length - 3].age',
        '  => 3'
    ]);

});
