new IN.Test.TestSuite('MEMBER',[
{
  name: "API",
  description: "Retrieve basic values from the Prfole() API object",
  
  testGetApiNameAndResource: function()
  {
    var Assert = YAHOO.util.Assert;
    
    Assert.areEqual('memberupdates.get', IN.API.MemberUpdates('me').name());
    Assert.areEqual('/people/{IDS}/network/updates:({FIELDS})', IN.API.MemberUpdates('me').resource());
  }
},
{
  name: "SELF",
  description: "Get the caller's (me) member updates",
  
  testGetMyMemberUpdates: function()
  {
    var Assert = YAHOO.util.Assert;
    
    IN.API.MemberUpdates("me").result(function(data){
      this.resume(function(){
        Assert.isNotUndefined(data.values, "Must not return 'undefined'");
        Assert.isNotUndefined(data.values[0].updateContent, "Must return 'updateContent'");
      });
    }, this);
    
    this.wait();
  }
},
{
  name: "FS",
  description: "Get the caller's member updates using field selectors",
  
  testGetMyMemberUpdatesWithSelectors: function()
  {
    var Assert = YAHOO.util.Assert;
    
    IN.API.MemberUpdates("me").fields("updateType")
      .result(function(data){
        this.resume(function(){
          Assert.isNotUndefined(data.values, "Must return member updates");
          Assert.isNotUndefined(data.values[0].updateType, "Must return update-type");
          Assert.isUndefined(data.values[0].updateContent, "Must not return updateContent");
        });
    }, this);
    
    this.wait();    
  }
},
{
  name: "FS-ERR",
  description: "Get the caller's memeber updates using wrong field selectors to force an API error",
  
  testGetMemberUpdatesWithWrongFields: function()
  {
    IN.API.MemberUpdates('me').fields('foo', 'bar')
      .error(function(data){
        // should call error()
        this.resume($.noop());
      }, this);
    
    this.wait();  
  }
}
]);