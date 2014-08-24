battlefield-sourcemaps
================================

Fighting with sourcemaps.


espowerify
--------------------

| scenario          | transform chain       | Chrome | Firefox |
|:------------------|:----------------------|:-------|:--------|
| single js         | espowerify            | OK     | OK      |
| multi js          | espowerify            | OK     | OK      |
| single coffee     | coffeeify, espowerify | OK     | OK      |
| multi coffee      | coffeeify, espowerify | OK     | OK      |
| coffee js mixture | coffeeify, espowerify | OK     | OK      |
| single ES6        | es6ify, espowerify    | OK     | OK      |

gulp-espower
--------------------

| scenario               | transform chain                        | Chromer | Firefox |
|:-----------------------|:---------------------------------------|:--------|:--------|
| multi js               | gulp-espower                           | OK      |         |
| multi js concat        | gulp-concat, gulp-espower              | NG      |         |
| multi js concat(2)     | gulp-espower, gulp-concat              | OK      |         |
| multi coffee           | gulp-coffee, gulp-espower              | NG      |         |
| multi coffee concat    | gulp-coffee, gulp-concat, gulp-espower |         |         |
| multi coffee concat(2) | gulp-coffee, gulp-espower, gulp-concat |         |         |

