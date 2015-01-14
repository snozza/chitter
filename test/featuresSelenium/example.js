var webdriverio = require('webdriverio'),
    expect      = require('chai').expect;

describe('Main page tests', function(){

    this.timeout(99999999);
    var client = {};

    before(function(done){
      new User({username: "test", email: "test@test.com",
                full_name: "tester tesing", password: "test"}).save(function() {
        client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
        client.init(done);
      });
    });

    it('Sockerr',function(done) {
      client
        .url('http://localhost:3000')
        .getTitle(function(err, title) {
          console.log(title);
          expect(err).to.eql(undefined);
          expect(title).to.eql('Sockerr');
        })
        .call(done);
    });

    it('should be able to login', function(done) {


    after(function(done) {
        client.end(done);
    });
});