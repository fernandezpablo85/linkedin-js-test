IN.Test.Cases = 

// Profile
['profile/features',
'profile/handle_errors', 

// Connections
'connections/basic',
'connections/handle_errors' ,
'connections/my_connections', 
'connections/custom_fields',

// Network Updates
'nus/basic',
'nus/my_updates',
'nus/handle_errors',

// Member Updates

];

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