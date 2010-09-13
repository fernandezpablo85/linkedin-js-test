new IN.Test.TestSuite('SEARCH',[
{
  name: 'Basic api properties',
  
  testGetApiNameAndResource: function()
  {
    YAHOO.util.Assert.areEqual("peoplesearch.get", IN.API.PeopleSearch().name(), "Wrong API name");
    YAHOO.util.Assert.areEqual("/people-search:(people:({FIELDS}),num-results)", 
                              IN.API.PeopleSearch().resource(), "Wrong API resource");
  }
},
{
  name: 'Should perform search using fields()',
  
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
  name: "Should fail if given user param",
  
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
  name: 'Should fail for unexistent fields',
  
  testShouldFailForUnexistentFields:function()
  {
    IN.API.PeopleSearch().fields('foo', 'bar').error(function(data){
      this.resume(function(){
        //called error()
      });
    }, this);
    this.wait();
  }
},
{
  name: 'Exploration test for parameters',
  
  _should:{
   ignore:{
     testThis:true
   } 
  },
  
  testThis:function()
  {
    IN.API.PeopleSearch().params('foo', 'bar').error(function(data){
      this.resume(function(){
        //called error()
      });
    }, this);
    this.wait();
  }
}
]);

/*
new IN.Test.TestCase('Should return custom fields when asked', function(){
  IN.API.Profile("me")
  .fields("firstName", "lastName", "connections")
  .first(function(profile){
    this.assertDefined(profile, "Profile should be defined");
    this.assertEquals("Bruce",profile.firstName, "Should return first name");
    this.assertEquals("Willis",profile.lastName, "Should return last name");
    this.assertEquals(3, profile.connections._total, "Should return _total attribute");
    this.finish();
  },this);
  
}, {'category':'people-search'});


new IN.Test.TestCase('Should fail for any user but the owner (multiple ids)', function(){
  try
  {
    IN.API.PeopleSearch("not-me", "other-id")
    .result(function(data){
      this.fail("should not call result()");
    }, this);  
  }catch(e)
  {
    this.assertTrue(true, "expected exception: " + e);
    this.finish();
  }
}, {'category':'people-search'});

new IN.Test.TestCase('Should fail for unexistent fields', function(){
  IN.API.PeopleSearch()
  .fields('foo', 'bar').result(function(data){
    this.fail("should not call result()");
  }, this).error(function(data){
    this.assertTrue(true, "called error()");  
    this.finish();
  },this);  
  
}, {'category':'people-search'});*/