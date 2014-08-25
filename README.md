battlefield-sourcemaps
================================

Fighting with multi stage sourcemaps with power-assert.


espowerify
--------------------

[\[WIP\] SourceMap transform chain by twada · Pull Request #4 · twada/espowerify](https://github.com/twada/espowerify/pull/4)

| scenario          | transform chain       | output | Chrome | Firefox |
|:------------------|:----------------------|:-------|:-------|:--------|
| single js         | espowerify            | OK     | OK     | OK      |
| multi js          | espowerify            | OK     | OK     | OK      |
| single coffee     | coffeeify, espowerify | OK     | OK     | OK      |
| multi coffee      | coffeeify, espowerify | OK     | OK     | OK      |
| coffee js mixture | coffeeify, espowerify | OK     | OK     | OK      |
| single ES6        | es6ify, espowerify    | OK     | OK     | OK      |


gulp-espower
--------------------

[\[WIP\] gulp-sourcemaps support by twada · Pull Request #2 · twada/gulp-espower](https://github.com/twada/gulp-espower/pull/2)

| scenario                     | transform chain                        | output | Chrome | Firefox |
|:-----------------------------|:---------------------------------------|:-------|:-------|:--------|
| multi js                     | gulp-espower                           | OK     | OK     |         |
| multi js concat              | gulp-concat, gulp-espower              | OK     | NG     |         |
| multi js concat(2)           | gulp-espower, gulp-concat              | OK     | OK     | NG(absolute path) |
| multi coffee                 | gulp-coffee, gulp-espower              | OK     | OK     |         |
| multi coffee with sourceRoot | gulp-coffee, gulp-espower              | OK     | OK     | OK      |
| multi coffee concat          | gulp-coffee, gulp-concat, gulp-espower |        |        |         |
| multi coffee concat(2)       | gulp-coffee, gulp-espower, gulp-concat | OK     | OK     | NG(absolute path) |

