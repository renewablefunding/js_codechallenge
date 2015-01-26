'use strict';

describe('Service: sunriseData', function () {

  // load the service's module
  beforeEach(module('sunriseAppApp'));

  // instantiate service
  var sunriseData;
  beforeEach(inject(function (_sunriseData_) {
    sunriseData = _sunriseData_;
  }));

  it('should do something', function () {
    expect(!!sunriseData).toBe(true);
  });

});
