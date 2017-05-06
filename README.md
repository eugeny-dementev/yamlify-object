# yamlify-object

[![Build Status][travis-img]][travis-url]
[![Code Coverage][codecov-img]][codecov-url]

```
  npm install yamlify-object
```

``` js
  const yamlifyObject = require('yamlify-object');
  
  const obj = {
    array: [
      2,
      'two',
      {
        emptyArray: [],
      },
    ],
    object: {
      number: 200,
      bool: false,
      null: null,
      undefined: undefined,
    },
  };

  console.log(yamlifyObject(obj));
```

[travis-img]: https://travis-ci.org/eugeny-dementev/yamlify-object.svg?branch=master
[travis-url]: https://travis-ci.org/eugeny-dementev/yamlify-object

[codecov-img]: https://codecov.io/github/eugeny-dementev/yamlify-object/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/eugeny-dementev/yamlify-object?branch=master
