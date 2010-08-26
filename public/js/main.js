var IN = IN || {};
IN.Test = IN.Test || {};
IN.Test.Specs = ['profile'];

IN.Test.onLogin = function()
{
  IN.Event.on(IN, "auth", IN.Test.setUpUI);
  Display.init();
}

IN.Test.setUpUI = function()
{
  $('#login-button').fadeOut('slow');
  IN.Test.begin();
}

IN.Test.begin = function()
{
  var specs = IN.Test.Specs.length;
  for(var i = 0; i < specs; i++)
  {
    var script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.src = 'js/specs/' + IN.Test.Specs[i] + '.js';
    var head = document.getElementsByTagName("head")[0];         
    head.appendChild(script);
  }
}