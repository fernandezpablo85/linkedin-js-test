var $Tests = $Tests || [];

IN.Test.Runner = (function()
{
  var that = {};
  
  var runAllTests = function()
  {
    var len = $Tests.length;
    for(var i = 0; i < len; i++)
    {
      try
      {
        $Tests[i].run();  
      }
      catch(e){}
      
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