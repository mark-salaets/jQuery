$(document).ready(function() {
  var clicks = 0;
  $("#btn").click(function() {
    clicks = clicks + 1;
    var string = $("#btn").html("clicks: " + clicks);
  })
});
