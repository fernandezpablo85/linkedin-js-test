new IN.Test.TestCase('Should return basic values', function(){
  this.assertEquals("networkupdates.get", IN.API.NetworkUpdates("me").name(), "Should return api name");
  this.assertEquals("/people/{IDS}/network/updates", IN.API.NetworkUpdates("me").resource(), "Should return api resource");
  this.finish();
}, {'category':'network-updates'});