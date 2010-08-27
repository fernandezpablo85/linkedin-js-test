var $Tests = $Tests || [];

IN.Test.Runner = (function()
{
  var that = {};
  
  var runAllTests = function()
  {
    var len = $Tests.length;
    for(var i = 0; i < len; i++)
    {
      $Tests[i].run();
    }
  }
  
  that.init = function()
  {
    $('#run').click(function(event){
      runAllTests();
    });
  }
  
  return that;
})(); 