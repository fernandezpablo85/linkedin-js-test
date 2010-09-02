new IN.Test.TestCase('Should only work for the actual user', function(){
  try
  {
    IN.API.MemberUpdates().ids("YdKXpF6myw")
    .all(function(data){
      this.fail("should not call all()");
    }, this);  
  }catch(e)
  {
    this.assertTrue(true, "expected exception: " + e);
    this.finish();
  }
  
}, {'category':'member-updates'});

new IN.Test.TestCase('Should fail for unexistent fields', function(){
  IN.API.MemberUpdates('me')
  .fields('foo', 'bar').all(function(data){
    this.fail("should not call all()");
  }, this).error(function(data){
    this.assertTrue(true, "called error()");  
    this.finish();
  },this);  
  
}, {'category':'member-updates'});