battlefield-sourcemaps
================================

Fighting with multi-stage sourcemaps with power-assert.

[![Build Status][travis-image]][travis-url]


HOW TO FIGHT
--------------------

[strategy (Japanese)](https://gist.github.com/twada/103d34a3237cecd463a6)

 1. git clone
 2. npm install
 3. gulp help or grunt --help
 4. gulp [one of scenario] or grunt [one of scenario]
 5. gulp serve
 6. visit http://localhost:9001/build


STATUS
--------------------


### espowerify

[SourceMap transform chain by twada · Pull Request #4 · twada/espowerify](https://github.com/twada/espowerify/pull/4)

| language          | 1st transform | 2nd transform | output | Chrome | Firefox | note |
|:------------------|:--------------|:--------------|:-------|:-------|:--------|:-----|
| js                | espowerify    |               | OK     |        |         |      |
| coffee            | coffeeify     | espowerify    | OK     |        |         |      |
| js & coffee mixed | coffeeify     | espowerify    | OK     |        |         |      |
| ES6               | es6ify        | espowerify    | NG     |        |         | please use babelify and babel-plugin-espower instead |
| ES6               | babelify      | espowerify    | NG     |        |         | please use with babel-plugin-espower |
| ES6     | babelify (with babel-plugin-espower) |  | OK     |        |         |      |
| TypeScript(ts)    | tsify         | espowerify    | OK     |        |         |      |
| js & ts mixed     | tsify         | espowerify    | OK     |        |         |      |
| js & ts & coffee  | tsify, coffeeify | espowerify | OK     |        |         |      |

[espowerify 0.9.0 is now landed!](https://github.com/twada/espowerify/releases/tag/v0.9.0)


### gulp-espower

[gulp-sourcemaps support by twada · Pull Request #2 · twada/gulp-espower](https://github.com/twada/gulp-espower/pull/2)

| language     | 1st transform | 2nd transform | 3rd transform | output | Chrome | Firefox |
|:-------------|:--------------|:--------------|:--------------|:-------|:-------|:--------|
| JavaScript   | gulp-espower  |               |               | OK     | OK     | OK      |
| JavaScript   | gulp-concat   | gulp-espower  |               | OK     | OK     | OK      |
| JavaScript   | gulp-espower  | gulp-concat   |               | OK     | OK     | OK      |
| CoffeeScript | gulp-coffee   | gulp-espower  |               | OK     | OK     | OK      |
| CoffeeScript | gulp-coffee(with sourceRoot) | gulp-espower | | OK     | OK     | OK      |
| CoffeeScript | gulp-coffee   | gulp-concat   | gulp-espower  | OK     | OK     | OK      |
| CoffeeScript | gulp-coffee   | gulp-espower  | gulp-concat   | OK     | OK     | OK      |
| TypeScript   | gulp-tsc      | gulp-espower  |               | ERROR  | N/A    | N/A     |
| TypeScript   | gulp-tsc      | gulp-espower  | gulp-concat   | ERROR  | N/A    | N/A     |
| TypeScript   | gulp-type     | gulp-espower  |               | OK     | OK     | OK      |
| TypeScript   | gulp-type     | gulp-concat   | gulp-espower  | OK     | OK     | OK      |
| TypeScript   | gulp-type     | gulp-espower  | gulp-concat   | OK     | OK     | OK      |
| ES6  | gulp-babel (with babel-plugin-espower) | |            | OK     | OK     | OK      |

[gulp-espower 0.9.0 is now landed!](https://github.com/twada/gulp-espower/releases/tag/v0.9.0)


### grunt-espower

[support multistage sourcemap by vvakame · Pull Request #2 · twada/grunt-espower](https://github.com/twada/grunt-espower/pull/2)

| language     | 1st transform        | 2nd transform        | 3rd transform        | output | Chrome | Firefox |
|:-------------|:---------------------|:---------------------|:---------------------|:-------|:-------|:--------|
| JavaScript   | grunt-espower        |                      |                      | OK     | OK     | OK      |
| JavaScript   | grunt-espower        | grunt-contrib-concat |                      | OK     | OK     | OK      |
| JavaScript   | grunt-contrib-concat | grunt-espower        |                      | OK     | OK     | OK      |
| JavaScript   | grunt-contrib-concat(sourceMapStype:inline)| grunt-espower |       | OK     | OK     | OK      |
| CoffeeScript | grunt-contrib-coffee | grunt-espower        |                      | OK     | OK     | OK      |
| CoffeeScript | grunt-contrib-coffee | grunt-espower        | grunt-contrib-concat | OK     | OK     | OK      |
| CoffeeScript | grunt-contrib-coffee | grunt-contrib-concat | grunt-espower        | OK     | OK     | OK      |
| CoffeeScript | grunt-contrib-coffee | grunt-contrib-concat(sourceMapStype:inline)| grunt-espower| OK | OK | OK |
| TypeScript   | grunt-ts             | grunt-espower        |                      | OK     | OK     | OK      |
| TypeScript   | grunt-ts (with `out`)| grunt-espower        |                      | OK     | OK     | OK      |
| TypeScript   | grunt-ts             | grunt-espower        | grunt-contrib-concat | OK     | OK     | OK      |
| TypeScript   | grunt-ts             | grunt-contrib-concat | grunt-espower        | OK     | OK     | OK      |
| TypeScript   | grunt-ts             | grunt-contrib-concat(sourceMapStype:inline)| grunt-espower | OK | OK | OK |

[grunt-espower 0.9.0 is now landed!](https://github.com/twada/grunt-espower/releases/tag/v0.9.0)


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

- [browserify v2 adds source maps](http://thlorenz.com/blog/browserify-v2-adds-source-maps/)
- [jnordberg/coffeeify](https://github.com/jnordberg/coffeeify)
- [thlorenz/es6ify](https://github.com/thlorenz/es6ify)
- [babel/babelify](https://github.com/babel/babelify)
- [smrq/tsify](https://github.com/smrq/tsify)
- [Source maps not working with Firefox · Issue #681 · substack/node-browserify](https://github.com/substack/node-browserify/issues/681) -> use mold-source-map
- [gulp - Browserify source map only makes the root file accesible (caused by absolute path names) - Stack Overflow](http://stackoverflow.com/questions/25303585/browserify-source-map-only-makes-the-root-file-accesible-caused-by-absolute-pat) -> use mold-source-map

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


### grunt

- [gruntjs/grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
- [gruntjs/grunt-contrib-coffee](https://github.com/gruntjs/grunt-contrib-coffee)
- [grunt-ts/grunt-ts](https://github.com/grunt-ts/grunt-ts)


[travis-url]: http://travis-ci.org/twada/battlefield-sourcemaps
[travis-image]: https://secure.travis-ci.org/twada/battlefield-sourcemaps.svg?branch=master
