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
| single ES6        | es6ify, espowerify    | NG     | NG      |
