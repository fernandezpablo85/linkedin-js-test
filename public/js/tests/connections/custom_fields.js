new IN.Test.TestCase('Should return custom fields when asked', function(){
  IN.API.Connections("me")
  .fields("firstName", "lastName")
  .all(function(profile){
    this.assertDefined(profile, "Profile should be defined");
    this.finish();
  },this)
  .error(function(response){
    console.log(response);
    this.fail("got error()");
  }, this);
  
}, {'category':'connections'});