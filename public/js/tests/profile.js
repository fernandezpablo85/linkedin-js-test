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

new IN.Test.YTestCase('Profile',{
  name: "Get Self Profile With Field Selectors",

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
  name: "Get my profile",

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
     name:"Field selectors (unexistent field)",
     
     testGetWrongFields: function(){
       IN.API.Profile("me")
          .fields('firstName', 'experience')
          .error(function(result){
            this.resume(function(){
              Assert = YAHOO.util.Assert.areEqual(400, result.status, "Should return 404 status");
              this.finish();
            });
       }, this);
       this.wait();
     }
   },
   {
   name: "Basic api properties",
   
   testApiResourceAndName: function()
   {
     YAHOO.util.Assert.areEqual("people.geta", 
                                 IN.API.Profile("me").name(), "Wrong API name");
                                 
     YAHOO.util.Assert.areEqual("/people::({IDS}){ISPUBLIC}:({FIELDS})", 
                                 IN.API.Profile("me").resource(), "Wrong API resource");
   }
   }]);


