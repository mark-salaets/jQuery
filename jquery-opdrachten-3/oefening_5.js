$(document).ready(function() {
  $(document).on("keydown", function(e) {
    var keyPressed = e.which;

    //variables for position
    let vw = $(document).width();
    let vh = $(document).height();
    let x = $("#square").offset().left;
    let y = $("#square").offset().top;

    switch (keyPressed) {
      case 37: //when left button is pressed

        if (x<=0) {
          $("#square").animate({
            left: vw - 50
          },0)
        } else {
          $("#square").animate({
            left: "-=10"
          },0)
        }

        break;
      case 38: //when up button is pressed

        if (y<=0) {
          $("#square").animate({
            top: vh -50
          },0)
        } else {
          $("#square").animate({
            top: "-=10"
          },0)
        }

        break;
      case 39: //when right button is pressed

        if (x>=vw - 50) {
          $("#square").animate({
            left: vw - vw
          },0)
        } else {
          $("#square").animate({
            left: "+=10"
          },0)
        }

        break;
      case 40: //when down button is pressed

        if (y>=vh - 50) {
          $("#square").animate({
            top: vh - vh
          },0)
        } else {
          $("#square").animate({
            top: "+=10"
          },0)
        }

        break;
    }
  })
})
