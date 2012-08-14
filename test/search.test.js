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

describe('search()', function() {
  describe('with a direct match', function() {
    it('should return the match', function(done) {
      movies.search('Batman Returns', function(err, results) {
        should.not.exist(err);
        results.should.have.length(1);
        results[0].id.should.eql(DIRECT.id);
        results[0].title.should.eql(DIRECT.title);
        results[0].ratings.should.eql(DIRECT.ratings);
        return done();
      });
    });
  });
  describe('with several matches', function() {
    it('should return all matches', function(done) {
      movies.search('Batman', function(err, results) {
        should.not.exist(err);
        results.should.have.length(33);
        results[0].id.should.be.a('string');
        results[0].title.should.be.a('string');
        results[0].ratings.should.be.a('object');
        return done();
      });
    });
  });
  describe('with no matches', function() {
    it('should return an empty set', function(done) {
      movies.search('lsdjflskjdflksjf', function(err, results) {
        should.not.exist(err);
        results.should.have.length(0);
        return done();
      });
    });
  });
});