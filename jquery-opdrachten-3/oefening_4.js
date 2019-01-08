$(document).ready(function() {

  // Knop 1: verhoogt de hoogte met 10px, als deze groter is dan 100px, wordt de hoogte gereset naar 10px.

  $("#higher").click(function() {
    if ($("#square").height() > 100) {
      $("#square").height("10");
    } else {
      $("#square").height("+=10");
    }
  })


  // Knop 2: verandert de rechthoek in groen

  $("#green").click(function() {
    $("#square").css("background-color", "green");
  })


  // Knop 3: reset de oorspronkelijke kleuren

  $("#resetColor").click(function() {
    $("#square").css("background-color", "");
  })


  // Knop 4: Verwijdert de rechthoek

  $("#hide").click(function() {
    $("#square").hide();
  })


  // Knop 5: verschijnt weer de rechthoek

  $("#show").click(function() {
    $("#square").show();
  })


})
