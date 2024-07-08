let player1Score = 0;
let player2Score = 0;

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6

    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
        player1Score++;
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
        player2Score++;
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

    document.getElementById("score1").textContent = player1Score;
    document.getElementById("score2").textContent = player2Score;
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    document.querySelector("h1").innerHTML = "Roll the Dice!";
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    document.getElementById("score1").textContent = player1Score;
    document.getElementById("score2").textContent = player2Score;
}

document.getElementById("rollButton").addEventListener("click", rollDice);
document.getElementById("resetButton").addEventListener("click", resetGame);