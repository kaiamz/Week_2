$(document).ready(function() {

  var bottlesLeft = 99;
  for(var index = 0; index = bottlesLeft; index +=1){
    $("#lyrics").append(bottlesLeft + " beer bottles on the wall, " + bottlesLeft + " bottles of beer. <br>Take one down and and pass it around, " + --bottlesLeft + " bottles of beer on the wall. <br/></br/>");
    //--bottlesLeft;
    };

    $("#lyrics").append ("No more bottles of beer on the wall, no more bottles of beer. <br>Go to the store and buy some more.");

});
