IN.Test.Assert = (function(){
  var that = {};
  var _name = "";
    
  that.setName = function(name)
  {
    _name = name;
  }
  
  that.ok = function(condition, description)
  {
    that.equals(condition, true, description)
  }
  
  that.equals = function(one, other, description)
  {
    if(one === other)
    {
      $(window).trigger('test-pass',{'name': _name, 'description': description});
    }
    else
    {
      $(window).trigger('test-failed',{'name': _name, 'description': description, 'expected': new String(one), 'got': new String(other)});
    }
  }
  
  return that;
})();
var $Tests = $Tests || [];