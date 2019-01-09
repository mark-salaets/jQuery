$(document).ready(function() {

  $("#btn").click(function() {
    let firstName = $("#firstName").val() || "[geen voornaam]";
    let lastName = $("#lastName").val() || "[geen achternaam]";
    let birthDate = $("#birthDate").val() || "[geen geboortedatum]";
    let birthPlace = $("#birthPlace").val() || "[geen geboorteplaats]";
    let work = $("#work").val() || "[geen werk]";
    let company = $("#company").val() || "[geen bedrijf]";

    $("#text").html("<p>" + firstName + " " + lastName +
    ", geboren op " + birthDate + " in " + birthPlace +
    ", momenteel een " + work + " bij " + company + ".</p>")

  })
})
