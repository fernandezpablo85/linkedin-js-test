new IN.Test.YTestCase("Profile",{
    name: "Api Basic Data",
    
    testApiResourceAndName: function()
    {
      YAHOO.util.Assert.areEqual("people.get", 
                                  IN.API.Profile("me").name(), "Wrong API name");
                                  
      YAHOO.util.Assert.areEqual("/people::({IDS}){ISPUBLIC}:({FIELDS})", 
                                  IN.API.Profile("me").resource(), "Wrong API resource");
    }
});

new IN.Test.YTestCase("Profile",{
  name: "Get Self Profile",
  
  testGetMyProfile: function()
  {
    var Assert = YAHOO.util.Assert;
    
    IN.API.Profile("me").result(function(result){
      this.resume(function(){
        Assert.isNotUndefined(result.values, "Profile should be defined");
        Assert.areEqual("Bruce",result.values[0].firstName, "Should return first name");
        Assert.areEqual("Willis",result.values[0].lastName, "Should return last name");
      });
    }, this);
    
    this.wait(); 
  }  
});
new IN.Test.YTestCase('Profile',{
  name: "Get Self Profile",

  testGetMyProfile: function()
  {
    var Assert = YAHOO.util.Assert;

     IN.API.Profile("me")
     .fields("firstName", "lastName", "connections", "industry")
     .result(function(result){
       this.resume(function(){
         Assert.isNotUndefined(result.values, "Profile should be defined");
         Assert.areEqual("Bruce",result.values[0].firstName, "Should return first name");
         Assert.areEqual("Willis",result.values[0].lastName, "Should return last name");
         Assert.areEqual(3, result.values[0].connections._total, "Should return connection totals");
       });
     }, this);
     
     this.wait(); 
   }
});



