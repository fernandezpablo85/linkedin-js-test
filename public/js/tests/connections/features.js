new IN.Test.TestCase('Should return basic values', function(){
  this.assertEquals("connections.get", IN.API.Connections("me").name(), "Should return api name");
  this.assertEquals("/people/{IDS}/connections:({FIELDS})", IN.API.Connections("me").resource(), "Should return api resource");
  this.finish();
}, {'category':'connections'});

new IN.Test.TestCase('Should return my connections', function(){
  
  IN.API.Connections("me").all(function(data, meta){
    this.assertDefined(data, "response should be defined");
    this.assertDefined(meta, "metadata should be defined");
    this.assertEquals(3, meta._total, "Should bring connections total");
    this.finish();
  }, this);
  
}, {'category':'connections'});

new IN.Test.TestCase('Should return custom fields when asked', function(){
  IN.API.Connections("me")
  .fields("firstName", "lastName")
  .all(function(profile){
    this.assertDefined(profile, "Profile should be defined");
    this.finish();
  },this)
  .error(function(response){
    console.log(response);
    this.fail("got error()");
  }, this);
  
}, {'category':'connections'});