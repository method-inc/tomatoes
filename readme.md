# Module Name

Summary of its purpose.

- Bullet points for clarity
- Of how it works or why you might use it

## Installation

```
  $ npm install moduleName
```

## Tests

```
  $ make test
```

## Use

```js

var tomatoes = require('tomatoes');

tomatoes.search('Batman Begins', function(err, movies) {
  // movies: an Array of Objects with movie metadata
});

var id = '10598';
tomatoes.get(id, function(err, movie) {
  // movie: an Object with movie metadata
});

```