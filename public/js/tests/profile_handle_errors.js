new IN.Test.TestCase('Should call either error() or first()', function(){
  var me = this;
  var asserts = function(profile)
  {
    this.assertTrue(true, "One of the callbacks called");
    this.finish(); 
  }

  IN.API.Profile("sfC4Qoby_r")
  .error(function(data){
    asserts.apply(me,[data]);
  });
  
  IN.API.Profile("sfC4Qoby_r")
  .first(function(data){
    asserts.apply(me,[data]);
  });
});

new IN.Test.TestCase("Should run error callback for unexistent field", function(){
  var me = this;
  var asserts = function(result)
  {
    this.assertEquals(400, result.status, "Should return 404 status");
    this.finish();
  }

  IN.API.Profile("me")
    .fields('firstName', 'experience' /*this doesn't exist*/)
    .error(function(data){
      asserts.apply(me, [data]);
    });
});
