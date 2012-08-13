# Test

Your automated unit and integration tests live here.

Nobody trusts modules without tests (including their authors - ask me how I know!).
Test driven development is especially useful with a module that naturally provides
a black-box API to its client.

Choose a test framework that makes sense for you. We use mocha:

```js
var should = require('should');

describe('My module', function() {
  describe('and its components', function() {
    it('should have tests', function() {

    });
    it('that are sync or async', function(done) {
      return done();
    });
  });
});
```