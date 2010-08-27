(function(){
  var test = (function(){
    var that = {};
    
    that.name = "Should return self when asked for 'me'";
    
    that.run = function(testCase)
    { 
      var asserts = function(profile)
      {
        testCase.assertDefined(profile)
        testCase.assertEquals("Bruce",profile.firstName, "Should return first name");
        testCase.assertEquals("Willis",profile.lastName, "Should return last name");
        testCase.assertEquals(profile.id, "sfC4Qoby_r", "Should return member Id");
        testCase.finish();
      }
      
      IN.API.Profile("me")
        .first(function(data){
          asserts(data);
        });      
    }
    
    return that;
  })();
  $(window).trigger("test-load",test);
})();
