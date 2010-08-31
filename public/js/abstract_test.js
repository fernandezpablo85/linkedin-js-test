IN.Test.AbstractTest = function()
{
  this.assertTrue = function(condition, description)
  {
    if(condition)
    {
      this.results.push({'description': description, 'passed':true});
    }
    else
    {
      this.results.push({'description': description, 'passed':false});
    }
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
  
  this.assertDefined = function(object, description)
  {
    var desc = description || "object should not be undefined";
    this.assertTrue(typeof object !== "undefined", desc);
  }
  
  this.fail = function(error)
  {
    this.results.push({'description':error, 'passed': false});
    this.finish();
  }
  
  this.run = function(test)
  {
    var me = this;
    me.results = [];
    setTimeout(function(){
      me.checkFinished(test);
    }, this.timeout);
    
    this.doRun();
  }
  
  this.doRun = function()
  {
    throw "This method should be defined in the test case"
  }
  
  this.checkFinished = function(testCase)
  {
    if(!this.completed)
    {
      this.fail("Test timed out");  
    }
      
  }
  
  this.finish = function()
  {
    this.completed = true;
    $(window).trigger("test-finished", {'category': this.category, 'name': this.name, 'results': this.results , 'passed': !this.hasErrors()});
  }
  
  this.hasErrors = function()
  {
    var errors = false;
    for(var i = 0; i < this.results.length; i++)
    {
      var result = this.results[i];
      errors = errors || !result.passed;
    }
    return errors;
  }
  
}
