var IN = IN || {};
IN.Test = IN.Test || {};

IN.Test.onLogin = function()
{
  IN.Event.on(IN, "auth", IN.Test.init);
}

IN.Test.init = function()
{
  $('#toggle-all').click(function(event){
     $('#info .notification').click();
  });
  
  $('#login-button').fadeOut('slow');
  IN.Test.Display.init();
  IN.Test.Loader.init();
  IN.Test.Runner.init();
}
