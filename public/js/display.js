IN.Test.Display = (function(){
  var that = {};
  var _resultList = "#test-results";
  
  var onTestSuiteFinished = function(suite)
  { 
    var results = IN.Test.Controls.suiteResults(suite);
    $("#test-results").append(results);
  }
  
  var onSuiteLoad = function(event, suite)
  {
    var panelEntry = IN.Test.Controls.panelEntry(suite);
    $('#info').append(panelEntry);
    
    $('#control-panel').show();
    $('#content').show();
  }
  
  that.init = function()
  { 
    var TestRunner = YAHOO.tool.TestRunner;
    TestRunner.subscribe(TestRunner.TEST_SUITE_COMPLETE_EVENT, onTestSuiteFinished);
    $(window).bind('suite-loaded', onSuiteLoad);
    
    $('div.category').live('click', function(e){
      $(this).find('div').toggle('fast');
    });
    
    $('#info .notification').live('click',function(e){
      $(this).toggleClass('do-not-run')
      $(window).trigger('test-toggle',{'ignore' : $(this).hasClass('do-not-run'), 'name' : $(this).attr('data-test-id')});
    });
  }
  
  return that;
})();