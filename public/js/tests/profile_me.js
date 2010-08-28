new IN.Test.TestCase("Should return self when asked for 'me'", function(){
  var me = this;
  var asserts = function(profile)
  {
    console.log(this);
    this.assertDefined(profile)
    this.assertEquals("Bruce",profile.firstName, "Should return first name");
    this.assertEquals("Willis",profile.lastName, "Should return last name");
    this.finish();
  }
  
  IN.API.Profile("me")
    .first(function(data){
      asserts.apply(me,[data]);
    });
});