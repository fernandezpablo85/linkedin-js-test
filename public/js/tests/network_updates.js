new IN.Test.TestSuite('NUS',[
{
  name: 'Get api properties',
  
  testGetResourceAndName: function()
  {
    YAHOO.util.Assert.areEqual('networkupdates.get', IN.API.NetworkUpdates('me').name());
    YAHOO.util.Assert.areEqual('/people/{IDS}/network/updates:({FIELDS})', IN.API.NetworkUpdates('me').resource());
  }
},
{
  name: 'Get my updates',
  
  testGetMyUpdates: function()
  {
    var Assert = YAHOO.util.Assert;
    
    IN.API.NetworkUpdates("me").result(function(result){
      this.resume(function(){
        Assert.isNotUndefined(result.values, "Must return updates");
        Assert.isNotUndefined(result.values[0].updateContent, "Must return updateContent");
      });
    }, this);
    
    this.wait();
  }
},
{
  name: 'Get my updates with field selectors',
  
  testGetMyUpdatesWithFieldSelectors:function()
  {
    var Assert = YAHOO.util.Assert;
    
    IN.API.NetworkUpdates("me").fields("updateType")
      .result(function(data){
        this.resume(function(){
          Assert.isNotUndefined(data.values, "Must return updates");
          Assert.isNotUndefined(data.values[0].updateType, "Must return requested field");
          Assert.isUndefined(data.values[0].updateContent, "Must not return fields not requested");
      });
    }, this);
      
    this.wait();
  }
},
{
  name: 'Should fail when requesting others updates',
  
  _should:{
    error:{
      testShouldFailForOthersUpdates:true,
    }
  },
  
  testShouldFailForOthersUpdates:function()
  {
    IN.API.NetworkUpdates("not-me").result(function(data){
      YAHOO.util.Assert.fail();
    }, this);
  }
},
{
  name: 'Should fail for many Ids',
  
  _should:{
    error:{
      testShouldFailForManyIds:true,
    }
  },
  
  testShouldFailForManyIds:function()
  {
    IN.API.NetworkUpdates("not-me").result(function(data){
      YAHOO.util.Assert.fail();
    }, this);
  } 
},
{
  name: 'Should fail for unexistent fields',
  
  testShouldCallErrorForUnexistentFields:function()
  {
    IN.API.NetworkUpdates('me')
    .fields('foo', 'bar')
    .error(function(data){
      this.resume(function(){
        // called error()
      });
    },this);
    
    this.wait();
  }
}
]);