IN.Test.Cases = ['profile', 'connections', 'network_updates', 'member_updates', 'search', 'raw'] 

IN.Test.Loader = (function()
{
  var that = {};
  
  that.init = function()
  { 
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
