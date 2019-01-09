$(document).ready(function() {
  $("#btn").click(function() {
    let salaris = $("#salaris").val();
    let gender = $('input[name=gender]:checked', '#myForm').val();
    let kids = $("#aantalKinderen").val();

    let uitgaven = 0.18;
    let verzekering = 0.07;
    let bijdragen = 0.05;

    let kosten = salaris * (uitgaven + verzekering + bijdragen);
    let subTotaal = salaris - kosten;

    let kortingGender = 0;
    let kortingKids = 0;



    if(gender == "vrouw") {
      kortingGender = subTotaal * 0.02;
    }

    if(kids >= 4) {
      kortingKids = subTotaal * 0.02;
    } else if(kids >= 3) {
      kortingKids = subTotaal * 0.01;
    }

    let totaal = subTotaal - (kortingKids + kortingGender);

    console.log("subtotaal: " + subTotaal);
    console.log("korting voor kinderen: " + kortingKids);
    console.log("korting voor geslacht: " + kortingGender);
    console.log("totaal: " + totaal);

    $("#result").html("<li>subtotaal: " + subTotaal + "</li>");
    $("#result").append("<li>korting voor kinderen: " + kortingKids + "</li>");
    $("#result").append("<li>korting voor geslacht: " + kortingGender + "</li>");
    $("#result").append("<li>totaal: " + totaal + "</li>");



  })
})
