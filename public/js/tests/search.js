new IN.Test.TestSuite('SEARCH',[
{
  name: "API",
  description: "Retrieve basic values from the Prfole() API object",
  
  testGetApiNameAndResource: function()
  {
    var Assert = YAHOO.util.Assert;
    Assert.areEqual("peoplesearch.get", IN.API.PeopleSearch().name(), "Wrong API name");
    Assert.areEqual("/people-search:(people:({FIELDS}),num-results)", IN.API.PeopleSearch().resource(), "Wrong API resource");
  }
},
{
  name: "BASIC",
  description: "Perform a basic search using custom params",
  
  testShouldSearchWithFields: function()
  {
    var Assert = YAHOO.util.Assert;
    
    IN.API.PeopleSearch().params({"industry":"Marketing"}).
      result(function(data){
        this.resume(function(){
          Assert.isNotUndefined(data, "Should not return undefined");
        });
      }, this);
      
    this.wait();
  }
},
{
  name: "ID-ERR",
  description: "Perform a search passing a member id to force a local error",
  
  _should:{
    error:{
      testShouldFailForOthers:true
    }
  },
  
  testShouldFailForOthers: function()
  {
    var Assert = YAHOO.util.Assert;
    
    IN.API.PeopleSearch("other-id").result(function(data){
      Assert.fail("should never call result");
    });
  }
},
{
  name: "FS-ERR",
  description: "Perform a search with wrong fields to force an API error",
  
  testShouldFailForUnexistentFields:function()
  {
    IN.API.PeopleSearch().fields('foo', 'bar').error(function(data){
      //should call error()
      this.resume($.noop());
    }, this);
    
    this.wait();
  }
},
{
  name: "PARAM-ERR",
  description: "Perform a search passing strings as parameters to force a local error",
  
  _should:{
    error:{
      testShouldFailForStringsAsParams:true
    }
  },
  
  testShouldFailForStringsAsParams:function()
  {
    IN.API.PeopleSearch().params('foo', 'bar').result(function(data){
      YAHOO.util.Assert.fail("Should not call result()");
    }, this);
  }
}
]);
