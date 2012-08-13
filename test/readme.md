# Test

Your automated unit and integration tests live here.

Nobody trusts modules without tests (including their authors - ask me how I know!).
Test driven development is especially useful with a module that naturally provides
a black-box API to its client.

We use mocha for testing, but choose a test framework that makes sense for you. A starter mocha test:

```js
var should = require('should');

describe('My module', function() {
  it('should have tests', function() {

  });
});
```