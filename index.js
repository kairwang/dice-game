// change left die (player 1)
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + randomDiceImage;

document.querySelector(".img1").setAttribute("src",randomImageSource);

// change right die (player 2)
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSource2)

// change title (refresh me)
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}