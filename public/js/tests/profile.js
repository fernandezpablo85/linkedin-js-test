(function(){
  var test = (function(){
    var that = {};
    
    that.run = function()
    {
      var testCase = new IN.Test.Case("IN.API.Profile# Should return self when asked for 'me'");
      
      var asserts = function(profile)
      {
        testCase.assertTrue(typeof profile !== "undefined", "Result must not be undefined");
        testCase.assertEquals("Bruce",profile.firstName, "Should return first name");
        testCase.assertEquals("Willis",profile.lastName, "Should return last name");
        testCase.assertEquals(profile.id, "aCyeOo0-FK", "Should return member Id");
        testCase.finish();
      }
      
      IN.API.Profile("me")
        .first(function(data){
          asserts(data);
        });      
    }
    
    return that;
  })();
  $Tests.push(test);
})();
