$(document).ready(function() {
  var n = 50;
  $("p").html(n);

  $("#up").click(function() {
    n = n + 1;
    $("p").html(n);
  })

  $("#down").click(function() {
    n = n -1;
    $("p").html(n);
  })

  $("#reset").click(function() {
    n = 50;
    $("p").html(n);
  })
})
