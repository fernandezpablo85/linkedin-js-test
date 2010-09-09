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
            });
       }, this);
       this.wait();
     }
   },
   {
     name:"Field selectors",
     
     testGetWithFields: function()
     {
       var Assert = YAHOO.util.Assert;

        IN.API.Profile("me")
        .fields("firstName", "industry", "connections")
        .result(function(result){
          this.resume(function(){
            Assert.isNotUndefined(result.values, "Profile should be defined");
            Assert.areEqual("Bruce",result.values[0].firstName, "Should return first name");
            Assert.isUndefined(result.values[0].lastName, "Should not bring last name");
            Assert.isString(result.values[0].industry, "Should return 'industry'");
            Assert.areEqual(3, result.values[0].connections._total, "Should return connection totals");
          });
        }, this);

        this.wait();  
     }
   },
   {
     name: "Try to retrieve a profile without Id",
     
     _should:{
       error:{
         testGetWithoutID:true
       }
     },
     
     testGetWithoutID : function()
     {
       IN.API.Profile().result(function(result){
         // should never reach here
       }, this);
     }
   },
   {
     name: "Should call error() when member_id does not exist",
     
     testErrWhenMemberIdNotFound: function()
     {
       IN.API.Profile("sfC4Qoby_r")
       .error(function(data){
         this.resume(function(){
           // reached :)
         });
       }, this);  
       this.wait();
     }
   },
   {
   name: "Basic api properties",
   
   testApiResourceAndName: function()
   {
     YAHOO.util.Assert.areEqual("people.get", 
                                 IN.API.Profile("me").name(), "Wrong API name");
                                 
     YAHOO.util.Assert.areEqual("/people::({IDS}){ISPUBLIC}:({FIELDS})", 
                                 IN.API.Profile("me").resource(), "Wrong API resource");
   }
}]);