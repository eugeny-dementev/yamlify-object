# yamlify-object

[![Build Status][travis-img]][travis-url]
[![Code Coverage][codecov-img]][codecov-url]

Default winston log levels with message:

![Levels color](/winston.png?raw=true "Types example")

It's look's like yaml \o/

![Meta object example](/log.png?raw=true "Types example")

This is custom config for default winston console transform.

```
  npm install yamlify-object
```

``` js
  var toYAML = require('yamlify-object');
  
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

  console.log(toYAML(obj));
```

[travis-img]: https://travis-ci.org/eugeny-dementev/yamlify-object.svg?branch=master
[travis-url]: https://travis-ci.org/eugeny-dementev/yamlify-object

[codecov-img]: https://codecov.io/github/eugeny-dementev/yamlify-object/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/eugeny-dementev/yamlify-object?branch=master
