new IN.Test.TestCase('Should throw exception if given multiple ids', function(){
  try
  {
    IN.API.Connections("id1","id2").result(function(data){
      assertFail("should not call result()");
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
    IN.API.Connections().result(function(data){
      assertFail("should not call all()");
    });  
  }
  catch(e)
  {
    this.assertTrue(true, "Expected exception");
    this.finish();
  }
  
}, {'category':'connections'});