new IN.Test.TestCase('Should return basic values', function(){
  this.assertEquals("connections.get", IN.API.Connections("me").name(), "Should return api name");
  this.assertEquals("/people/{IDS}/connections:({FIELDS})", IN.API.Connections("me").resource(), "Should return api resource");
  this.finish();
}, {'category':'connections'});

new IN.Test.TestCase('Should return my connections', function(){
  
  IN.API.Connections("me").result(function(data){
    this.assertDefined(data, "response should be defined");
    this.assertDefined(data.values, ".values should be defined");
    this.assertEquals(3, data._total, "Should bring connections total");
    this.finish();
  }, this);
  
}, {'category':'connections'});

new IN.Test.TestCase('Should return custom fields when asked', function(){
  IN.API.Connections("me")
  .fields("firstName", "lastName")
  .result(function(connections){
    this.assertDefined(connections.values[0], "Profile should be defined");
    this.finish();
  },this);
    
}, {'category':'connections'});