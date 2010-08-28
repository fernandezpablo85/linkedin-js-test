IN.Test.Cases = ['profile_me', 'profile_custom_fields','profile_handle_errors'];

IN.Test.Loader = (function()
{
  var that = {};
  
  function loadTest(event, test)
  {
    $Tests.push(test);
  }
  
  that.init = function()
  {
    $(window).bind("test-load",loadTest);
    
    var tests = IN.Test.Cases.length;
    for(var i = 0; i < tests; i++)
    {
      var script = document.createElement( 'script' );
      script.type = 'text/javascript';
      script.src = 'js/tests/' + IN.Test.Cases[i] + '.js?rnd=' + Math.random();
      var head = document.getElementsByTagName("head")[0];         
      head.appendChild(script);
    }
  }
  
  
  
  return that;
})();