new IN.Test.TestCase('Should fail for unexistent fields', function(){
  IN.API.MemberUpdates('me')
  .fields('foo', 'bar').result(function(data){
    this.fail("should not call result()");
  }, this).error(function(data){
    this.assertTrue(true, "Called error()");
    this.finish();
  }, this);
  
}, {'category':'member-updates'});