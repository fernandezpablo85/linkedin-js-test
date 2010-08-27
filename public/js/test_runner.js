var $Tests = $Tests || [];

IN.Test.Runner = (function()
{
  var that = {};
  
  var runAllTests = function()
  {
    var len = $Tests.length;
    for(var i = 0; i < len; i++)
    {
      var testCase = new IN.Test.Case($Tests[i].name)
      try
      {
        $Tests[i].run(testCase);  
      }
      catch(e)
      {
        testCase.assertFail("Got exception: " + e);
      }
      
    }
  }
  
  that.init = function()
  {
    $('#run').click(function(event){
      $('#test-results').text("");
      runAllTests();
    });
  }
  
  return that;
})(); 