//Taking user name 
const userName = prompt("Please enter your name.");
document.querySelector(".player-name").innerHTML = userName;


const playAgain = document.querySelector(".play-button");
playAgain.addEventListener("click", () => {
  gamePlay();
});

const gamePlay = () => {
  var randomVar=Math.floor(Math.random()*6)+1;
  var randomDice="dice"+randomVar+".png";
  var x="images/"+randomDice;
  document.querySelectorAll("img")[0].setAttribute("src",x);
  var randomVar2=Math.floor(Math.random()*6)+1;
  var randomDice2="dice"+randomVar2+".png";
  var y="images/"+randomDice2;
  document.querySelectorAll("img")[1].setAttribute("src",y);
  if(randomVar2>randomVar){
    document.querySelector("h1").innerHTML="Player2 Wins!";
  }else if(randomVar2<randomVar) {
    document.querySelector("h1").innerHTML="Player1 Wins";
  }else{
    document.querySelector("h1").innerHTML="DRAW!!";
  }
}


