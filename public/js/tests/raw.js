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
  description: "Perform a raw POST request",
  
  testShouldPerformRawPost: function()
  {
    var Assert = YAHOO.util.Assert;
    var INVITE_BODY = {'to':{
                          'fist-name': 'Bruce',
                          'last-name': 'Willis',
                          'email-address': 'bruce@test.linkedin.com'
                        },
                        'subjet':'Invitation to my network',
                        'body': 'I would like to add you to my professional network on LinkedIn.'
                      };
    IN.API.Raw("/people/~/mailbox/invitations")
          .method("POST")
          .body(JSON.stringify(INVITE_BODY))
          .result(function(response){
            this.resume(function(){
              console.log("worked!");
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