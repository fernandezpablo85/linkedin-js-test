/*new IN.Test.TestCase('Should call either error() or result()', function(){

  IN.API.Profile("sfC4Qoby_r")
  .error(function(data){
    this.assertTrue(true, "error() called");
    this.finish();
  }, this);
  
  IN.API.Profile("sfC4Qoby_r")
  .result(function(data){
    this.assertTrue(true, "result() called");
    this.finish();
  }, this);
}, {'category':'profile'});

new IN.Test.TestCase("Should run error callback for unexistent field", function(){
  IN.API.Profile("me")
    .fields('firstName', 'experience') //this doesn't exist
    .error(function(result){
      this.assertEquals(400, result.status, "Should return 404 status");
      this.finish();
    }, this);
}, {'category':'profile'});

new IN.Test.TestCase("Should throw exception if no Id given", function(){
  try
  {
    IN.API.Profile().result(function(result){
      this.fail("should never call first()");
    }, this);  
  }
  catch(e)
  {
    this.assertTrue(true, "Expected exception");
    this.finish();
  }
  
  
}, {'category':'profile'});

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
*/
new IN.Test.TestSuite('PROFILE',[
  {
  name: "SELF",

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
   }},
   {
   name: "API-BASIC",
   
   testApiResourceAndName: function()
   {
     YAHOO.util.Assert.areEqual("people.get", 
                                 IN.API.Profile("me").name(), "Wrong API name");
                                 
     YAHOO.util.Assert.areEqual("/people::({IDS}){ISPUBLIC}:({FIELDS})", 
                                 IN.API.Profile("me").resource(), "Wrong API resource");
   }
   }]);


