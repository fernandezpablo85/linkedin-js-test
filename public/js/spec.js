function Spec(name, body){
  this.name = name;
  this.body = body;
  
  var assert = function(condition, description){
    if(!condition)
    {
      $(window).trigger('test-failed',[description]);
    }
  }
  
  this.run = function()
  {
    body.call(this);
  }
}