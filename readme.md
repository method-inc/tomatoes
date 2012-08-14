# Tomatoes

A simple node.js interface to the Rotten Tomatoes API.
- **search** (find movies from a title string search)
- **get** (get a movie by ID)

Movie data includes:
- Title
- Year
- Synopsis
- Actors
- Ratings
- Production summary
- Similar movies

## Installing

```
  $ npm install moduleName
```

## Using

```js

var tomatoes = require('tomatoes');
var movies = tomatoes('6nkt9qb3ggxbd3ejyzsjvq3x');  // API Key

movies.search('Batman Begins', function(err, results) {
  // results: an Array of Objects with movie metadata
});

var id = '10598';
movies.get(id, function(err, result) {
  // result: an Object with movie metadata
});

```

## Testing

```
  $ make test
```