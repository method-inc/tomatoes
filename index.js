var http = require('http');
var request = require('superagent');

module.exports = function tomatoes(key) {
  return new Tomato(key);
};

function Tomato(key) {
  this.key = key;
}

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

function toJSON(str) {
  var result;
  try {
    result = JSON.parse(str);
  } catch (err) {}
  return result;
}