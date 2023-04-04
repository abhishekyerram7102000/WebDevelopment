var random1 = Math.floor(Math.random() * 6) + 1; //1-6

var DiceImage1 = "dice" + random1 + ".png"; //dice1.png - dice6.png

var ImageSource1 = "images/" + DiceImage1; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", ImageSource1);


var random2 = Math.floor(Math.random() * 6) + 1;

var ImageSource2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);


//If player 1 wins
if (random1 > random2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (random2 > random1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}