new IN.Test.TestSuite('CONN',[
{
  name: "API",
  description: "Retrieve basic values from the Prfole() API object",
  
  testApiResourceAndName: function()
  {
    var Assert = YAHOO.util.Assert;
    
    Assert.areEqual('connections.get', IN.API.Connections('me').name());
    Assert.areEqual('/people/{IDS}/connections:({FIELDS})', IN.API.Connections('me').resource()); 
  }
},
{
  name: "SELF",
  description: "Get the caller's (me) connections",

  testGetMyConnections: function()
  {
    var Assert = YAHOO.util.Assert;

    IN.API.Connections("me").result(function(result){
      this.resume(function(){
        Assert.isNotUndefined(result.values, "Results should be defined");
        Assert.areEqual(3, result._total, "Should return connection totals");
      });
    }, this);
    
    this.wait();
  }
},
{
  name: "FS",
  description: "Get the caller's connections using field selectors",

  testGetMyConnectionsFieldSelectors: function()
  {
    var Assert = YAHOO.util.Assert;

    IN.API.Connections("me").fields("firstName", "lastName")
      .result(function(connections){
        this.resume(function(){
          Assert.isNotUndefined(connections.values, "Connections should be defined");
          Assert.isNotUndefined(connections.values[0].firstName, "Must bring firstName");
          Assert.isUndefined(connections.values[0].headline, "Must not bring headline");    
        });
      },this);
    
    this.wait();
  }
},
{
  name: "MANY-IDS",
  description:"Get connections for more than one id to force a local error",

  _should: {
    error:{
      testGetConnectionsForManyIds:true
    }
  },

  testGetConnectionsForManyIds: function()
  {
    IN.API.Connections("id1","id2").
      result(function(data){
        YAHOO.util.Assert.fail("must not call result()");
      });
  }
},
{
  name: "FS-ERR",
  description: "Get connections with wrong field selectors to force an API error",

  testGetConnectionWithNotSupportedFields:function()
  {
    IN.API.Connections('me').fields('foo', 'bar')
      .error(function(data){
        // should call error()
        this.resume($.noop());
      },this);  

    this.wait();
  }
}
]);