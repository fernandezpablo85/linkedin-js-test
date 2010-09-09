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
  var getTestInfo = function(index, result)
  {
    var suite = result.testSuite;
    return {'info': suite.items[index], 'result': result.results[suite.items[index].name]}
  }
  
  var appendTest = function(test, parent)
  {
    for(var prop in test.result)
    {
      if(!prop.match(/^test(.*)/)) continue;
      var test = test.result[prop];
      parent.append($('<li>').text(test.name + ": " + test.message).addClass(test.result));
    }
  };
  
  var suite = result.testSuite;
  var clazz = (result.results.failed > 0) ? "fail" : "pass";
  var div = $("<div>").addClass('entry').addClass(clazz);
  div.append($('<h4>').text(suite.name));
  var list = $('<ul/>');
  
  for(var i in suite.items)
  {
    var test = getTestInfo(i, result);
    appendTest(test, list);
  }
  
  div.append(list);
  return div;
}