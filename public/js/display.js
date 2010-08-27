IN.Test.Display = (function(){
  var that = {};
  var _resultList = "#test-results";
  
  var onTestPass = function(event, result)
  {
    var $li = $('<li>').text("[" + result.name + "] test passed.");
    $li.addClass('pass');
    $(_resultList).append($li);
  }
  
  var onTestFail = function(event, result)
  {
    var $li;
    if(result.expected)
    {
      $li = $('<li>').text("[" + result.name + "] test failed!. Expected: " + result.expected + " but got: " + result.got);  
    }
    else
    {
      $li = $('<li>').text("[" + result.name + "] test failed! " + result.name);  
    }
    $li.addClass('fail');
    $(_resultList).append($li);
    
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
    $(window).bind('test-failed', onTestFail);
    $(window).bind('test-pass', onTestPass);
    $(window).bind('test-all-loaded', onAllTestLoad);
  }
  
  return that;
})();