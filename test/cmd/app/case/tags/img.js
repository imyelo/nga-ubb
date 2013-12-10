define(function (require, exports, module) {
  return function (ubb) {
    describe('img', function () {
      var test = function (ubb, text, output, setting) {
        describe(text, function () {
          it('should be ' + output, function () {
            expect(ubb.toHtml(text, setting)).to.be.equal(output);
          });
        });
      };
      // todo: active dom
      var text, output, setting;
      text = '[img]wrongurl[/img]';
      output = '<img src="wrongurl" onerror="" />';
      test(ubb, text, output);
      text = '[img]http://img4.ngacn.cc/ngabbs/post/smile/06.gif[/img]';
      output = '<img src="http://img4.ngacn.cc/ngabbs/post/smile/06.gif" onerror="" />';
      test(ubb, text, output);
      text = '[img]./ngabbs/post/smile/06.gif[/img]';
      output = '<img src="http://img6.ngacn.cc/attachments/ngabbs/post/smile/06.gif" onerror="" />';
      test(ubb, text, output);
      text = '[img]/ngabbs/post/smile/06.gif[/img]';
      output = '<img src="http://img6.ngacn.cc/attachments/ngabbs/post/smile/06.gif" onerror="" />';
      test(ubb, text, output);
      text = '[img]/ngabbs/post/smile/06.gif[/img]';
      output = '<img/>';
      setting = {downloadImage: false};
      test(ubb, text, output, setting);
    });
  };
});