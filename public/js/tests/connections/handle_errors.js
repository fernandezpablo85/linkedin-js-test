new IN.Test.TestCase('Should fail for multiple ids', function(){
  try
  {
    IN.API.Connections("id1","id2").all(function(data){
      //should never reach here
      assertFail("should not call all()");
    });  
  }
  catch(e)
  {
    this.assertTrue(true, "Expected exception");
    this.finish();
  }
  
}, {'category':'connections'});

new IN.Test.TestCase('Should fail if no Id provided', function(){
  try
  {
    IN.API.Connections().all(function(data){
      //should never reach here
      assertFail("should not call all()");
    });  
  }
  catch(e)
  {
    this.assertTrue(true, "Expected exception");
    this.finish();
  }
  
}, {'category':'connections'});