(function(){
  var test = (function(){
    var that = {};
    
    that.name = "IN.API.Profile";
    
    that.run = function()
    {
      // alias for readability
      var Assert = IN.Test.Assert;
      
      Assert.setName(this.name);
      
      var asserts = function(profile)
      {
        Assert.ok(typeof profile !== "undefined", "Should return an object");
        Assert.equals("Bruce",profile.firstName);
        Assert.equals("Willis",profile.lastName);
        Assert.equals(profile.id, "aCyeOo0-FK");
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
