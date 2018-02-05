var score = 0;
var wins=0;
var losses=0;
var targetNum;
var startGame = function () {
    score = 0;
    $("#currentScore").text(score);

    targetNum = Math.floor(Math.random() * 100+19);
    console.log(targetNum);
    //Display targetNum
    $("#target").text(targetNum);

    for(var i = 0; i<$(".crystal-btn").length; i++){
       console.log($("#"+i)) 
      $("#"+i).val(Math.floor(Math.random() * 12+1));
      console.log("value of crystal "+i +": ", $("#"+i).val())       
    }
    $("#wins").text(wins);
    $("#losses").text(losses);
}

startGame();

var clickCrystal = function(){
    console.log("clicked", this.value)
    score += parseInt(this.value);
    console.log(score);
    console.log(targetNum);
    $("#message").text("");

    $("#currentScore").text(score);
    if(score < targetNum){
        console.log("target not reached");
    }
    else if (score === targetNum){
        console.log("you wine");
        $("#message").text("You Win!");

        wins+= 1;
    }
    else{
        console.log("you lose");
        $("#message").text("You Lose!");
        losses+= 1;
        startGame();

    }
}

$(".crystal-btn").on("click", clickCrystal);
console.log(score);

