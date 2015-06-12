var path = require('path');
var actualOutputPath = path.join(__dirname, '..', '..', 'actual.txt');
var diagramRenderingTest = require('./diagram-rendering');
var assertionLineNumberTest = require('./line-number');

describe('ES6 power-assert output verification', function () {

    assertionLineNumberTest('ES6', actualOutputPath, [
            /^\s*AssertionError:\s*\#\s*(?:test\/es6\/)?arrowfunction_and_spread_test.js\:7$/,
            /^\s*AssertionError:\s*\#\s*(?:test\/es6\/)?destructuring_and_templateliteral_test.js\:7$/,
            /^\s*AssertionError:\s*\#\s*(?:test\/es6\/)?enhanced_object_literal_test.js\:7$/
    ]);

    diagramRenderingTest('ES6', actualOutputPath, [

        // ES6 demo 1 ArrowFunctionExpression and SpreadElement:
        '  assert(seven === ((v, i) => v + i)(...[...ary]))',
        '         |     |   |                    |   |     ',
        '         |     |   |                    |   [4,5] ',
        '         |     |   9                    [4,5]     ',
        '         7     false                              ',
        '  [number] ((v, i) => v + i)(...[...ary])',
        '  => 9',
        '  [number] seven',
        '  => 7',

        // ES6 demo 2 Destructuring and TemplateLiteral:
        '  assert(`${ alice.name } and ${ bob.name }` === `bob and alice`)',
        '         |   |     |             |   |       |   |               ',
        '         |   |     |             |   |       |   "bob and alice" ',
        '         |   |     |             |   "bob"   false               ',
        '         |   |     "alice"       Object{name:"bob"}              ',
        '         |   Object{name:"alice"}                                ',
        '         "alice and bob"                                         ',
        '  --- [string] `bob and alice`',
        '  +++ [string] `${ alice.name } and ${ bob.name }`',
        '  @@ -1,13 +1,13 @@',
        '  -bob and alice',
        '  +alice and bob',

        // ES6 demo 3 Enhanced Object Literals:
        '  assert.deepEqual({name,[`${ name }\'s greet`]: `Hello, I\'m ${ name }`}, null)',
        '                   |      |   |                 |              |              ',
        '                   |      |   |                 |              "bobby"        ',
        '                   |      |   "bobby"           "Hello, I\'m bobby"            ',
        '                   |      "bobby\'s greet"                                     ',
        '                   Object{name:"bobby","bobby\'s greet":"Hello, I\'m bobby"}    '
    ]);

});
