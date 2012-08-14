# Tomatoes

A simple node.js interface to the [Rotten Tomatoes](http://www.rottentomatoes.com) API.
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

## The 'Movie' Object

```js
{ id: '10598',
  title: 'Batman Returns',
  year: 1992,
  mpaa_rating: 'PG-13',
  runtime: 126,
  critics_consensus: 'Director Tim Burton\'s dark, brooding atmosphere, Michael Keaton\'s work as the tormented hero, and the flawless casting of Danny DeVito as The Penguin and Christopher Walken as, well, Christopher Walken make the sequel better than the first.',
  release_dates: { theater: '1992-06-19', dvd: '1997-04-29' },
  ratings: 
   { critics_rating: 'Certified Fresh',
     critics_score: 78,
     audience_rating: 'Upright',
     audience_score: 68 },
  synopsis: '',
  posters: 
   { thumbnail: 'http://content7.flixster.com/movie/56/82/90/5682901_mob.jpg',
     profile: 'http://content7.flixster.com/movie/56/82/90/5682901_pro.jpg',
     detailed: 'http://content7.flixster.com/movie/56/82/90/5682901_det.jpg',
     original: 'http://content7.flixster.com/movie/56/82/90/5682901_ori.jpg' },
  abridged_cast: 
   [ { name: 'Michael Keaton', id: '162652681', characters: [Object] },
     { name: 'Danny DeVito', id: '162664270', characters: [Object] },
     { name: 'Michelle Pfeiffer',
       id: '162660689',
       characters: [Object] },
     { name: 'Christopher Walken',
       id: '162652837',
       characters: [Object] },
     { name: 'Michael Gough', id: '162681132', characters: [Object] } ],
  alternate_ids: { imdb: '0103776' },
  links: 
   { self: 'http://api.rottentomatoes.com/api/public/v1.0/movies/10598.json',
     alternate: 'http://www.rottentomatoes.com/m/batman_returns/',
     cast: 'http://api.rottentomatoes.com/api/public/v1.0/movies/10598/cast.json',
     clips: 'http://api.rottentomatoes.com/api/public/v1.0/movies/10598/clips.json',
     reviews: 'http://api.rottentomatoes.com/api/public/v1.0/movies/10598/reviews.json',
     similar: 'http://api.rottentomatoes.com/api/public/v1.0/movies/10598/similar.json' } }
```