define(function (require, exports, module) {
  return function (ubb) {
    describe.only('tags', function () {
      require('./font')(ubb);
      require('./layout')(ubb);
      require('./list')(ubb);
      require('./img')(ubb);
    });
  };
});