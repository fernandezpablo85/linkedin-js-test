new IN.Test.TestCase('Should return my connections', function(){
  
  IN.API.Connections("me").all(function(data, meta){
    this.assertDefined(data, "response should be defined");
    this.assertDefined(meta, "metadata should be defined");
    this.assertEquals(7, meta._total, "Should bring connections total");
    this.finish();
  }, this);
  
}, {'category':'connections'});