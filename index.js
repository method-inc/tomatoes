var http = require('http');
var qs = require('querystring');

function Tomato(key) {
  this.key = key;
}

Tomato.prototype.search = function(title, done) {
  var data = '';
  var base = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?';
  var query = qs.stringify({
    q: title,
    apikey: this.key
  });

  http
    .get(base + query, onResponse)
    .on('error', onEnd);

  function onResponse(res) {
    res.on('data', onData);
    res.on('end', onEnd);
  }
  function onData(chunk) {
    data += chunk;
  }
  function onEnd(err) {
    var obj = [];
    if (data.length) {
      obj = JSON.parse(data).movies;
    }
    return done(err, obj);
  }
};

module.exports = function tomatoes(key) {
  return new Tomato(key);
};