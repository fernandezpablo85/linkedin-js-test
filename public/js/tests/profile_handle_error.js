(function(){
  var test = (function(){
    var that = {};
    
    that.name = "Should run error callback for unexistent field";
    
    that.run = function(testCase)
    { 
      var asserts = function(result)
      {
        testCase.assertEquals(400, result.status, "Should return 404 status");
        testCase.finish();
      }
      
      IN.API.Profile("me")
        .fields('firstName', 'experience' /*this doesn't exist*/)
        .error(function(data){
          asserts(data);
        });      
    }
    
    return that;
  })();
  $(window).trigger("test-load",test);
})();
