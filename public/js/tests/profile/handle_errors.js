new IN.Test.TestCase('Profile: Should call either error() or first()', function(){

  IN.API.Profile("sfC4Qoby_r")
  .error(function(data){
    this.assertTrue(true, "error() called");
    this.finish();
  }, this);
  
  IN.API.Profile("sfC4Qoby_r")
  .first(function(data){
    this.assertTrue(true, "first() called");
    this.finish();
  }, this);
});

new IN.Test.TestCase("Should run error callback for unexistent field", function(){
  IN.API.Profile("me")
    .fields('firstName', 'experience' /*this doesn't exist*/)
    .error(function(result){
      this.assertEquals(400, result.status, "Should return 404 status");
      this.finish();
    }, this);
});
