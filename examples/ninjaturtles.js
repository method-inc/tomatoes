var tomatoes = require('..');
var movies = tomatoes('6nkt9qb3ggxbd3ejyzsjvq3x');

movies.search('Ninja Turtles', function(err, results) {
  results.sort(function(a, b) {
    return b.ratings.audience_score - a.ratings.audience_score;
  });
  console.log('The best Ninja Turtles movies of all time');
  console.log('=========================================');
  results.forEach(function(movie) {
    console.log(movie.ratings.audience_score + '\t' + movie.title + ' (' + movie.year + ')');
  });
});