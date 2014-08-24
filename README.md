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
| single js              | gulp-espower                           |         |         |
| multi js               | gulp-espower                           |         |         |
| multi js concat        | gulp-concat, gulp-espower              |         |         |
| multi js concat(2)     | gulp-espower, gulp-concat              |         |         |
| single coffee          | gulp-coffee, gulp-espower              |         |         |
| multi coffee           | gulp-coffee, gulp-espower              |         |         |
| multi coffee concat    | gulp-coffee, gulp-concat, gulp-espower |         |         |
| multi coffee concat(2) | gulp-coffee, gulp-espower, gulp-concat |         |         |

