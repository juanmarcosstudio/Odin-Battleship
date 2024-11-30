//For overall game management
const Player = require('./Player');

function startGame() {
    const player = new Player('Alice');
    const computer = new Player('Computer', true);

    //Initialize boards
    player.gameboard.placeShip([0, 0], 'horizontal', 3);
    computer.gameboard.placeShip([0, 0], 'horizontal', 3);

    let currentPlayer = player;

    while (!player.gameboard.allShipSunk() && !computer.gameboard.allShipSunk()) {
        const coords = currentPlayer.isComputer
        ? currentPlayer.generateRandomMove()
        : getUserInput();//Implement this to  interact with the DOM

        currentPlayer.makeMove(coords, currentPlayer === player ? computer.gameboard : player.gameboard);
        currentPlayer = currentPlayer === player ? computer : player;
    }

    console.log(`${currentPlayer.name} wins!`);
}

MediaSourceHandle.exports = startGame;