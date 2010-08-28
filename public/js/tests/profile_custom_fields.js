(function(){
  var test = (function(){
    var that = {};
    
    that.name = "Should return custom fields when asked";
    
    that.run = function(testCase)
    { 
      var asserts = function(profile)
      {
        testCase.assertDefined(profile);
        testCase.assertEquals("Bruce",profile.firstName, "Should return first name");
        testCase.assertEquals("Willis",profile.lastName, "Should return last name");
        testCase.assertEquals(7, profile.connections._total, "Should return _total attribute");
        testCase.finish();
      }
      
      IN.API.Profile("me")
        .fields("firstName", "lastName", "connections")
        .first(function(data){
          asserts(data);
        });      
    }
    
    return that;
  })();
  $(window).trigger("test-load",test);
})();