battlefield-sourcemaps
================================

Fighting with sourcemaps.


espowerify
--------------------

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

| scenario                     | transform chain                        | output | Chrome | Firefox |
|:-----------------------------|:---------------------------------------|:-------|:-------|:--------|
| multi js                     | gulp-espower                           | OK     | OK     |         |
| multi js concat              | gulp-concat, gulp-espower              | OK     | NG     |         |
| multi js concat(2)           | gulp-espower, gulp-concat              | OK     | OK     |         |
| multi coffee                 | gulp-coffee, gulp-espower              | OK     | OK     |         |
| multi coffee with sourceRoot | gulp-coffee, gulp-espower              | OK     | OK     | OK      |
| multi coffee concat          | gulp-coffee, gulp-concat, gulp-espower |        |        |         |
| multi coffee concat(2)       | gulp-coffee, gulp-espower, gulp-concat | OK     | OK     | NG      |

