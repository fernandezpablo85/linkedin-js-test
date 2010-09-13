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
    
    // Show / hide description and code
    
    $('#test-results li.result').live('click',function(event){
      $(event.target).next().toggle();
    });
    
    $('#test-results li.description a').live('click',function(event){
      $(event.target).parent().next().toggle();
    });
  }
  
  return that;
})();