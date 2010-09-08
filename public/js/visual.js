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
  var div = $("<div>").addClass('entry');
  var clazz = (result.results.failed > 0) ? "fail" : "pass";
  div.append($('<h4>').text(result.testSuite.name).addClass(clazz));
  console.log(result);
  return div;
}