var Assert = (function(){
  var that = {};
  that.name = "";
    
  that.setName = function(name)
  {
    that.name = name;
  }
  
  that.ok = function(condition, description)
  {
    that.equals(condition, true, description)
  }
  
  that.equals = function(one, other, description)
  {
    if(one === other)
    {
      $(window).trigger('test-pass',{'name': that.name, 'description': description});
    }
    else
    {
      $(window).trigger('test-failed',{'name': that.name, 'description': description, 'expected': new String(one), 'got': new String(other)});
    }
  }
  
  return that;
})();
var $Tests = $Tests || [];