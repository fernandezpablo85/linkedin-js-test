IN.Test.Display = (function(){
  var that = {};
  var _resultList = "#test-results";
  
  var onTestFinished = function(event, response)
  { 
    $ul = $('<ul>').addClass('test');
    for(var i =0; i < response.results.length; i++)
    {
      var test = response.results[i];
      var $li = $('<li>').text(test.description);
      $li.addClass((test.failed) ? "fail" : "pass");
      $ul.append($li);
    }
    $(_resultList).append($('<h4>').text(response.name));
    $(_resultList).append($ul);
  }
   
  var onAllTestLoad = function()
  {
    $content = $('#content');
    $content.append("<div class='notification'>All Test Cases Loaded!</div>");
    $content.fadeIn('slow', function(){
      setTimeout(function(){
        $content.find('.notification').fadeOut('slow');
      },100);
    });
    $('#run').show();
  }
  
  
  that.init = function()
  {
    $(window).bind('test-finished', onTestFinished);
    $(window).bind('test-all-loaded', onAllTestLoad);
  }
  
  return that;
})();