IN.Test.Runner = (function()
{
  var that = {};
  
  var runAllTests = function()
  {
    for(var i in IN.Test.Suites)
    {
      YAHOO.tool.TestRunner.add(IN.Test.Suites[i]);
    }
    YAHOO.tool.TestRunner.run();
  }
  
  that.init = function()
  {    
    $('#run').click(function(event){
      YAHOO.tool.TestRunner.clear();
      $('#test-results').text("");
      $('#spinner').show();
      runAllTests();
    });
  }
  
  return that;
})(); 