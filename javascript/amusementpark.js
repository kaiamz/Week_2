$(document).ready(function(){

  var height = parseFloat(prompt("How tall are you in inches?"));

  if (height > 48){
    $("#over4ft").show();
  }
  else {
    $("#under4ft").show();
  }

});
