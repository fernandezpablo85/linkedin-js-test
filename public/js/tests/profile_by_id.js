(function(){
  var test = (function(){
    var that = {};
    
    that.name = "Should return profiles by member Id";
    
    that.run = function(testCase)
    {      
      var asserts = function(profile)
      {
        testCase.assertDefined(profile);
        testCase.assertEquals("Bruces",profile.firstName, "Should return first name");
        testCase.assertEquals("Willis",profile.lastName, "Should return last name");
        testCase.assertEquals(profile.id, "sfC4Qoby_r", "Should return member Id");
        testCase.assertEquals("/people::({IDS}){ISPUBLIC}:({FIELDS})", IN.API.Profile('me').resource(), "Should return resource string");
        testCase.assertEquals("people.get", IN.API.Profile('me').name(), "Should return api string");
        testCase.finish(); 
      }
      
      IN.API.Profile("sfC4Qoby_r")
        .first(function(data){
          asserts(data);
        });      
    }
    
    return that;
  })();
  $(window).trigger("test-load",test);
})();
