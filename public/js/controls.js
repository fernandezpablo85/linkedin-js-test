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
  
  var appendTest = function(data, parent)
  {
    var getTestCode = function(data)
    {
      for(prop in data.info)
      {
        if(prop.match(/^test(.*)/)) return data.info[prop].toString();
      }
    }
    for(var prop in data.result)
    {
      if(!prop.match(/^test(.*)/)) continue;
      var testName = data.info.name;
      var testDescription = data.info.description || "please add description to the test";
      var testResult = data.result[prop].result;
      var testMessage = data.result[prop].message;
      parent.append($('<li>').text(testName + ": " + testMessage).addClass(testResult).addClass('result'));
      parent.append($('<li>').html(testDescription + '<a href="#">source</a>').addClass("description"));
      var code = $('<code>').html(getTestCode(data));
      parent.append($('<li>').append(code).addClass('code'));
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