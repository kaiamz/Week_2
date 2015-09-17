$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    //array for each entry that would be submitted
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    //loop for each item
    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val(); //takes user's answers from each section of form and becomes a value and stored in userInput
      $("." + blank).text(userInput); //inserts user's value into corresponding places in the story
    });

    $("#story").show(); //show story

    event.preventDefault(); //show story on html page

    $("#header").hide(); //hides header when submitted
    $("#blanks").hide(); //hides form when submitted

  });

});
