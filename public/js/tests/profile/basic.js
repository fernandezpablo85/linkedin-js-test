new IN.Test.TestCase('Should return basic values', function(){
  this.assertEquals("people.get", IN.API.Profile("me").name(), "Should return api name");
  this.assertEquals("/people::({IDS}){ISPUBLIC}:({FIELDS})", IN.API.Profile("me").resource(), "Should return api resource");
  this.finish();
}, {'category':'profile'});