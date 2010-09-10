new IN.Test.TestSuite('CONN',[
  {
    name: 'Basic api properties',
    
    testApiResourceAndName: function()
    {
      YAHOO.util.Assert.areEqual('connections.get', IN.API.Connections('me').name());
      YAHOO.util.Assert.areEqual('/people/{IDS}/connections:({FIELDS})', IN.API.Connections('me').resource()); 
    }
  },
  {
    name: 'Get my connections',
    
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
    name: 'Get my connections (custom fields)',
    
    testGetMyConnectionsFieldSelectors: function()
    {
      var Assert = YAHOO.util.Assert;
      
      IN.API.Connections("me")
      .fields("firstName", "lastName")
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
    name: "Get connections for more than one Id (error)",
    
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
    name: "Get connections (custom not supported fields)",
    
    testGetConnectionWithNotSupportedFields:function()
    {
      IN.API.Connections('me')
      .fields('foo', 'bar').error(function(data){
        this.resume(function(){
          // Called error()
        });
      },this);  
      
      this.wait();
    }
  }
]);