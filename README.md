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

| language          | 1st transform | 2nd transform | output | Chrome | Firefox |
|:------------------|:--------------|:--------------|:-------|:-------|:--------|
| JavaScript        | espowerify    |               | OK     | OK     | OK      |
| CoffeeScript      | coffeeify     | espowerify    | OK     | OK     | OK      |
| js & coffee mixed | coffeeify     | espowerify    | OK     | OK     | OK      |
| EcmaScript6       | es6ify        | espowerify    | OK     | OK     | OK      |
| TypeScript        | tsify         | espowerify    | OK     | OK     | OK      |

[espowerify 0.9.0 is now landed!](https://github.com/twada/espowerify/releases/tag/v0.9.0)


### gulp-espower

[\[WIP\] gulp-sourcemaps support by twada · Pull Request #2 · twada/gulp-espower](https://github.com/twada/gulp-espower/pull/2)

| language     | 1st transform | 2nd transform | 3rd transform | output | Chrome | Firefox |
|:-------------|:--------------|:--------------|:--------------|:-------|:-------|:--------|
| JavaScript   | gulp-espower  |               |               | OK     | OK     | OK      |
| JavaScript   | gulp-concat   | gulp-espower  |               | OK     | OK     | OK      |
| JavaScript   | gulp-espower  | gulp-concat   |               | OK     | OK     | OK      |
| CoffeeScript | gulp-coffee   | gulp-espower  |               | OK     | OK     | OK      |
| CoffeeScript | gulp-coffee   | gulp-espower  |               | OK     | OK     | OK      |
| CoffeeScript | gulp-coffee   | gulp-concat   | gulp-espower  |        |        |         |
| CoffeeScript | gulp-coffee   | gulp-espower  | gulp-concat   | OK     | OK     | NG(absolute path) |
| TypeScript   | gulp-tsc      | gulp-espower  |               | ERROR  | N/A    | N/A     |
| TypeScript   | gulp-tsc      | gulp-espower  | gulp-concat   | ERROR  | N/A    | N/A     |
| TypeScript   | gulp-type     | gulp-espower  |               | OK     | OK     | OK      |
| TypeScript   | gulp-type     | gulp-espower  | gulp-concat   | OK     | OK     | NG(absolute path) |
| TypeScript   | gulp-type     | gulp-concat   | gulp-espower  |        |        |         |



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
