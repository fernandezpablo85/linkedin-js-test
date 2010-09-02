var $Tests = $Tests || [];

IN.Test.Runner = (function()
{
  var that = {};
  var ignores = {};
  
  var runAllTests = function()
  {
    for(var i = 0; i < $Tests.length; i++)
    {
      var test = $Tests[i];
      try
      {
        if(!ignores[test.id])
        {
          test.run();  
        }
        else
        {
          console.log('ignored ' + test.id);
        }
        
      }
      catch(e)
      {
        test.fail("Got exception: " + e);
      }
      
    }
  }
  
  function toggleTest(event, data)
  {
    ignores[data.name] = data.ignore;
  }
  
  
  that.init = function()
  {
    $(window).bind('test-toggle', toggleTest);
    
    $('#run').click(function(event){
      $('#test-results').text("");
      runAllTests();
    });
  }
  
  return that;
})(); 