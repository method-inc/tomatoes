var request = require('superagent');

// Tomato factory

module.exports = function tomatoes(key) {
  return new Tomato(key);
};

// Constructor

function Tomato(key) {
  this.key = key;
}

// Search API

Tomato.prototype.search = function(title, done) {
  request
    .get('http://api.rottentomatoes.com/api/public/v1.0/movies.json')
    .send({ q: title })
    .send({ apikey: this.key })
    .send({ page_limit: 50 })
    .end(function(err, res) {
      var body = toJSON(res.text);
      var result = body && body.movies || [];
      return done(err, result);
    });
};

// Get API

Tomato.prototype.get = function(id, done) {
  request
    .get('http://api.rottentomatoes.com/api/public/v1.0/movies/' + id + '.json')
    .send({ apikey: this.key })
    .end(function(err, res) {
      var body = toJSON(res.text);
      var result = body && body.id ? body : undefined;
      return done(err, result);
    });
};

// Get List
// listType : movies or dvds
// listName: box_office, in_theaters etc...

Tomato.prototype.getList = function(listType, listName, done) {
	request
	  .get('http://api.rottentomatoes.com/api/public/v1.0/lists/' + listType + '/' + listName + '.json')
	  .send({ apiKey: this.key })
	  .end(function(err, res) {
	    var body = toJSON(res.text);
	    var result = body ? body : undefined;
	    return done(err, result);
	});
};

// Utils

function toJSON(str) {
  var result;
  try {
    result = JSON.parse(str);
  } catch (err) {}
  return result;
}