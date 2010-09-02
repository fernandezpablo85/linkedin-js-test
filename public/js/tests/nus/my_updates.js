new IN.Test.TestCase('Should return my network updates', function(){
  IN.API.NetworkUpdates("me").all(function(data){
    this.assertDefined(data, "Must not return 'undefined'");
    this.assertDefined(data[0].updateContent, "Must return 'updateContent'");
    this.finish();
  }, this);
}, {'category':'network-updates'});