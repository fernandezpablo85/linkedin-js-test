new IN.Test.TestCase('Should return basic values', function(){
  this.assertEquals("memberupdates.get", IN.API.MemberUpdates("me").name(), "Should return api name");
  this.assertEquals("/people/{IDS}/network/updates:({FIELDS})", IN.API.MemberUpdates("me").resource(), "Should return api resource");
  this.finish();
}, {'category':'member-updates'});

new IN.Test.TestCase('Should return my network updates', function(){
  IN.API.MemberUpdates("me")
    .result(function(data){
    this.assertDefined(data.values, "Must not return 'undefined'");
    this.assertDefined(data.values[0].updateContent, "Must return 'updateContent'");
    this.finish();
  }, this);
}, {'category':'member-updates'});

new IN.Test.TestCase('Should filter by custom fields', function(){
  IN.API.MemberUpdates("me")
    .fields("updateType")
    .result(function(data){
    this.assertDefined(data.values, "Must not return 'undefined'");
    this.assertDefined(data.values[0].updateType, "Must return update-type");
    this.assertTrue(data.values[0].updateContent == undefined, "Must not bring update-content")
    this.finish();
  }, this);
}, {'category':'member-updates'});