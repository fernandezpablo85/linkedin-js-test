new IN.Test.TestCase('Should return basic values', function(){
  this.assertEquals("connections.get", IN.API.Connections("me").name(), "Should return api name");
  this.assertEquals("/people/{IDS}/connections:({FIELDS})", IN.API.Connections("me").resource(), "Should return api resource");
  this.finish();
}, {'category':'connections'});