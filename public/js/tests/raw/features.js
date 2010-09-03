new IN.Test.TestCase('Should return basic values', function(){
  this.assertEquals("peoplesearch.get", IN.API.PeopleSearch().name(), "Should return api name");
  this.assertEquals("/people-search:(people:({FIELDS}),num-results)", IN.API.PeopleSearch().resource(), "Should return api resource");
  this.finish();
}, {'category':'raw'});

new IN.Test.TestCase('Should be able to make raw calls to profile', function(){
  IN.API.Raw("people/~").
    all(function(profile){
      this.assertTrue(true, "Call succeeded")
      this.finish();
    },this);
}, {'category':'raw'});

new IN.Test.TestCase("Should be able to make raw calls to connections", function(){
  IN.API.Raw("people/~/connections").
    all(function(profile){
      this.assertTrue(true, "Call succeeded")
      this.finish();
    },this);
}, {'category':'raw'});

new IN.Test.TestCase('Should be able to make raw calls with field selectors', function(){
  IN.API.Raw("people/~/connections:(first-name,last-name)").
    all(function(profile){
      this.assertTrue(true, "Call succeeded")
      this.finish();
    },this);  
}, {'category':'raw'});