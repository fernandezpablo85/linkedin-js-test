new IN.Test.TestCase("Should return self when asked for 'me'", function(){
  IN.API.Profile("me")
    .first(function(profile){
      this.assertDefined(profile, "Profile should be defined");
      this.assertEquals("Bruce",profile.firstName, "Should return first name");
      this.assertEquals("Willis",profile.lastName, "Should return last name");
      this.finish();
    },this);
}, {'category':'profile'});