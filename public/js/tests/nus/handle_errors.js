new IN.Test.TestCase('Should fail if given ids (it only works for the actual user)', function(){
  try
  {
    IN.API.NetworkUpdates().ids("not-me","other")
    .all(function(data){
      this.fail("should not call all()");
    }, this);  
  }catch(e)
  {
    this.assertTrue(true, "expected exception: " + e);
    this.finish();
  }
  
}, {'category':'network-updates'});