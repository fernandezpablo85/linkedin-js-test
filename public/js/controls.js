IN.Test.Controls = {};

IN.Test.Controls.panelEntry = function(suite)
{
  var ul = $("<ul>").text(suite.name);
  for(var i in suite.items)
  {
    ul.append($("<li>").text(suite.items[i].name));
  }
  return ul;  
}

IN.Test.Controls.suiteResults = function(result)
{
  var suite = result.testSuite;
  var clazz = (result.results.failed > 0) ? "fail" : "pass";
  var div = $("<div>").addClass('entry').addClass(clazz);
  div.append($('<h4>').text(suite.name));
  var ul = $('<ul/>')
  for(var i in suite.items)
  {
    var key = suite.items[i].name;
    var testResult = result.results[key];
    var clazz = result.results[key].failed > 0 ? "fail" : "pass";
    ul.append($('<li>').text(testResult.name).addClass(clazz));
  }
  div.append(ul);
  return div;
}