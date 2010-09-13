new IN.Test.TestSuite('PROFILE',[
{
  name: "SELF",
  description: "Get the caller's ('me') profile",

  testGetMyProfile: function()
  {
    var Assert = YAHOO.util.Assert;

    IN.API.Profile("me").fields("firstName", "lastName", "connections", "industry")
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
},
{
  name:"FS-ERR",
  description:"Get the callers profile using wrong field selectors to force an API error",
     
  testGetWrongFields: function()
  {
    IN.API.Profile("me").fields('firstName', 'experience')
    .error(function(result){
      this.resume(function(){
        YAHOO.util.Assert.areEqual(400, result.status, "Should return 400 status");
      });
    }, this);
      
    this.wait();
  }
},
{
  name:"FS",
  description:"Get the callers profile with field selectors",

  testGetWithFields: function()
  {
    var Assert = YAHOO.util.Assert;

    IN.API.Profile("me").fields("firstName", "industry", "connections")
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
  name: "NO-ID",
  description: "Get a profile without providing an Id to force a local error",

  _should:{
    error:{
      testGetWithoutID:true
    }
  },

  testGetWithoutID : function()
  {
    IN.API.Profile().result(function(result){
      YAHOO.util.Assert.fail('Should not call result()');
    }, this);
  }
},
{
  name: "WRONG-ID",
  description: "Get a profile providing a wrong id to force an API error",

  testErrWhenMemberIdNotFound: function()
  {
    IN.API.Profile("not-found").error(function(data){
      // should call error
      this.resume($.noop());
    }, this);  
    
    this.wait();
  }
},
{
  name: "API",
  description: "Retrieve basic values from the Prfole() API object",

  testApiResourceAndName: function()
  {
    var Assert = YAHOO.util.Assert;
    
    Assert.areEqual("people.get", IN.API.Profile("me").name(), "Wrong API name");
    Assert.areEqual("/people::({IDS}){ISPUBLIC}:({FIELDS})", IN.API.Profile("me").resource(), "Wrong API resource");
  }
}]);