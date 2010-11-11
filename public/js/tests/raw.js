new IN.Test.TestSuite('RAW',[
{
  name: "API",
  description: "Retrieve basic values from the Raw() API object",
  
  testGetApiNameAndResource: function()
  {
    var Assert = YAHOO.util.Assert;
    Assert.areEqual("raw", IN.API.Raw().name(), "Wrong API name");
    Assert.areEqual("/{RAW}", IN.API.Raw("dummy").resource(), "Wrong API resource");
  }
},
{
  name: "GET",
  description: "Perform a raw GET request",
  
  testShouldPerformRawGet: function()
  {
    var Assert = YAHOO.util.Assert;
    
    IN.API.Raw("/people/~").method("GET").
      result(function(data){
        this.resume(function(){
          Assert.isNotUndefined(data, "Should not return undefined");
        });
      }, this);
      
    this.wait();
  }
},
{
  name: "POST",
  description: "Perform a raw POST activity update",
  
  testShouldPerformRawActivityUpdate: function()
  {
    var Assert = YAHOO.util.Assert;
    var BODY = {
                  'content-type':'linkedin-html',
                  'body':'hurray!'
               };
    
    IN.API.Raw("/people/~/person-activities")
          .method("POST")
          .body(JSON.stringify(BODY))
          .result(function(response){
            this.resume(function(){
              console.log("post activity worked!");
              console.log(response);
            });
          }, this)
          .error(function(response){
            this.resume(function(){
              Assert.fail("Not 2xx response");
            });
          }, this);
    this.wait();
  }
},
{
  name: "POST",
  description: "Perform a raw POST share request",
  
  testShouldPerformRawShare: function()
  {
    var Assert = YAHOO.util.Assert;
    var BODY =  {
                  "content": {
                    "submitted-url": "http://www.google.com",
                    "title": "this search engine is neat",
                  },
                  "visibility": {"code": "anyone"},
                  "comment": "nice link"
                }
    
    
    IN.API.Raw("/people/~/shares")
          .method("POST")
          .body(JSON.stringify(BODY))
          .result(function(response){
            this.resume(function(){
              console.log("share link worked!");
              console.log(response);
            });
          }, this)
          .error(function(response){
            this.resume(function(){
              Assert.fail("Not 2xx response");
            });
          }, this);
    this.wait();
  }
},
{
  name: "PUT",
  description: "Perform a raw PUT request",
  
  testShouldPerformRawPut:function()
  {
    var Assert = YAHOO.util.Assert;
    var STATUS_BODY = "\"Testing javascript API\""
  
    IN.API.Raw('/people/~/current-status')
      .method("PUT")
      .body(STATUS_BODY)
      .result(function(data){
        this.resume(function(){
          console.log('status update');
          console.log(data);
        });
      }, this)
      .error(function(data){
        this.resume(function(){
          Assert.fail("Not 2xx response");  
        })
      }, this);
    this.wait();
  }
}]);