new IN.Test.TestCase('Should throw exception if given multiple ids', function(){
  try{
    IN.API.Connections("id1","id2").result(function(data){
      assertFail("should not call result()");
    });  
  }catch(e){
    this.assertTrue(true, "Expected exception");
    this.finish();
  }
  
}, {'category':'connections'});

new IN.Test.TestCase('Should throw exception if no Id provided', function(){
  try{
    IN.API.Connections().result(function(data){
      assertFail("should not call result()");
    });  
  }catch(e){
    this.assertTrue(true, "Expected exception");
    this.finish();
  }
  
}, {'category':'connections'});

new IN.Test.TestCase('Should fail for unexistent fields', function(){
  IN.API.Connections('me')
  .fields('foo', 'bar').result(function(data){
    this.fail("should not call result()");
  }, this).error(function(data){
    this.assertTrue(true, "called error()");
    this.finish();
  },this);  
  
}, {'category':'connections'});