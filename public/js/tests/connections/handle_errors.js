new IN.Test.TestCase('Should throw exception if given multiple ids', function(){
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

new IN.Test.TestCase('Should throw exception if no Id provided', function(){
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