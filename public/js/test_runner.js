var $Tests = $Tests || [];

IN.Test.Runner = (function()
{
  var that = {};
  
  var runAllTests = function()
  {
    for(var i = 0; i < $Tests.length; i++)
    {
      var test = $Tests[i];
      try
      {
        test.run();
      }
      catch(e)
      {
        test.fail("Got exception: " + e);
        test.finish();
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