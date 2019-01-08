// Write your solution here
$("#name").focusin(function(){
  $("#name").css("border", "1px solid green");
});

$("#first_name").focusin(function(){
  $("#first_name").css("border", "1px solid green");
});

$("#name").focusout(function(){
  $("#name").css("border", "1px solid red");
});

$("#first_name").focusout(function(){
  $("#first_name").css("border", "1px solid red");
});
