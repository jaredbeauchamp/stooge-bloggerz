'use strict';

describe('Service: author', function () {

  // load the service's module
  beforeEach(module('stoogeBloggerzApp'));

  // instantiate service
  var author;
  beforeEach(inject(function (_author_) {
    author = _author_;
  }));

  it('should do something', function () {
    expect(!!author).toBe(true);
  });

});
