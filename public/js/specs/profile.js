var profileSpec = new Spec('profile-spec', 
function(){
  assert(true == true, 'this is good');
  assert(true == false, 'this is not good');
});
var $Specs = $Specs || [];
$Specs.push(profileSpec);
