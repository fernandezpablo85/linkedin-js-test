IN.Test.TestCase = function(name, testBody)
{
  this.completed = false;
  this.timeout = 1000;
  this.results = [];
  this.name = name;
  this.doRun = testBody;
  $(window).trigger("test-load",this);
}
IN.Test.TestCase.prototype = new IN.Test.AbstractTest();