new IN.Test.TestCase('Should return basic values', function(){
  this.assertEquals("people.get", IN.API.Profile("me").name(), "Should return api name");
  this.assertEquals("/people::({IDS}){ISPUBLIC}:({FIELDS})", IN.API.Profile("me").resource(), "Should return api resource");
  this.finish();
}, {'category':'profile'});

new IN.Test.TestCase("Should return self when asked for 'me'", function(){
  IN.API.Profile("me")
    .result(function(result){
      this.assertDefined(result.values, "Profile should be defined");
      this.assertEquals("Bruce",result.values[0].firstName, "Should return first name");
      this.assertEquals("Willis",result.values[0].lastName, "Should return last name");
      this.finish();
    },this);
}, {'category':'profile'});

new IN.Test.TestCase('Should return custom fields when asked', function(){
  IN.API.Profile("me")
  .fields("firstName", "lastName", "connections", "industry")
  .result(function(result){
    this.assertDefined(result, "Profile should be defined");
    this.assertEquals("Bruce",result.values[0].firstName, "Should return first name");
    this.assertEquals("Willis",result.values[0].lastName, "Should return last name");
    this.assertEquals(3, result.values[0].connections._total, "Should return _total attribute");
    this.finish();
  },this);
  
}, {'category':'profile'});