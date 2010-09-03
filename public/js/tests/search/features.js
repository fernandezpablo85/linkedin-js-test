new IN.Test.TestCase('Should return basic values', function(){
  this.assertEquals("peoplesearch.get", IN.API.PeopleSearch().name(), "Should return api name");
  this.assertEquals("/people-search:(people:({FIELDS}),num-results)", IN.API.PeopleSearch().resource(), "Should return api resource");
  this.finish();
}, {'category':'people-search'});

new IN.Test.TestCase("Should perform search using fields()", function(){
  IN.API.PeopleSearch().params({
    "industry": "Marketing and Advertising"}).
    all(function(profile){
      this.assertDefined(profile, "Profile should be defined");
      this.assertEquals("Bruce",profile.firstName, "Should return first name");
      this.assertEquals("Willis",profile.lastName, "Should return last name");
      this.finish();
    },this);
}, {'category':'people-search'});
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
  
}, {'category':'people-search'});*/