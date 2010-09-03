IN.Test.Cases = 

// Profile
['profile/features',
'profile/handle_errors', 

// Connections
'connections/features',
'connections/handle_errors' ,

// Network Updates
'nus/features',
'nus/handle_errors',

// Member Updates
'member_updates/features',
'member_updates/handle_errors',

// People Search
'search/features',
'search/handle_errors',

// Raw
'raw/features',
'raw/handle_errors'
];

IN.Test.Loader = (function()
{
  var that = {};
  
  function loadTest(event, test)
  {
    $TESTS_TOTAL++;
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