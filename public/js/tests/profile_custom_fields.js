new IN.Test.TestCase('Should return custom fields when asked', function(){
  IN.API.Profile("me")
  .fields("firstName", "lastName", "connections")
  .first(function(profile){
    this.assertDefined(profile);
    this.assertEquals("Bruce",profile.firstName, "Should return first name");
    this.assertEquals("Willis",profile.lastName, "Should return last name");
    this.assertEquals(7, profile.connections._total, "Should return _total attribute");
    this.finish();
  },this);
  
});