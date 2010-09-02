IN.Test.Display = (function(){
  var that = {};
  var _resultList = "#test-results";
  
  var onTestFinished = function(event, response)
  {
    asserts = $('<ul>').addClass('asserts');
    for(var i =0; i < response.results.length; i++)
    {
      assert_item = createAssertItem(response.results[i]);
      asserts.append(assert_item);
    }
    
    $entry = $('<div>').addClass('entry').addClass(response.passed ? "pass" : "fail");
    $($entry).append($('<h4>').text(response.name));
    $($entry).append(asserts);
    var cat_elem_id = '#' + response.category;
    if($(cat_elem_id).length > 0)
    {
      $(cat_elem_id).append($entry);
    }
    else
    {
      var elt = $("<div>").attr('id', response.category).addClass('category');
      elt.append($('<h3>').text(response.category));
      elt.append($entry);
      $(_resultList).append(elt);
    }
  }
  
  var createAssertItem = function(assert)
  {
    var assert_item = $('<li>');
    if(assert.passed)
    {
      assert_item.addClass("pass");
      assert_item.text(assert.description);
    }
    else
    {
      assert_item.addClass("fail");
      var msg = "Failed: " + assert.description;
      if(assert.expected)
      {
        msg += ". Expected: " + assert.expected + " but got: " + assert.got;
      }
      assert_item.text(msg);
    }
    return assert_item;
  }
   
  var onTestLoad = function(event, test)
  {
    $content = $('#info');
    $content.append("<span class='notification' data-test-id='"+ test.id +"'>" + test.category + " - " + test.name + "</span><br/>");
    $('#control-panel').show();
    $('#content').show();
  }
  
  that.init = function()
  {
    $(window).bind('test-finished', onTestFinished);
    $(window).bind('test-load', onTestLoad);
    
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