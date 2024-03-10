// Player names
var players = ["Player 1", "Player 2", "Player 3", "Player 4"];

// Function to change the player names
function editNames() {
    for (let i = 0; i < players.length; i++) {
        players[i] = prompt(`Change ${players[i]} name`) || players[i];
        document.querySelector(`.Player${i + 1}`).innerHTML = players[i];
    }
}

// Function to roll the dice
function rollTheDice() {
    setTimeout(function () {
        var randomNumbers = [];
        var winners = [];

        for (let i = 0; i < players.length; i++) {
            randomNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector(`.img${i + 1}`).setAttribute("src", `dice${randomNumbers[i]}.png`);
        }

        var maxRoll = Math.max(...randomNumbers);
        for (let i = 0; i < players.length; i++) {
            if (randomNumbers[i] === maxRoll) {
                winners.push(players[i]);
            }
        }

        if (winners.length === 1) {
            document.querySelector("h1").innerHTML = `${winners[0]} WINS!`;
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }, 1000);
}