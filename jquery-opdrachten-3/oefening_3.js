$(document).ready(function() {
  let n = 5;

  $("#guess").click(function() {
    let v = $("#num").val();

    if (v < n) {
      $("p").html("te laag");
    } else if (v > n) {
      $("p").html("te hoog");
    } else {
      $("p").html("correct");
    }
  })
})
