var should = require('should');

var tomatoes = require('..');
var movies = tomatoes('6nkt9qb3ggxbd3ejyzsjvq3x');

var DIRECT = {
  id: '10598',
  title: 'Batman Returns',
  ratings: {
    critics_rating: 'Certified Fresh',
    critics_score: 78,
    audience_rating: 'Upright',
    audience_score: 68
  }
};

describe('get()', function() {
  describe('with a match', function() {
    it('should return the match', function(done) {
      movies.get(DIRECT.id, function(err, result) {
        should.not.exist(err, 'err exists');
        should.exist(result, 'result does not exist');
        result.id.should.eql(parseInt(DIRECT.id, 10));  // RT sends some ids as Strings and some as Integers
        result.title.should.eql(DIRECT.title);
        result.ratings.should.eql(DIRECT.ratings);
        return done();
      });
    });
  });
  describe('without a match', function() {
    it('should return undefined', function(done) {
      movies.get('xxxxx', function(err, result) {
        should.not.exist(err);
        should.not.exist(result);
        return done();
      });
    });
  });
});