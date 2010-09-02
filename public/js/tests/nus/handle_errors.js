new IN.Test.TestCase('Should only work for the actual user', function(){
  try
  {
    IN.API.NetworkUpdates("not-me","other-id","more ids").ids('asdf')
    .all(function(data){
      this.fail("should not call all()");
    }, this);  
  }catch(e)
  {
    this.assertTrue(true, "expected exception: " + e);
    this.finish();
  }
  
}, {'category':'network-updates'});

new IN.Test.TestCase('Should fail for unexistent fields', function(){
  IN.API.NetworkUpdates('me')
  .fields('foo', 'bar').all(function(data){
    this.fail("should not call all()");
  }, this).error(function(data){
    this.assertTrue(true, "called error()");  
    this.finish();
  },this);  
  
}, {'category':'network-updates'});