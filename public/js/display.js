var Display = (function(){
  var that = {};
  var _resultList = "#test-results";
  
  that.handlePass = function(event, result)
  {
    showContent();
    var $li = $('<li>').text("[" + result.name + "] test passed.");
    $li.addClass('pass');
    $(_resultList).append($li);
  }
  
  that.handleFail = function(event, result)
  {
    showContent();
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
  
  function showContent()
  {
    if(!$('#content').is(':visible'))
    {
      $('#content').show();
    }
  }
  
  
  that.init = function()
  {
    $(window).bind('test-failed', that.handleFail);
    $(window).bind('test-pass', that.handlePass);  
  }
  
  return that;
})();