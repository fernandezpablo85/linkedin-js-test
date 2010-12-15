var LinkedIn = LinkedIn || {};
LinkedIn.Test = {};

LinkedIn.Test.appendScript = function (name) {
  var head= document.getElementsByTagName('head')[0];
  var script= document.createElement('script');
  script.type= 'text/javascript';
  script.src= "js/tests/" + name + '.js'
  head.appendChild(script);
}

LinkedIn.Test.onLogin = function () {
  IN.Event.on(IN, "auth", LinkedIn.Test.loadSuites);
}

LinkedIn.Test.loadSuites = function () {
  var suites = ['connections', 'member_updates', 'network_updates', 'profile', 'raw', 'search'], i = 0;
  for(; i < suites.length ; i++) {
    LinkedIn.Test.appendScript(suites[i]);
  }
}

LinkedIn.Test.Visuals = {

  container : document.getElementById('content'),
  title : document.title,
  failures: 0,

  addVisuals : function (testRunner) {
    testRunner.subscribe(testRunner.TEST_PASS_EVENT, LinkedIn.Test.Visuals.onTestPassed);
    testRunner.subscribe(testRunner.TEST_FAIL_EVENT, LinkedIn.Test.Visuals.onTestFailed);
  },

  onTestPassed : function (data) {
    console.log(data);
    LinkedIn.Test.Visuals.container.innerHTML += '<div class="test-case">' + data.testCase.name + ":" + data.testName + '</div>';
  },

  onTestFailed : function (data) {
    LinkedIn.Test.Visuals.container.innerHTML += '<div class="test-case, fail" title="'+ data.error +'">' + data.testCase.name + ":" + data.testName + '</div>';
    document.title = LinkedIn.Test.Visuals.title + " (" + (++LinkedIn.Test.Visuals.failures) + ")";
    console.error(data);
  }
}