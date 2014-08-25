battlefield-sourcemaps
================================

Fighting with multi-stage sourcemaps with power-assert.


HOW TO FIGHT
--------------------

[strategy (Japanese)](https://gist.github.com/twada/103d34a3237cecd463a6)

 1. git clone
 2. npm install (and npm link some cloned modules)
 3. gulp help
 4. gulp [one of scenario]
 5. gulp serve
 6. visit http://localhost:9001/build


STATUS
--------------------


### espowerify

[SourceMap transform chain by twada · Pull Request #4 · twada/espowerify](https://github.com/twada/espowerify/pull/4)

| scenario          | transform chain       | output | Chrome | Firefox |
|:------------------|:----------------------|:-------|:-------|:--------|
| single js         | espowerify            | OK     | OK     | OK      |
| multi js          | espowerify            | OK     | OK     | OK      |
| single coffee     | coffeeify, espowerify | OK     | OK     | OK      |
| multi coffee      | coffeeify, espowerify | OK     | OK     | OK      |
| coffee js mixture | coffeeify, espowerify | OK     | OK     | OK      |
| single ES6        | es6ify, espowerify    | OK     | OK     | OK      |

[espowerify 0.9.0 is now landed!](https://github.com/twada/espowerify/releases/tag/v0.9.0)


### gulp-espower

[\[WIP\] gulp-sourcemaps support by twada · Pull Request #2 · twada/gulp-espower](https://github.com/twada/gulp-espower/pull/2)

| scenario               | transform chain                                   | output | Chrome | Firefox |
|:-----------------------|:--------------------------------------------------|:-------|:-------|:--------|
| js                     | gulp-espower                                      | OK     | OK     |         |
| js concat(1)           | gulp-concat, gulp-espower                         | OK     | NG     |         |
| js concat(2)           | gulp-espower, gulp-concat                         | OK     | OK     | NG(absolute path) |
| js concat(3)           | gulp-concat-sourcemap, gulp-espower               |        |        |         |
| js concat(4)           | gulp-espower, gulp-concat-sourcemap               |        |        |         |
| coffee                 | gulp-coffee, gulp-espower                         | OK     | OK     |         |
| coffee with sourceRoot | gulp-coffee, gulp-espower                         | OK     | OK     | OK      |
| coffee concat(1)       | gulp-coffee, gulp-concat, gulp-espower            |        |        |         |
| coffee concat(2)       | gulp-coffee, gulp-espower, gulp-concat            | OK     | OK     | NG(absolute path) |
| coffee concat(3)       | gulp-coffee, gulp-concat-sourcemap, gulp-espower  |        |        |         |
| coffee concat(4)       | gulp-coffee, gulp-espower, gulp-concat-sourcemap  |        |        | NG(absolute path) |
| ts                     | gulp-tsc, gulp-espower                            | NG     |        |         |
| ts(2)                  | gulp-type, gulp-espower                           | OK     | OK     | OK      |
| ts concat(1)           | gulp-tsc, gulp-espower, gulp-concat               | NG     |        |         |
| ts concat(2)           | gulp-tsc(`out` option), gulp-espower, gulp-concat | NG     |        |         |
| ts concat(3)           | gulp-type, gulp-espower, gulp-concat              |        |        |         |
| ts concat(4)           | gulp-type, gulp-espower, gulp-concat-sourcemap    |        |        |         |


RELATED LINKS
--------------------

### general

- [power-assert 多段 SourceMap 対応の方針](https://gist.github.com/twada/103d34a3237cecd463a6)
- [Source Mapを扱う関連ライブラリのまとめ | Web Scratch](http://efcl.info/2014/0622/res3933/)
- [Compiling to JavaScript, and Debugging with Source Maps ✩ Mozilla Hacks – the Web developer blog](https://hacks.mozilla.org/2013/05/compiling-to-javascript-and-debugging-with-source-maps/)
- [mozilla/source-map](https://github.com/mozilla/source-map)
- [thlorenz/convert-source-map](https://github.com/thlorenz/convert-source-map)
- [azu/multi-stage-sourcemap](https://github.com/azu/multi-stage-sourcemap)
- [thlorenz/mold-source-map](https://github.com/thlorenz/mold-source-map)
- [evanw/node-source-map-support](https://github.com/evanw/node-source-map-support)
- [How to Enable Source Maps in Firefox? - CodeProject](http://www.codeproject.com/Articles/649271/How-to-Enable-Source-Maps-in-Firefox)

### browserify

- [browserify v2 adds source maps](http://thlorenz.com/blog/browserify-sourcemaps)
- [jnordberg/coffeeify](https://github.com/jnordberg/coffeeify)
- [thlorenz/es6ify](https://github.com/thlorenz/es6ify)
- [Source maps not working with Firefox · Issue #681 · substack/node-browserify](https://github.com/substack/node-browserify/issues/681) -> use mold-source-map


### gulp

- [Plugins with gulp sourcemaps support](https://github.com/floridoo/gulp-sourcemaps/wiki/Plugins-with-gulp-sourcemaps-support)
- [floridoo/gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)
- [floridoo/vinyl-sourcemaps-apply](https://github.com/floridoo/vinyl-sourcemaps-apply)
- [floridoo/concat-with-sourcemaps](https://github.com/floridoo/concat-with-sourcemaps)
- [wearefractal/gulp-concat](https://github.com/wearefractal/gulp-concat)
- [mikach/gulp-concat-sourcemap](https://github.com/mikach/gulp-concat-sourcemap)
- [wearefractal/gulp-coffee](https://github.com/wearefractal/gulp-coffee)
- [ivogabe/gulp-type](https://github.com/ivogabe/gulp-type)
- [kotas/gulp-tsc](https://github.com/kotas/gulp-tsc)
