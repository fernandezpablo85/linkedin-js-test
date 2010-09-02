new IN.Test.TestCase('Should fail for unexistent fields', function(){
  IN.API.MemberUpdates('me')
  .fields('foo', 'bar').all(function(data){
    this.fail("should not call all()");
  }, this).error(function(data){
    this.assertTrue(true, "called error()");  
    this.finish();
  },this);  
  
}, {'category':'member-updates'});