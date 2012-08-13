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
var movies = tomatoes('6nkt9qb3ggxbd3ejyzsjvq3x');

movies.search('Batman Begins', function(err, results) {
  // results: an Array of Objects with movie metadata
});

var id = '10598';
movies.get(id, function(err, movie) {
  // movie: an Object with movie metadata
});

```