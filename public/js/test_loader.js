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
      script.src = 'js/tests/' + IN.Test.Cases[i] + '.js';
      var head = document.getElementsByTagName("head")[0];         
      head.appendChild(script);
    }
    
    // TODO: some tests might not have been loaded (since <script> load is async).
    // Need to do something like jQuery's DOM ready event.
    $(window).trigger('test-all-loaded',{"total": tests});
  }
  
  
  
  return that;
})();