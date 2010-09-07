new IN.Test.TestCase('Should call either error() or result()', function(){

  IN.API.Profile("sfC4Qoby_r")
  .error(function(data){
    this.assertTrue(true, "error() called");
    this.finish();
  }, this);
  
  IN.API.Profile("sfC4Qoby_r")
  .result(function(data){
    this.assertTrue(true, "result() called");
    this.finish();
  }, this);
}, {'category':'profile'});

new IN.Test.TestCase("Should run error callback for unexistent field", function(){
  IN.API.Profile("me")
    .fields('firstName', 'experience' /*this doesn't exist*/)
    .error(function(result){
      this.assertEquals(400, result.status, "Should return 404 status");
      this.finish();
    }, this);
}, {'category':'profile'});

new IN.Test.TestCase("Should throw exception if no Id given", function(){
  try
  {
    IN.API.Profile().result(function(result){
      this.fail("should never call first()");
    }, this);  
  }
  catch(e)
  {
    this.assertTrue(true, "Expected exception");
    this.finish();
  }
  
  
}, {'category':'profile'});