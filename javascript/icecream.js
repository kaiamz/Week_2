$(document).ready(function(){
  var icecream = ["Vanilla", "Chocolate", "Strawberry", "Pistachio"];

  $("img#dog").click(function(event){
    icecream.forEach(function(icecream){
      $("#listicecream").append("<li>" + icecream + " is quite a popular flavor. </li>")
    });
  });


});
