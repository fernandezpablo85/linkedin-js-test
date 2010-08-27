IN.Test.Case = function(name)
{
  this.name = name;
  this.results = [];
      
  this.assertTrue = function(condition, description)
  {
    this.assertEquals(condition, true, description)
  }
  
  this.assertEquals = function(one, other, description)
  {
    if(one === other)
    {
      this.results.push({'description': description, 'passed':true});
    }
    else
    {
      this.results.push({'description': description, 'passed':false, 'expected': new String(one), 'got': new String(other)});
    }
  }
  
  this.assertDefined = function(object)
  {
    this.assertTrue(typeof object !== "undefined", "object should not be undefined");
  }
  
  this.finish = function()
  {
    $(window).trigger("test-finished", {'name': this.name, 'results': this.results});
  }
  
}
