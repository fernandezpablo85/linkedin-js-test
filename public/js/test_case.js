IN.Test.TestCase = function(name, testBody, options)
{
  var opts = options || {};
  
  this.completed = false;
  this.category = opts.category || "default";
  this.timeout = 10000;
  this.results = [];
  this.name = name;
  this.doRun = testBody;
  this.id = IN.$uid();
  $(window).trigger("test-load",this);
}

IN.Test.TestCase.prototype = new IN.Test.AbstractTest();