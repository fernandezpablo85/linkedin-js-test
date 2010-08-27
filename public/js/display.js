IN.Test.Display = (function(){
  var that = {};
  var _resultList = "#test-results";
  
  var onTestFinished = function(event, response)
  { 
    $ul = $('<ul>').addClass('test');
    for(var i =0; i < response.results.length; i++)
    {
      var test = response.results[i];
      var $li = $('<li>');
      if(test.passed)
      {
        $li.addClass("pass");
        $li.text(test.description);
      }
      else
      {
        $li.addClass("fail");
        var msg = test.description + " failed. Expected: " + test.expected + " but got: " + test.got;
        $li.text(msg);
      }
      $ul.append($li);
    }
    $(_resultList).append($('<h4>').text(response.name));
    $(_resultList).append($ul);
  }
   
  var onTestLoad = function(event, test)
  {
    $content = $('#info');
    $content.append("<span class='notification'>Loaded: " + test.name + "</span><br/>");
    $('#control-panel').show();
    $('#content').show();
  }
  
  
  that.init = function()
  {
    $(window).bind('test-finished', onTestFinished);
    $(window).bind('test-load', onTestLoad);
  }
  
  return that;
})();