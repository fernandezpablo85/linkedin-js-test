IN.Test = IN.Test || {};
IN.Test.Suites = [];

IN.Test.TestSuite = function(suiteName, tests)
{   
  var suite = new YAHOO.tool.TestSuite(suiteName);
  
  for(var i in tests){
    var yTest = new YAHOO.tool.TestCase(tests[i]);
    suite.add(yTest);
  }
  
  IN.Test.Suites.push(suite);
  $(window).trigger("suite-loaded", suite);
}