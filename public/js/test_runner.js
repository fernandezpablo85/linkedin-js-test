var $Tests = $Tests || [];
$TEST_IGNORES = {};

IN.Test.Runner = (function()
{
  var that = {};
  
  var runAllTests = function()
  {
    var ignores = (function(){
      var count = 0;
      for(var i in $TEST_IGNORES)
      {
        if($TEST_IGNORES[i]) count++;
      }
      return count;
    });
    $("#test-totals-total").text($TESTS_TOTAL - ignores());
    $('#test-totals').show();
    for(var i = 0; i < $Tests.length; i++)
    {
      var test = $Tests[i];
      try
      {
        if(!$TEST_IGNORES[test.id])
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
    $TEST_IGNORES[data.name] = data.ignore;
  }
  
  that.init = function()
  {
    $(window).bind('test-toggle', toggleTest);
    
    $('#run').click(function(event){
      $(this).attr('disabled', 'disabled');
      $('#test-results').text("");
      $('#spinner').show();
      $TESTS_RUN = 0;
      runAllTests();
    });
  }
  
  return that;
})(); 