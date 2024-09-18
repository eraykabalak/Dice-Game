function diceGame() {
    var dice1 = Math.random() * 6;
    dice1 = Math.floor(dice1) + 1;
    var dice2 = Math.random() * 6;
    dice2 = Math.floor(dice2) + 1;
    console.log(dice1);
    console.log(dice2);

    document.querySelector(".img1").setAttribute("src", "/images/dice" + dice1 + ".png");
    document.querySelector(".img2").setAttribute("src", "/images/dice" + dice2 + ".png");

    if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = "<i class='fa-regular fa-flag flag'></i> Player1 Wins";
    } else if (dice2 > dice1) {
        document.querySelector("h1").innerHTML = "Player2 Wins <i class='fa-regular fa-flag flag'></i>";
    } else {
        document.querySelector("h1").textContent = "DRAW!";
    }
}

// Trigger the diceGame() function when the page refreshes or loads

// Trigger the diceGame() function when the button is clicked
document.querySelector("button").addEventListener("click", diceGame);
