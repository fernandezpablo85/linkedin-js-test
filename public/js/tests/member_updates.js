new IN.Test.TestSuite('MEMBER',[
{
  name: 'Should return basic values',
  
  testGetApiNameAndResource: function()
  {
    YAHOO.util.Assert.areEqual('memberupdates.get', IN.API.MemberUpdates('me').name());
    YAHOO.util.Assert.areEqual('/people/{IDS}/network/updates:({FIELDS})', IN.API.MemberUpdates('me').resource());
  }
},
{
  name: 'Get my member updates',
  
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
  name: 'Get my updates with field selectors',
  
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
  name: 'Should fail for unexistent fields',
  
  testGetMemberUpdatesWithWrongFields: function()
  {
    IN.API.MemberUpdates('me').fields('foo', 'bar')
      .error(function(data){
        this.resume(function(){
          // called error() :)
        });
      }, this);
    
    this.wait();  
  }
}
]);