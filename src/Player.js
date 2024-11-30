const Gameboard = require('./Gameboard');

class Player {
    constructor(name,isComputer = false) { //Indicating wheather the play is computer defaults to false
        this.name = name;
        this.isComputer = isComputer;
        this.gameboard = new Gameboard();//Each player has their own gameboard
        this.previousMoves = new Set();//Ensuring attacks aren't repeated
    }
    //Executes an attack on the enemy player's gameboard
    makeMove(coords, enemyGameboard) {
        if (this.previousMoves.has(coords.toString())) {
            throw new Error('Move already made at these coordinates');
        }
        this.previousMoves.add(coords.toString());
        enemyGameboard.recieveAttack(coords);//Call the enamy gameboard to process the attack
    }
    //Generates a random valid move for the player
    generateRandomMove() {
        let x, y;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while (this.previousMoves.has([x, y].toString()));
        return [x, y];
    }
}

module.exports = Player;