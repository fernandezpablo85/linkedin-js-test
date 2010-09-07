new IN.Test.TestCase('Should fail for any user but the owner', function(){
  try
  {
    IN.API.NetworkUpdates("not-me")
    .result(function(data){
      this.fail("should not call result()");
    }, this);  
  }catch(e)
  {
    this.assertTrue(true, "expected exception: " + e);
    this.finish();
  }
}, {'category':'network-updates'});

new IN.Test.TestCase('Should fail for any user but the owner (multiple ids)', function(){
  try
  {
    IN.API.NetworkUpdates("not-me", "other-id")
    .result(function(data){
      this.fail("should not call result()");
    }, this);  
  }catch(e)
  {
    this.assertTrue(true, "expected exception: " + e);
    this.finish();
  }
}, {'category':'network-updates'});

new IN.Test.TestCase('Should fail for unexistent fields', function(){
  IN.API.NetworkUpdates('me')
  .fields('foo', 'bar')
  .result(function(data){
    this.fail("should not call result()");
  },this)
  .error(function(data){
    this.assertTrue(true, "called error()");  
    this.finish();
  },this);  
  
}, {'category':'network-updates'});