const Player = require('../src/Player');//For player and making moves
const Gameboard = require('../src/Gameboard');//For gameboard, where ships are placed and attck processed
//Test if the player can attck the opponent and register a hit in the ship
test('Player can attack opponent', () => {
    const player = new Player('Alice');//Create Player
    const enemyBoard = new Gameboard();//Create Gameboard

    enemyBoard.placeShip([0, 0], 'horizontal', 3);//Placed a ship
    player.makeMove([0, 0], enemyBoard);//Enemy attcacks the ship
    expect(enemyBoard.board[0][0].hits).toBe(1);//Verify the enemy board as had been hitted
});