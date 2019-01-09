$(document).ready(function() {
  let playerPick;
  let computerPick;
  let result; //from the players perspective
  let winAmount = 0;
  let loseAmount = 0;
  let drawAmount = 0;

  $("#list").click(function() {
    $("#rock, #paper, #scissors").css("background-color", "");

    switch (event.target.id) {
      case "rock":
        $("#rock").css("background-color", "green");
        playerPick = 0;
        break;
      case "paper":
        $("#paper").css("background-color", "green");
        playerPick = 1;
        break;
      case "scissors":
        $("#scissors").css("background-color", "green");
        playerPick = 2;
        break;
    }
  })

  $("#btn").click(function() {
    computerPick= Math.floor(Math.random() * 3);
    switch (playerPick) {
      case 0:                                 //user picks rock

        if(computerPick == 0) {                 //computer picks rock
          result="draw";
          drawAmount++
        } else if(computerPick == 1) {          //computer picks paper
          result="lose";
          loseAmount++
        } else if(computerPick == 2) {          //computer picks scissors
          result="win";
          winAmount++
        }
        break;
      case 1:                                 //user picks paper
        if(computerPick == 0) {                 //computer picks rock
          result="win";
          winAmount++
        } else if(computerPick == 1) {          //computer picks paper
          result="draw";
          drawAmount++
        } else if(computerPick == 2) {          //computer picks scissors
          result="lose";
          loseAmount++
        }
        break;
      case 2:                                 //user picks scissors
        if(computerPick == 0) {                 //computer picks rock
          result="lose";
          loseAmount++
        } else if(computerPick == 1) {          //computer picks paper
          result="win";
          winAmount++
        } else if(computerPick == 2){           //computer picks scissors
          result="draw";
          drawAmount++
        }
        break;
      default:
        result = "error";
        break;

    }

    // computerPick = Math.floor(Math.random() * 3); //reset computerPick
    let winRatio = winAmount / (winAmount + loseAmount + drawAmount);


    console.log("player: " + playerPick);
    console.log("computer: " + computerPick);
    console.log("result: " + result);
    console.log("win/lose/draw " + winAmount + loseAmount + drawAmount);
    // console.log(winRatio);

    $("#result").html("you chose: " + playerPick + "\nthe computer chose: " + computerPick + "\nresult: " + result);
    $("#stats").html("win/lose/draw/ratio" + winAmount +"/"+ loseAmount + "/" + drawAmount + "/" + winRatio);
  })



})
